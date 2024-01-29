import {storageModule} from '../common/storageModule.js';

let allProducts = storageModule.getItem('products');
let allUsers = storageModule.getItem('users');
let currentUserObj = storageModule.getItem('currentUser');
let guestCartArr = storageModule.getItem('guest-cart');

let productID = getPID();
let productIndex = allProducts.findIndex(product=>product.productId==productID);
let shownProduct = getProduct(productID);
let relatedProducts = filterRelated(shownProduct);

window.addEventListener('load',function(){
    renderCarousel(shownProduct);
    renderInfo(shownProduct);
    renderTabs(shownProduct);
    checkStock();
    navLinksControl();
    filterRelated(shownProduct);
    renderRelated(relatedProducts);
    imgHover(relatedProducts);
    cardAddtoCart();
    openModal();
    linkProducts();
   

})
function getPID(){
     // Get the current URL
     let currentUrl = window.location.search;

     // Create a URLSearchParams object from the URL
     let urlParams = new URLSearchParams(currentUrl);

     // Get the value of the 'product_id' parameter
     let pID = urlParams.get('product_id');

     return  pID;

}
function getProduct(pID){
    let targetProduct = allProducts.find((product)=>product.productId==pID);
    console.log(targetProduct);
    return targetProduct;
}

function renderCarousel(shownProduct){
     // Get the carousel indicators container
    let indicatorsContainer = document.getElementsByClassName('carousel-indicators')[0];
    let innerCarousel = document.querySelector('#innerCarousel');
    indicatorsContainer.innerHTML='';
    innerCarousel.innerHTML='';
    shownProduct.images.forEach((image,index)=> {

    // Create indicators dynamically
    let indicator = document.createElement('button');
    indicator.setAttribute('data-bs-target', '#imgCarousel');
    indicator.setAttribute('data-bs-slide-to', `${index}`);
    if (index === 0) {
        indicator.classList.add('active');
    }
    indicatorsContainer.appendChild(indicator);

    // Create Carousel Item Div
    let carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item');
    if(index==0)
        carouselItem.classList.add('active');

    // Create Img 
    let carouselImage= document.createElement('img');
    carouselImage.src = image;
    carouselImage.classList.add('d-block', 'w-100','img-fluid');
    // Appending
    carouselItem.appendChild(carouselImage);
    innerCarousel.appendChild(carouselItem);
            
    });
}

function renderInfo(shownProduct){
    let productView = document.querySelector('#productView');
        productView.innerHTML='';

        let brandP = document.createElement('h4');
        brandP.innerText=shownProduct.brand;
        brandP.classList.add('mb-4')
        let nameP = document.createElement('h3');
        nameP.classList.add('mb-4')
        nameP.innerText=shownProduct.name;
        let priceSpan = document.createElement('span');
        priceSpan.innerText=`${shownProduct.price} EGP`
        let discountSpan = document.createElement('span');
        
        if(shownProduct.discount!=0){
            
            let discountedPrice = shownProduct.price-shownProduct.price*shownProduct.discount;
            discountSpan.innerText=`  ${discountedPrice} EGP`;
            priceSpan.style.textDecorationLine='line-through';
            discountSpan.style.color = 'red';
        }

        if(shownProduct.discount!=0)
            productView.append(brandP,nameP,priceSpan,discountSpan)
        else
            productView.append(brandP,nameP,priceSpan);

}

function renderTabs(shownProduct){
    let descTab = document.querySelector('#nav-desc');
    let specsTab = document.querySelector('#nav-specs');
    descTab.innerHTML='';
    specsTab.innerHTML='';

    let descriptionP = document.createElement('p');
    descriptionP.classList.add('mt-3');
    descriptionP.textContent=shownProduct.description;
    descTab.appendChild(descriptionP);

    let speceUl = document.createElement('ul');
    speceUl.classList.add('list-unstyled','mt-3')
    for (const spec in shownProduct.specifications) {
    if(shownProduct.specifications[spec]!=""){
       let specSpan = document.createElement('span');
       specSpan.classList.add('spec-span');
       specSpan.textContent=shownProduct.specifications[spec];
       let specLi = document.createElement('li');
       specLi.innerHTML=`<b>${spec.toUpperCase()}</b> : ${specSpan.textContent}`
       speceUl.appendChild(specLi);
    }
    }

    specsTab.appendChild(speceUl);
}

