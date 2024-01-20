import {storageModule} from "../common/storageModule.js"
import { products } from "../common/staticdata.js";

storageModule.setItem('products',products);
const productsPerPage = 16;
let currentPage = 1;

let allProducts = storageModule.getItem('products');

window.addEventListener('load',function(){
    renderProducts(allProducts);
    sortProducts();
    renderPagination(allProducts);
    // imgHover(shownProducts);
})

function renderProducts(products){
    productPanel.innerHTML = "";

    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    // Display only the products for the current page
    const currentPageProducts = products.slice(startIndex, endIndex);

    currentPageProducts.forEach((product,index) => {
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
        /* Body Appended */

        imgHover(currentPageProducts);

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

// Sorting Functions //

function sortAlphAsc(unSortedArray){
    unSortedArray.sort((pone,ptwo)=>{
        if(pone.name>ptwo.name)
            return 1;
        if (pone.name<=ptwo.name)
            return -1;
    })
    return unSortedArray;

}
function sortAlphDesc(unSortedArray){
    unSortedArray.sort((pone,ptwo)=>{
        if(pone.name>=ptwo.name)
            return -1;
        if (pone.name<ptwo.name)
            return 1;
    })
    return unSortedArray;
}
function sortPriceAsc(unSortedArray){
    unSortedArray.sort((pone,ptwo)=> pone.price-ptwo.price);
    return unSortedArray;
}
function sortPriceDesc(unSortedArray){
    unSortedArray.sort((pone,ptwo)=> ptwo.price-pone.price);
    return unSortedArray;
}

// Function to add events listeners to enable the sorting of the array of products //
function sortProducts(){
    sortSelect.addEventListener('change',function(event){
        let shownProducts;
        let sortedArr;
        
        switch(event.target.value){
            case "alph-asc":
                sortedArr= sortAlphAsc(allProducts)
                renderProducts(sortedArr);
                break;
            case "alph-desc":
                sortedArr = sortAlphDesc(allProducts)
                renderProducts(sortedArr);
                break;
            case "price-asc":
                sortedArr= sortPriceAsc(allProducts)
                renderProducts(sortedArr);
                break;  
            case "price-desc":
                sortedArr= sortPriceDesc(allProducts)
                renderProducts(sortedArr);
                break;      
            }
        })
}

// Pagination Function //
function renderPagination(products) {
    const totalPages = Math.ceil(products.length / productsPerPage);
    const paginationSection = document.querySelector('.pagination');
    paginationSection.innerHTML = ''; // Clear previous pagination links
      
     // Create and append "Previous" button
     const prevPageItem = document.createElement('li');
     prevPageItem.classList.add('page-item');
     prevPageItem.id = 'prevPage';
 
     const prevPageLink = document.createElement('a');
     prevPageLink.classList.add('page-link');
     if(currentPage == 1)
        prevPageLink.classList.add('disabled')
     prevPageLink.href = '#';
     prevPageLink.textContent = 'Previous';
 
     prevPageLink.addEventListener('click', function () {
         if (currentPage > 1) {
            e.preventDefault();
             currentPage--;
             renderProducts(products);
             renderPagination(products);
         }
     });
     prevPageItem.appendChild(prevPageLink);
     paginationSection.appendChild(prevPageItem);

    // Create and append Bootstrap pagination links
    for (let i = 1; i <= totalPages; i++) {
        const listItem = document.createElement('li');
        listItem.classList.add('page-item');

        const link = document.createElement('a');
        link.classList.add('page-link');
        if(currentPage==i)
        link.classList.add('active');
        link.href = '#';
        link.textContent = i;

        // Add click event listener to handle page change
        link.addEventListener('click', function (e) {
            e.preventDefault();
            currentPage = i;
            renderProducts(products);
            renderPagination(products);
        });

        listItem.appendChild(link);
        paginationSection.appendChild(listItem);
    }

    // Create and append "Next" button
    const nextPageItem = document.createElement('li');
    nextPageItem.classList.add('page-item');
    nextPageItem.id = 'nextPage';

    const nextPageLink = document.createElement('a');
    nextPageLink.classList.add('page-link');
    if(currentPage==totalPages)
        nextPageLink.classList.add('disabled');
    nextPageLink.href='#';
    nextPageLink.textContent = 'Next';

    nextPageLink.addEventListener('click', function (e) {
        if (currentPage < totalPages) {
            e.preventDefault();
            currentPage++;
            renderProducts(products);
            renderPagination(products);
        }
    });

    nextPageItem.appendChild(nextPageLink);
    paginationSection.appendChild(nextPageItem);
}
