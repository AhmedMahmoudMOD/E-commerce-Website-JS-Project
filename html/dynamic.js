import {storageModule} from "../common/storageModule.js"
import { products  , currentUser , users} from "../common/staticdata.js";

storageModule.setItem('products',products);
storageModule.setItem('users',users);
storageModule.setItem('currentUser',currentUser);
let allUsers = storageModule.getItem('users');
let allProducts = storageModule.getItem('products');
let currentUserObj = storageModule.getItem('currentUser'); 

// getting an array of brands for dynamically creating filter options
let brands = [];

products.forEach(product => {
    if (!brands.includes(product.brand)) {
        brands.push(product.brand);
    }
});
////////////////////////////////////////////////////////
// Initialize a variable to store the current filter state

let currentFilterState = {
    men: true,
    women: true,
    brands: brands.reduce((filter, brand) => {
        filter[brand] = true;
        return filter;
    }, {}),
};
///////////////////////////////////////////
const productsPerPage = 16;
let currentPage = 1;

window.addEventListener('load',function(){
    renderProducts(allProducts);
    sortProducts();
    RenderBrands();
    addFilters();
   
    
})

function renderProducts(products){
    productPanel.innerHTML = "";

    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    // Display only the products for the current page
   

    const filteredProducts = products.filter((product) => {
        const genderFilter =
            (currentFilterState.men && product.category === 'Men') ||
            (currentFilterState.women && product.category === 'Women');

        const brandFilter =
            currentFilterState.brands[product.brand] !== undefined &&
            currentFilterState.brands[product.brand];

        return genderFilter && brandFilter;
    });
    const currentPageProducts = filteredProducts.slice(startIndex, endIndex);
    console.log(currentPageProducts);

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
        secIconLink.classList.add('text-decoration-none','text-dark','modal-opener');
        secIconLink.setAttribute('data-bs-toggle','modal');
        secIconLink.setAttribute('data-bs-target','#productModal');

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
        /* Body Appended */

        imgHover(currentPageProducts);
        

        });
        addToCart();
        renderPagination(filteredProducts);
        linkProducts();
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
    pageInd.textContent=`Page ${currentPage}`;
}

// Adding To Cart Function // 

function addToCart (){
    let cartBtns=document.querySelectorAll('.cart-btn');
    for (let i=0;i<cartBtns.length;i++){
        cartBtns[i].addEventListener('click',function addAction(e){
            let cartedProduct= {
                productId : this.id,
                quantity : 1,
            }
            if (currentUserObj!==null){
                let index = allUsers.findIndex(user => user.id===currentUserObj.id)
                allUsers[index].cart.push(cartedProduct);
                currentUserObj.cart.push(cartedProduct);
                console.log(allUsers[index]);
            }
            else{

            }
            cartBtns[i].querySelector('span').innerText = "  Added to Cart";
            cartBtns[i].querySelector('button').style.backgroundColor='lightgreen';
            this.removeEventListener('click', addAction); // removing the event after the first click
        })
        
    }
}

function RenderBrands(){ 
let brandRow = document.querySelector('#brandrow');   

// Loop through the brands array and create checkboxes and labels
brands.forEach(brand => {
    
    let brandContainer = document.createElement('div');
    brandContainer.classList.add('col-12');

    // Create checkbox element
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = brand;
    checkbox.id = brand.toLowerCase();
    checkbox.classList.add('brand-checkbox');

    // Create label element
    let label = document.createElement('label');
    label.htmlFor = brand.toLowerCase(); 
    
   

    // Append checkbox and label to the brandContainer
   
    label.appendChild(checkbox);
    brandContainer.appendChild(label);
    label.appendChild(document.createTextNode(`  ${brand}`));
   

    brandRow.appendChild(brandContainer);
});
}

function addFilters(){
    let genderFilters=document.querySelectorAll('.gender-checkbox');
    for(let i = 0 ; i<genderFilters.length;i++){
        genderFilters[i].addEventListener('change',filterProductsGender);
    }
    let brandFilters= document.querySelectorAll('.brand-checkbox');
    for(let i = 0 ; i<brandFilters.length;i++){
        brandFilters[i].addEventListener('change',filterProductsBrands)
    }


}
function filterProductsGender() {
    // Update the filter state for gender
    currentFilterState.men = menCheckBox.checked;
    currentFilterState.women = womenCheckBox.checked;

    // Checking if every value is false , then settig them all true if that's the case
    if(!currentFilterState.men&&!currentFilterState.women){
        currentFilterState.men=true;
        currentFilterState.women=true;
    }

    console.log(currentFilterState);

    // Render the products with the updated filter
    renderProducts(allProducts);
}

function filterProductsBrands(){
    // Update The Filtering by brands
    currentFilterState.brands = brands.reduce((filter, brand) => {
        let checkbox = document.getElementById(brand.toLowerCase());
        filter[brand] = checkbox.checked;
        return filter;
    }, {});

    // Checking if every value is false , then settig them all true if that's the case
    if (!Object.values(currentFilterState.brands).some(Boolean)) {
        brands.forEach(brand => {
            currentFilterState.brands[brand] = true;
    
        });
    }

    renderProducts(allProducts);
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

// function openModal(){
//     let openers = document.querySelectorAll('.modal-opener');
//     for (let i = 0 ; i<openers.length;i++){
//         openers[i].addEventListener('click',function(){})
//     }
// }