function addtoCart(){
    let controlButtons = document.querySelectorAll('.input-group-text');
    let cartQuantity= document.querySelector('.input-group input');
    let addToCartBtn = document.querySelector('.cart-btn button');
    addToCartBtn.id=productID;

    cartQuantity.addEventListener('input',function(){
        if(this.value<1)
            this.value=1;
        if(this.value==1){
            controlButtons[0].setAttribute('disabled','true');
            controlButtons[0].classList.toggle('disabled');
        }else{
            controlButtons[0].classList.remove('disabled');
            controlButtons[0].removeAttribute('disabled');
        }
    })
    controlButtons[0].setAttribute('disabled','true');
    controlButtons[0].classList.add('disabled');
    cartQuantity.value=1;
    controlButtons[0].addEventListener('click',function(e){
            if(cartQuantity.value==2||cartQuantity.value==1){
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
            console.log(guestCartArr);
        }
        else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Add to Cart is Only Avaliable to Our Customers",
                footer: '<a href="./signUp.html">Sign Up or Login As Customer</a>'
              });
        }
    })
}

function navLinksControl(){
    let lastProductId = allProducts[allProducts.length - 1].productId
    let firstProductId = allProducts[0].productId;
    let nextLink = document.getElementById('nextLink');
    let prevLink = document.getElementById('prevLink');
    let nextId = allProducts[productIndex+1]?.productId;
    let prevId = allProducts[productIndex-1]?.productId;

    if(productID==firstProductId){
        prevLink.style.display='none';
        linkDivider.style.display='none';
    }
    if(productID===lastProductId){
        nextLink.style.display='none';
        linkDivider.style.display='none';
    }

    nextLink.href=`./product.html?product_id=${nextId}`
    prevLink.href=`./product.html?product_id=${prevId}`

}

function filterRelated(shownProduct){
        let cBrand = shownProduct.brand;
        let cCategory = shownProduct.category;
        // Filter Based  on Brand First
        let relatedProducts = allProducts.filter(product=>{
          return product.brand==cBrand&&product.productId!=productID&&product.stock!=0;
        })
        

        // Filter Based On Category If First Filter Less Than 4
        if(relatedProducts.length<4){
         relatedProducts=allProducts.filter(product=>{
            return product.category==cCategory&&product.productId!=productID&&product.stock!=0;
          })
        }

        console.log(relatedProducts);
        return relatedProducts.slice(0,4); // return only the first 4
}

function renderRelated(relatedProducts){
    productPanel.innerHTML = "";
    console.log(relatedProducts);
    relatedProducts.forEach((product,index) => {
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
        pImg.classList.add('img-fluid','p-img');
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

        productPanel.appendChild(colDiv);
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
                cartBtns[i].querySelector('span').innerText = "  Added to Cart";
                cartBtns[i].querySelector('button').classList.remove('btn-light');
                cartBtns[i].querySelector('button').classList.add('btn-success');
                this.removeEventListener('click', addAction); // removing the event after the first click
            }
            else if(currentUserObj==null){
                guestCartArr.push(cartedProduct);
                storageModule.setItem('guest-cart',guestCartArr)
                cartBtns[i].querySelector('span').innerText = "  Added to Cart";
                cartBtns[i].querySelector('button').classList.remove('btn-light');
                cartBtns[i].querySelector('button').classList.add('btn-success');
                this.removeEventListener('click', addAction); // removing the event after the first click
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

function  addBuyNoWEvent (){
    let buyNow = document.getElementById('buyNow');
    buyNow.addEventListener('click',()=>{
        window.location.href='./Checkout.html';
    })
}

function checkStock(){
    if(shownProduct.stock!=0){
        cartDiv.style.display='flex';
        buyNow.style.display='block';
        soldout.style.display='none';
        addtoCart();
        addBuyNoWEvent();
    }else{
        cartDiv.style.display='none';
        buyNow.style.display='none';
        soldout.style.display='block';
    }
}

function openModal(){
    let openers = document.querySelectorAll('.modal-opener');
    for (let i = 0 ; i<openers.length;i++){
        openers[i].addEventListener('click',function(e){
            let innerModalCarousel = document.querySelector('#innerModalCarousel');
            innerModalCarousel.innerHTML='';
            console.log(this.id);
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
                innerModalCarousel.appendChild(carouselItem);

            })
            let productView = document.querySelector('#productDiv');
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
                soldoutDiv.style.display='none';
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
    let addToCartBtn = document.querySelector('#cartModalBtn');
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
function linkProducts(){
    let productLinks = document.querySelectorAll('.product-link');
    for (let i = 0 ; i<productLinks.length;i++){
        productLinks[i].addEventListener('click',function(){
            // window.open(`./product.html?product_id=${this.id}`,'_self');
            window.location.href=`./product.html?product_id=${this.id}`
        })
    }
}


// NavBar
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
        window.location.href = '../html/home.html';
    });
}