// Import the storageModule
import { storageModule } from "../common/storageModule.js";
import {users,products,orders} from "../common/staticdata.js";


websiteDataLoad();


let currentUserObj = storageModule.getItem('currentUser');
let allProducts = storageModule.getItem('products');
let allUsers = storageModule.getItem('users');
let guestCartArr = storageModule.getItem('guest-cart');

let newArrivals = allProducts.slice(-4);
let newArrivalsDiv = document.getElementById('newArrivals');
renderProducts(newArrivalsDiv,newArrivals);
imgHover(newArrivalsDiv,newArrivals);


let specialOffersDiv = document.getElementById('specialOffers');
let specialOffers = filterOffers(allProducts);
renderProducts(specialOffersDiv,specialOffers);
imgHover(specialOffersDiv,specialOffers);

let ourProductsDiv = document.getElementById('ourProducts');
let ourProducts = allProducts.slice(0,8);
renderProducts(ourProductsDiv,ourProducts);
imgHover(ourProductsDiv,ourProducts);

cardAddtoCart();
linkProducts();
openModal();


// Retrieve the currentUser from local storage
const storedCurrentUser = storageModule.getItem('currentUser');
const navUsernameElement = document.getElementById('userProfileDiv');

// Check if currentUser exists and has a username property
if (storedCurrentUser && storedCurrentUser.userName) {
    // Access the username and update the navUsername
    
    const userNameText = navUsernameElement.querySelectorAll("a")[0]
    if (storedCurrentUser) {
        userNameText.textContent = storedCurrentUser.userName;
    }
} else {
    // case where the currentUser or username is not available
    // Create a login button and redirect to Login page
    navUsernameElement.style.display='none';
    const loginButton = document.createElement('button');
    loginButton.classList.add('btn','btn-primary','me-4');
    loginButton.style.width = '100px';
    loginButton.textContent = 'Log In';
    navbar.appendChild(loginButton);
    loginButton.addEventListener('click', function() {
        window.location.href = '../html/signPage.html';
    })
}

const logoutButton = document.getElementById('logoutBtn');
if (logoutButton) {
    logoutButton.addEventListener('click', function() {
        // Clear the currentUser object in local storage
        localStorage.removeItem('currentUser');
        // Redirect to the login page
        // window.location.href = '../html/signPage.html';
        location.reload()
    });
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
      if(isAlreadyWishlisted(product.productId))
            WishIcon.style.color='red';
      WishIcon.addEventListener('click',(e)=> wishListToggle(product.productId,e.target));
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

      if(product.stock!=0){
        
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
        }
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
      if (product.stock==0)
      productPriceSpan.textContent="Sold Out";
     else
      productPriceSpan.textContent = `${product.price} EGP`;
      
      /* Product Price Created */
       productPriceDiv.appendChild(productPriceSpan);
      if(product.discount!=0&&product.stock!=0){
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
function imgHover (shownProductsDiv,shownProducts){
  let proboxes=shownProductsDiv.querySelectorAll('.product-box');
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
              const cartIndex = currentUserObj.cart.findIndex(product => product.productId === cartedProduct.productId);

            if (cartIndex !== -1){
                // Product already exists , just updating the quantity
                currentUserObj.cart[cartIndex].quantity=cartedProduct.quantity;
                allUsers[index].cart[cartIndex].quantity=cartedProduct.quantity;
                storageModule.setItem('users',allUsers);
                storageModule.setItem('currentUser',currentUserObj);
            }else {
                // Product is not already carted
                allUsers[index].cart.push(cartedProduct);
                currentUserObj.cart.push(cartedProduct);
                storageModule.setItem('users',allUsers);
                storageModule.setItem('currentUser',currentUserObj);
            }
              cartBtns[i].querySelector('span').innerText = "  Added to Cart";
                cartBtns[i].querySelector('button').classList.remove('btn-light');
                cartBtns[i].querySelector('button').classList.add('btn-success');
                this.removeEventListener('click', addAction);
              console.log(allUsers[index]);
          }
          else if(currentUserObj==null){
            const cartIndex = guestCartArr.findIndex(product => product.productId === cartedProduct.productId);
            if (cartIndex !== -1){
                // Product already exists , just updating the quantity
                guestCartArr[cartIndex].quantity=cartedProduct.quantity;
                storageModule.setItem('guest-cart',guestCartArr)
                
            }else {
                // Product is not already carted
                guestCartArr.push(cartedProduct);
                storageModule.setItem('guest-cart',guestCartArr)
            }
              cartBtns[i].querySelector('span').innerText = "  Added to Cart";
                cartBtns[i].querySelector('button').classList.remove('btn-light');
                cartBtns[i].querySelector('button').classList.add('btn-success');
                this.removeEventListener('click', addAction);
          }
          else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Add to Cart is Only Avaliable to Our Customers",
                footer: '<a href="./signPage.html">Sign Up or Login As Customer</a>'
              });
          }
      })
      
  }
}

