import {storageModule} from "../common/storageModule.js"
let allProducts = storageModule.setItem('products');
let shownProducts = allProducts.slice(0,16);

window.addEventListener('load',function(){
    renderProducts(shownProducts);

    

})

function renderProducts(shownProducts){
    shownProducts.forEach((product,index) => {
        let coldiv=this.document.createElement('div');
        coldiv.classList.add('col')
        let productBox = this.document.createElement('div');
        productBox.classList.add('product-box');
        let innerBox = this.document.createElement('div');
        innerBox.classList.add('product-inner-box','position-relative');
        /* Icons Div Creates */
        let iconsDiv = this.document.createElement('div');
        iconsDiv.classList/add('icons','position-absolute');
        let IconLink = this.document.createElement('a'); 
        IconLink.href='#';
        IconLink.classList.add('text-decoration-none','text-dark');
        let WishIcon = this.document.createElement('i');
        WishIcon.classList.add('far','fa-heart');
        iconLink.appendChild(WishIcon);
        /* Wish Icon  Link Appended  */
        let secIconLink = this.document.createElement('a');
        secIconLink.href='#';
        secIconLink.classList.add('text-decoration-none','text-dark');
        let eyeIcon = this.document.createElement('i');
        eyeIcon.classList.add('fas','fa-eye');
        iconLink2.appendChild(eyeIcon);
        /* Eye Icon Link Appended */
        iconsDiv.append(iconLink,iconLink2);
        /* Icons Div Appended */

        /*onSale Div Created */
        let onSaleDiv = this.document.createElement('div');
        onSaleDiv.classList.add('onsale');
        let onSaleSpan = this.document.createElement('span');
        onSaleSpan.classList.add('badge','rounded-0');
        let onSaleIcon= this.document.createElement('i');
        onSaleIcon.classList.add('fal','fa-long-arrow-down');
        let DiscountSpan = this.document.createElement('span')
        DiscountSpan.innerText=`${product.discount*100} %`;
        /* On Sale Span Appended */
        onSaleSpan.append(onSaleIcon,DiscountSpan);
        
        onSaleDiv.append(onSaleSpan);
        /* On Sale Div Appended */

        let pImg = this.document.createElement('img');
        pImg.classList.add('img-fluid');
        pImg.src=product.images[0];



        
        
    });
}

