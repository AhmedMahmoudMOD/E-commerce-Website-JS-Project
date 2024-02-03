import { storageModule } from "../common/storageModule.js";
import {IDGenerator} from "../common/idclass.js"

let allUsers=storageModule.getItem('users');
let allProducts = storageModule.getItem('products');
let currentUserObj = storageModule.getItem('currentUser');
let customerIndex = allUsers.findIndex(user => user.id===currentUserObj.id)
let allOrders = storageModule.getItem("orders");
let customerWishlistIDs = currentUserObj.wishList;
let customerWishlist = allProducts.filter(product => customerWishlistIDs.includes(product.productId)); 
let customerOrdersIDs = currentUserObj.orderHistory;
let customerOrders = allOrders.filter(order=>customerOrdersIDs.includes(order.orderID));

let pageType = 'orders';
const rowsPerPage = 10;
let currentPage = 1;

  createTableHeader(pageType);
  populateTable(pageType,customerOrders);
  addSearchEvent(searchOrders);
  addNavEvents();

function createTableHeader(type) {
    const tableHead = document.getElementById('tableHead');
    const headerRow = document.createElement('tr');
    tableHead.innerHTML='';
  
    if (type === 'orders') {
      const attributesToDisplay = ['Order ID', 'Seller ID', 'Place Date', 'Order Status', 'Products', 'Actions'];
      attributesToDisplay.forEach(attribute => {
        const th = document.createElement('th');
        th.setAttribute('scope', 'col');
        th.textContent = attribute;
        headerRow.appendChild(th);
      });
    } else if (type === 'wishlist') {
      const attributesToDisplay = ['Name', 'Brand','Category','Price','Image','Actions'];
      attributesToDisplay.forEach(attribute => {
        const th = document.createElement('th');
        th.setAttribute('scope', 'col');
        th.textContent = attribute;
        headerRow.appendChild(th);
      });
    }
  
    tableHead.appendChild(headerRow);
  }

  function populateTable(type,array) {
    const dataTable = document.getElementById('dataTable');
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';
      const startIndex = (currentPage - 1) * rowsPerPage;
      const endIndex = startIndex + rowsPerPage;
  
      // Display only the products for the current page
     
      const currentPageRows = array.slice(startIndex, endIndex);
  
    if (type === 'orders') {
      pageType='orders';
      currentPage=1;
      currentPageRows.forEach(order => {
        const row = tableBody.insertRow();
        row.insertCell().textContent = order.orderID;
        row.insertCell().textContent = order.sellerID;
        row.insertCell().textContent = order.placeDate;
        row.insertCell().textContent = order.orderStatus;
        const productsCell = row.insertCell();
       
      const showButton = document.createElement('button');
      showButton.textContent = 'Show';
      showButton.classList.add('btn', 'btn-dark', 'btn-sm', 'mx-1','col-10','col-md-10','col-lg-7');
      showButton.setAttribute('data-bs-toggle','modal');
      showButton.setAttribute('data-bs-target','#proModal');
      showButton.addEventListener('click',()=>createHeadersModal('products'));
      showButton.addEventListener('click',()=>populateTableModal(order.products));
      productsCell.appendChild(showButton);

       
  
        const actionsCell = row.insertCell();
        const confirmButton = document.createElement('button');
        confirmButton.textContent = 'Confirm';
        confirmButton.classList.add('btn', 'btn-success', 'btn-sm','mx-1','col-5','col-md-5','col-lg-5');
        confirmButton.addEventListener('click',() => changeOrderStatus(order.orderID, 'Deliverd', row));
        actionsCell.appendChild(confirmButton);
    
        const rejectButton = document.createElement('button');
        rejectButton.textContent = 'Cancel';
        rejectButton.classList.add('btn', 'btn-danger', 'btn-sm','mx-1','col-5','col-md-5','col-lg-5');
        rejectButton.addEventListener('click',() => changeOrderStatus(order.orderID, 'Canceled', row));
        actionsCell.appendChild(rejectButton);
  
      });
    } else if (type === 'wishlist') {
      pageType='wishlist';
      currentPageRows.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td class='align-middle'>${product.name}</td>
          <td class='align-middle'>${product.brand}</td>
          <td class='align-middle'>${product.category}</td>
          <td class='align-middle'>${product.price-(product.price*product.discount)}</td>
          <td><img src="${product.images[0]}" height="50px" , width="50px"></td>
          <td class='align-middle'>
            <button type="button" class="btn mx-1 btn-sm btn-dark edit-btn col-4 col-md-5 goto-btn">
              Go To
            </button>
            <button type="button" class="btn mx-1 btn-sm btn-danger col-4 col-md-5 remove-btn">
              Remove
            </button>
          </td>
        `;
  
        tableBody.appendChild(row);
        row.querySelector('.goto-btn').addEventListener('click', () => goToPage(product.productId));
        row.querySelector('.remove-btn').addEventListener('click', () => FireRemoveSweetAlert(removeFromWishList, product.productId));
      
      });
    }
    renderPagination(array);
  }

  function changeOrderStatus(orderID, newStatus, row) {
    const order = customerOrders.find(order => order.orderID === orderID);
    const index = allOrders.findIndex(order => order.orderID === orderID);

    if (order) {
      order.orderStatus = newStatus;
      row.cells[3].textContent = newStatus;
      if(newStatus=='Deliverd')
         row.cells[3].style.color='green';
      else if(newStatus=='Rejected')
         row.cells[3].style.color='red';

      allOrders[index] = order;
      storageModule.setItem('orders',allOrders); 

    }
  }

  function searchOrders (){
    const searchInput = document.getElementById('searchInput');
    const searchValue = searchInput.value;
    const searchTerm = searchValue.toLowerCase();

    // Use filter to get only the objects that match the search criteria
    const searchedOrders = customerOrders.filter((order) => {
      // Iterate through each property of the order object
      for (const key in order) {
        // Check if the property value includes the search term
        if (
          typeof order[key] === "string" &&
          order[key].toLowerCase().includes(searchTerm)
        ) {
          return true;
        } 
      }
      return false; 
    });
  
    // Return the filtered array of objects
    currentPage=1;
    populateTable('orders',searchedOrders);
  }
  function searchProducts (){
    const searchInput = document.getElementById('searchInput');
    const searchValue = searchInput.value;
    const searchTerm = searchValue.toLowerCase();

    // Use filter to get only the objects that match the search criteria
    const searchedProducts = customerWishlist.filter((product) => {
      // Iterate through each property of the product object
      for (const key in product) {
        // Check if the property value includes the search term
        if (
          typeof product[key] === "string" &&
          product[key].toLowerCase().includes(searchTerm)
        ) {
          return true; // Include the object in the filtered result
        } else if (typeof product[key] === "object" && product[key] !== null) {
          // If the property is an object, check its values
          for (const subKey in product[key]) {
            if (
              product[key][subKey]
                .toString()
                .toLowerCase()
                .includes(searchTerm)
            ) {
              return true; // Include the object in the filtered result
            }
          }
        }
      }
      return false; // Exclude the object from the filtered result
    });
  
    // Return the filtered array of objects
    populateTable('wishlist',searchedProducts);
  }
  function addSearchEvent(searchFunction) {
    const searchInput = document.getElementById("searchInput");
    searchInput.onkeyup=searchFunction;
}

  function addNavEvents(){
    let NavLinks = document.querySelectorAll('.pop-link');
    let TableH = document.getElementById('TableH');
    let addBtn = document.getElementById('addBtn');
    NavLinks[0].addEventListener('click',()=>{
      createTableHeader('wishlist');
      populateTable('wishlist',customerWishlist);
      addSearchEvent(searchProducts);
      TableH.innerText='My Wishlist';
      addBtn.style.display="none";
    })
    NavLinks[1].addEventListener('click',()=>{
      createTableHeader('orders');
      populateTable('orders',customerOrders);
      addSearchEvent(searchOrders);
      TableH.innerText="My Orders";
      addBtn.style.display="none";
    })

  }

  function renderPagination(array) {
    const totalPages = Math.ceil(array.length / rowsPerPage);
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
 
     prevPageLink.addEventListener('click', function (e) {
         if (currentPage > 1) {
            e.preventDefault();
             currentPage--;
             populateTable(pageType,array);
             renderPagination(array);
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
            populateTable(pageType,array);
            renderPagination(array);
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
            populateTable(pageType,array);
             renderPagination(array);
        }
    });

    nextPageItem.appendChild(nextPageLink);
    paginationSection.appendChild(nextPageItem);
}
function createHeadersModal(type){

    const tableHead = document.getElementById('modalTableHead');
    const headerRow = document.createElement('tr');
    tableHead.innerHTML='';
  
    if (type === 'products') {
      const attributesToDisplay = ['Name', 'Brand','Price', 'Quantity','Image'];
      attributesToDisplay.forEach(attribute => {
        const th = document.createElement('th');
        th.setAttribute('scope', 'col');
        th.textContent = attribute;
        headerRow.appendChild(th);
      });
    }
  
    tableHead.appendChild(headerRow);
    
}
function populateTableModal(orderProducts){
    const tableBody = document.getElementById('modalTableBody');
    tableBody.innerHTML = '';
    orderProducts.forEach((product)=>{
        let orderProductID = product.productId;
        let productName = allProducts.find((product)=>product.productId==orderProductID)?.name;
        let productImage = allProducts.find((product)=>product.productId==orderProductID)?.images[0];
        let productBrand = allProducts.find((product)=>product.productId==orderProductID)?.brand;
        const row = document.createElement('tr');
        row.innerHTML = `
          <td class='align-middle'>${productName}</td>
          <td class='align-middle'>${productBrand}</td>
          <td class='align-middle'>${product.price}</td>
          <td class='align-middle'>${product.quantity}</td>
          <td><img src="${productImage}" height="50px" , width="50px"></td> `

          tableBody.appendChild(row);
    })
}

function goToPage(productID){
  window.location.href=`./product.html?product_id=${productID}`
}

function removeFromWishList(productID){
    customerWishlist=customerWishlist.filter(p => p.productId !== productID);
    currentUserObj.wishList=currentUserObj.wishList.filter(pID => pID !== productID);
    allUsers[customerIndex].wishList=currentUserObj.wishList;
    storageModule.setItem('currentUser',currentUserObj);
    storageModule.setItem('users',allUsers);

    populateTable('wishlist',customerWishlist);
}

function FireRemoveSweetAlert(func, id)
{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, remove it!"
    }).then((result) => {
        if (result.isConfirmed) {
            func(id);
            Swal.fire({
                title: "Removed!",
                text: "Removed successfully.",
                icon: "success"
            });
        }
    });
}

logoutButton.addEventListener('click', function() {
    // Clear the currentUser object in local storage
    localStorage.removeItem('currentUser');
    // Redirect to the login page
    location.reload()
});
  