function filterOffers(Products){
  // Filter Based  on  Discunt
    let offeredProducts = Products.filter(product=> product.brand!==0)
    return offeredProducts.slice(0,4);
}

function linkProducts(){
    let productLinks = document.querySelectorAll('.product-link');
    for (let i = 0 ; i<productLinks.length;i++){
        productLinks[i].addEventListener('click',function(){
            // window.open(`./product.html?product_id=${this.id}`,'_self');
            window.location.href=`./product.html?product_id=${this.id}`
        })
    }
}

function openModal(){
    let openers = document.querySelectorAll('.modal-opener');
    for (let i = 0 ; i<openers.length;i++){
        openers[i].addEventListener('click',function(e){
            let innerCarousel = document.querySelector('#innerCarousel');
            innerCarousel.innerHTML='';
            let modalProduct = allProducts.find((product) => product.productId==this.id)
            let addToCartBtn = document.querySelector('.cart-btn-modal button');
            addToCartBtn.id=modalProduct.productId;
            modalProduct.images.forEach((img,index)=>{

                
                // Create Carousel Item Div
                let carouselItem = document.createElement('div');
                carouselItem.classList.add('carousel-item');
                if(index==0)
                    carouselItem.classList.add('active');

                // Create Img 
                let carouselImage= document.createElement('img');
                carouselImage.src = img;
                carouselImage.classList.add('d-block', 'w-100','img-c');
                // Appending
                carouselItem.appendChild(carouselImage);
                innerCarousel.appendChild(carouselItem);

            })
            let productView = document.querySelector('#productView');
            productView.innerHTML='';

            let brandP = document.createElement('p');
            brandP.innerText=modalProduct.brand;
            let nameP = document.createElement('h5');
            nameP.classList.add('mb-4')
            nameP.innerText=modalProduct.name;
            let priceSpan = document.createElement('span');
            priceSpan.innerText=`${modalProduct.price} EGP`
            let discountSpan = document.createElement('span');
            
            if(modalProduct.discount!=0){
                
                let discountedPrice = modalProduct.price-modalProduct.price*modalProduct.discount;
                discountSpan.innerText=`  ${discountedPrice} EGP`;
                priceSpan.style.textDecorationLine='line-through';
                discountSpan.style.color = 'red';
            }
            let descriptionP = document.createElement('p');
            descriptionP.classList.add('mt-4');
            descriptionP.innerText=modalProduct.description;

            if(modalProduct.discount!=0)
                productView.append(brandP,nameP,priceSpan,discountSpan,descriptionP)
            else
                productView.append(brandP,nameP,priceSpan,descriptionP);

            if(modalProduct.stock==0){
                soldout.style.display='block';
                modalCart.style.display='none';
            } else{
                soldout.style.display='none';
                modalCart.style.display='flex';
                addtoCartModal();    // Invoking Add to cart Modal
            }
            
        })
       
    }
}
function addtoCartModal(){
    let controlButtons = productModal.querySelectorAll('.input-group-text');
    let cartQuantity= productModal.querySelector('.input-group input');

    cartQuantity.addEventListener('input',function(){
        if(this.value<1)
            this.value=1;
    })
    
    controlButtons[0].setAttribute('disabled','true');
    controlButtons[0].classList.add('disabled');
    cartQuantity.value=1;
    controlButtons[0].addEventListener('click',function(e){
            if(cartQuantity.value==2){
                controlButtons[0].setAttribute('disabled','true');
                controlButtons[0].classList.toggle('disabled');
            }
            --cartQuantity.value;
            e.stopImmediatePropagation(); // stopping the event from firing for other modals causing incrementing or decrementing values by more than one at a time
            
    })
    controlButtons[1].addEventListener('click',function(e){
        if(cartQuantity.value==1){
            controlButtons[0].classList.toggle('disabled');
            controlButtons[0].removeAttribute('disabled');
        }
            ++cartQuantity.value
            e.stopImmediatePropagation(); // stopping the event from firing for other modals causing incrementing or decrementing values by more than one at a time
        
    })
    let addToCartBtn = document.querySelector('.cart-btn-modal button');
    addToCartBtn.addEventListener('click',function(){
        let cartedProduct = {
            productId : this.id,
            quantity : Number(cartQuantity.value)
        }
        if (currentUserObj!==null&&currentUserObj.userType=='customer'){
            
            // Finding The Current User Index
            let index = allUsers.findIndex(user => user.id===currentUserObj.id);
           // Check if the product already exists in the currentUser Cart
           const cartIndex = currentUserObj.cart.findIndex(product => product.productId === cartedProduct.productId);

            if (cartIndex !== -1){
                // Product already exists , just updating the quantity
                currentUserObj.cart[cartIndex].quantity=cartedProduct.quantity;
                allUsers[index].cart[cartIndex].quantity=cartedProduct.quantity;
                storageModule.setItem('users',allUsers);
                storageModule.setItem('currentUser',currentUserObj);
            }else {
                // Product is not already carted
                allUsers[index].cart.push(cartedProduct);
                currentUserObj.cart.push(cartedProduct);
                storageModule.setItem('users',allUsers);
                storageModule.setItem('currentUser',currentUserObj);
            }
            Swal.fire({
                icon: "success",
                title: "Item Added to Cart",
                showConfirmButton: false,
                timer: 2500,
              });
        }
        else if(currentUserObj==null){
            const cartIndex = guestCartArr.findIndex(product => product.productId === cartedProduct.productId);
            if (cartIndex !== -1){
                // Product already exists , just updating the quantity
                guestCartArr[cartIndex].quantity=cartedProduct.quantity;
                storageModule.setItem('guest-cart',guestCartArr)
                
            }else {
                // Product is not already carted
                guestCartArr.push(cartedProduct);
                storageModule.setItem('guest-cart',guestCartArr)
            }
            Swal.fire({
                icon: "success",
                title: "Item Added to Cart",
                showConfirmButton: false,
                timer: 2500,
              });
        }
        else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Add to Cart is Only Avaliable to Our Customers",
                footer: '<a href="./signPage.html">Sign Up or Login As Customer</a>'
              });
        }
    })
}

