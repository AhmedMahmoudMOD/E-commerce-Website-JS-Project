// Import the storageModule
import { storageModule } from "../common/storageModule.js";
import {users,products,orders} from "../common/staticdata.js";


websiteDataLoad();


let currentUserObj = storageModule.getItem('currentUser');
let allProducts = storageModule.getItem('products');
let newArrivals = allProducts.slice(-4);
let newArrivalsDiv = document.getElementById('newArrivals');
let allUsers = storageModule.getItem('users');
let guestCartArr = storageModule.getItem('guest-cart');

renderProducts(newArrivalsDiv,newArrivals);
// imgHover(newArrivals);


let specialOffersDiv = document.getElementById('specialOffers');
let specialOffers = filterOffers(allProducts);
renderProducts(specialOffersDiv,specialOffers);
// imgHover(specialOffers);

let ourProductsDiv = document.getElementById('ourProducts');
let ourProducts = allProducts.slice(0,8);
renderProducts(ourProductsDiv,ourProducts);
// imgHover(ourProducts);

cardAddtoCart();


// Retrieve the currentUser from local storage
const storedCurrentUser = storageModule.getItem('currentUser');
const navUsernameElement = document.getElementById('userProfileDiv');

// Check if currentUser exists and has a username property
if (storedCurrentUser && storedCurrentUser.userName) {
    // Access the username and update the navUsername
    
    const userNameText = navUsernameElement.querySelectorAll("a")[0]
    if (navUsernameElement) {
        userNameText.textContent = storedCurrentUser.userName;
    }
} else {
    // Handle the case where the currentUser or username is not available
    // console.error('Error: currentUser or username not found in local storage');
    // Create a login button and redirect to Login page
    navUsernameElement.style.display='none';
    const loginButton = document.createElement('button');
    loginButton.classList.add('btn','btn-primary');
    loginButton.textContent = 'Log In';
    navbar.appendChild(loginButton);
    loginButton.addEventListener('click', function() {
        window.location.href = '../html/signPage.html';
    })
}

// Ahmed Mahmoud //

