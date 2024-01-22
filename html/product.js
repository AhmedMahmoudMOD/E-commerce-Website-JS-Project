
import {storageModule} from '../common/storageModule.js';

let allProducts = storageModule.getItem('products');
let allUsers = storageModule.getItem('users');
let currentUserObj = storageModule.getItem('currentUser');
let guestCartArr = storageModule.getItem('guest-cart');

let productID = getPID();
let productIndex = allProducts.findIndex(product=>product.productId==productID);
let shownProduct = getProduct(productID);

window.addEventListener('load',function(){
    renderCarousel(shownProduct);
    renderInfo(shownProduct);
    renderTabs(shownProduct);
    addtoCart();
    navLiksControl();

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
       let specSpan = document.createElement('span');
       specSpan.classList.add('spec-span');
       specSpan.textContent=shownProduct.specifications[spec];
       let specLi = document.createElement('li');
       specLi.innerHTML=`<b>${spec.toUpperCase()}</b> : ${specSpan.textContent}`
       speceUl.appendChild(specLi);
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
        else;
    })
}

function navLiksControl(){
    let lastProductId = `P${allProducts.length}`;
    let nextId = allProducts[productIndex+1]?.productId;
    let prevId = allProducts[productIndex-1]?.productId;

    if(productID=='P1'){
        prevLink.style.display='none';
        linkDivider.style.display='none';
    }
    if(productID==lastProductId){
        nextLink.style.display='none';
        linkDivider.style.display='none';
    }

    nextLink.href=`./product.html?product_id=${nextId}`
    prevLink.href=`./product.html?product_id=${prevId}`


}