function wishListToggle(productID,icon){
    if (currentUserObj == null || currentUserObj.userType!= 'customer')
    {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Wishlist Feature Only Available for Our Customers",
            footer: '<a href="./signPage.html">Sign Up or Login As Customer</a>'
        });
    }
    else 
    {
        
        let index = allUsers.findIndex(user => user.id===currentUserObj.id);
        if(isAlreadyWishlisted(productID)){
            currentUserObj.wishList=currentUserObj.wishList.filter(pID => pID !== productID);
            allUsers[index]=currentUserObj;
            icon.style.color='black';
            storageModule.setItem('currentUser',currentUserObj);
            storageModule.setItem('users',allUsers);

        } else {
            currentUserObj.wishList.push(productID);
            allUsers[index]=currentUserObj;
            console.log(icon);
            console.log(currentUserObj.wishList);
            icon.style.color='red';
            storageModule.setItem('currentUser',currentUserObj);
            storageModule.setItem('users',allUsers);
       }
    }
}

function isAlreadyWishlisted(productID){
    const wishIndex = currentUserObj?.wishList.findIndex(pID => pID === productID);
    if(wishIndex!==-1&&currentUserObj!==null){
        return true;
    } else {
        return false;
    }
}


function websiteDataLoad(){
    if(storageModule.getItem('products')===null)
        storageModule.setItem('products',products);
    if(storageModule.getItem('users')===null)
        storageModule.setItem('users',users);
    if(storageModule.getItem('orders')===null)
        storageModule.setItem('orders',orders);
   if(storageModule.getItem('guest-cart')===null)
     storageModule.setItem('guest-cart',[]);
}