function renderProducts(containerDiv,Products){
  containerDiv.innerHTML = "";
  Products.forEach((product,index) => {
      let colDiv=document.createElement('div');
      colDiv.classList.add('col','fade-in')
      /* col Div Created */
      let productBox = document.createElement('div');
      productBox.classList.add('product-box');
      /* Product Box Created */

      let innerBox = document.createElement('div');
      innerBox.classList.add('product-inner-box','position-relative');
       /* Inner Box Created */

      /* Icons Div Created */
      let iconsDiv = document.createElement('div');
      iconsDiv.classList.add('icons','position-absolute');
      let iconLink = document.createElement('a'); 
      iconLink.href='#';
      iconLink.classList.add('text-decoration-none','text-dark');
      let WishIcon = document.createElement('i');
      WishIcon.classList.add('far','fa-heart');
      iconLink.appendChild(WishIcon);
      /* Wish Icon  Link Appended  */
      let secIconLink = document.createElement('a');
      secIconLink.href='#';
      secIconLink.classList.add('text-decoration-none','text-dark','modal-opener');
      secIconLink.setAttribute('data-bs-toggle','modal');
      secIconLink.setAttribute('data-bs-target','#productModal');
      secIconLink.id=product.productId;

      let eyeIcon = document.createElement('i');
      eyeIcon.classList.add('fas','fa-eye');
      secIconLink.appendChild(eyeIcon);
      /* Eye Icon Link Appended */
      iconsDiv.append(iconLink,secIconLink);
      /* Icons Div Appended */

       /*onSale Div Created */
      let onSaleDiv = document.createElement('div');
      if(product.discount!==0){
      onSaleDiv.classList.add('onsale');
      let onSaleSpan = document.createElement('span');
      onSaleSpan.classList.add('badge','rounded-0');
      let onSaleIcon= document.createElement('i');
      onSaleIcon.classList.add('fal','fa-long-arrow-down');
      let DiscountSpan = document.createElement('span')
      DiscountSpan.innerText=`  ${product.discount*100} %`;
      /* On Sale Span Appended */
      onSaleSpan.append(onSaleIcon,DiscountSpan);
      
      onSaleDiv.append(onSaleSpan);
      /* On Sale Div Appended */
      }

      let pImg = document.createElement('img');
      pImg.classList.add('img-fluid');
      pImg.src=product.images[0];
      /* Product Image Created */

      /* Cart Button Div Created*/
      let cartBtnDiv =  document.createElement('div');
      cartBtnDiv.classList.add('cart-btn-card');
      cartBtnDiv.id=product.productId;
      let cartBtn  = document.createElement('button');
      cartBtn.classList.add('btn','btn-light','shadow-sm','rounded-pill');
      let cartIcon = document.createElement('i');
      cartIcon.classList.add('fal','fa-shopping-cart');
      let cartTitle = document.createElement('span');
      cartTitle.innerText='  Add to Cart';

      cartBtn.append(cartIcon,cartTitle);
      /* Cart Btn Appended */
      cartBtnDiv.append(cartBtn);
      /* Cart Btn Div Appended */
      if(product.discount!==0)
          innerBox.append(iconsDiv,onSaleDiv,pImg,cartBtnDiv);
      else
          innerBox.append(iconsDiv,pImg,cartBtnDiv);
      /* Inner Box Appended */

      
      let productInfoDiv = document.createElement('div');
      productInfoDiv.classList.add('product-info', 'position-relative');
      /* Product Info Created */

      
      let productNameDiv = document.createElement('div');
      productNameDiv.classList.add('product-name');
      let productName = document.createElement('h5');
      productName.textContent = `${product.name}`
      productName.classList.add('product-link');
      productName.id=product.productId;
      /* Product Name Created */
      productNameDiv.appendChild(productName);
       /* Product Name Appended */
      
      let productPriceDiv = document.createElement('div');
      productPriceDiv.classList.add('product-price');
      let productPriceSpan = document.createElement('span');
      productPriceSpan.textContent = `${product.price} EGP`;
      /* Product Price Created */
       productPriceDiv.appendChild(productPriceSpan);
      if(product.discount!=0){
          let discountedPriceSpan = document.createElement('span');
          let discountedPrice=product.price-product.discount*product.price;
          discountedPriceSpan.textContent = `  ${discountedPrice} EGP`;
          productPriceSpan.style.textDecorationLine='line-through';
          discountedPriceSpan.style.color='red';
          productPriceDiv.appendChild(discountedPriceSpan);
      }
       /* Product Price Appended */

      
      productInfoDiv.appendChild(productNameDiv);
      productInfoDiv.appendChild(productPriceDiv);

      
      productBox.append(innerBox,productInfoDiv);
      /* Product Box Appended */

      colDiv.appendChild(productBox);
      /* Col Div Appended */

      containerDiv.appendChild(colDiv);
})
}
function imgHover (shownProducts){
  let proboxes=document.querySelectorAll('.product-box');
  for (let i=0;i<proboxes.length;i++){
      proboxes[i].addEventListener('mouseover',function(){
          proboxes[i].querySelectorAll('img')[0].src=shownProducts[i].images[1];
      })
      proboxes[i].addEventListener('mouseleave',function(){
          proboxes[i].querySelectorAll('img')[0].src=shownProducts[i].images[0];
      })
  }
}
function cardAddtoCart (){
  let cartBtns=document.querySelectorAll('.cart-btn-card');
  for (let i=0;i<cartBtns.length;i++){
      cartBtns[i].addEventListener('click',function addAction(e){
          console.log(currentUserObj);
          let cartedProduct= {
              productId : this.id,
              quantity : 1,
          }
          if (currentUserObj!==null&&currentUserObj.userType=='customer'){
              let index = allUsers.findIndex(user => user.id===currentUserObj.id)
              allUsers[index].cart.push(cartedProduct);
              currentUserObj.cart.push(cartedProduct);
              storageModule.setItem('users',allUsers);
              storageModule.setItem('currentUser',currentUserObj);
              console.log(allUsers[index]);
          }
          else if(currentUserObj==null){
              guestCartArr.push(cartedProduct);
              storageModule.setItem('guest-cart',guestCartArr)
          }
          else;

          cartBtns[i].querySelector('span').innerText = "  Added to Cart";
          cartBtns[i].querySelector('button').classList.remove('btn-light');
          cartBtns[i].querySelector('button').classList.add('btn-success');
          this.removeEventListener('click', addAction); // removing the event after the first click
      })
      
  }
}

function filterOffers(Products){
  // Filter Based  on  Discunt
    let offeredProducts = Products.filter(product=> product.brand!==0)
    return offeredProducts.slice(0,4);
}

function websiteDataLoad(){
    if(storageModule.getItem('products')===null)
        storageModule.setItem('products',products);
    if(storageModule.getItem('users')===null)
        storageModule.setItem('users',users);
    if(storageModule.getItem('orders')===null)
        storageModule.setItem('orders',orders);

    // storageModule.setItem('guest-cart',[]);
}
