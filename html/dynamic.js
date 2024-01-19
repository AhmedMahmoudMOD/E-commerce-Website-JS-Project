import {storageModule} from "../common/storageModule.js"
let allProducts = storageModule.getItem('products');
let shownProducts = allProducts.slice(16,32);

window.addEventListener('load',function(){
    renderProducts(shownProducts);
    imgHover(shownProducts);

})

function renderProducts(shownProducts){
    shownProducts.forEach((product,index) => {
        let colDiv=document.createElement('div');
        colDiv.classList.add('col')
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
        secIconLink.classList.add('text-decoration-none','text-dark');
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
        cartBtnDiv.classList.add('cart-btn');
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
        let productName = document.createElement('h4');
        productName.textContent = `${product.name}`
        /* Product Name Created */
        productNameDiv.appendChild(productName);
         /* Product Name Appended */
        
        let productPriceDiv = document.createElement('div');
        productPriceDiv.classList.add('product-price');
        let productPriceSpan = document.createElement('span');
        productPriceSpan.textContent = `${product.price} EGP`;
        /* Product Price Created */
         productPriceDiv.appendChild(productPriceSpan);
         /* Product Price Appended */

        
        productInfoDiv.appendChild(productNameDiv);
        productInfoDiv.appendChild(productPriceDiv);

        
        productBox.append(innerBox,productInfoDiv);
        /* Product Box Appended */

        colDiv.appendChild(productBox);
        /* Col Div Appended */

        productPanel.appendChild(colDiv);
        /* Body Appended */

        });
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
