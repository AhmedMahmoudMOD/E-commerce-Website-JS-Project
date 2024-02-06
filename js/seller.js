import { storageModule } from "../common/storageModule.js";
import {IDGenerator} from "../common/idclass.js"

LoginCheck();
let allUsers=storageModule.getItem('users');
let allProducts = storageModule.getItem('products');
let currentUserObj = storageModule.getItem('currentUser');
let sellerIndex = allUsers.findIndex(user => user.id===currentUserObj.id)
let allOrders = storageModule.getItem("orders");
let sellerProductsIDs = currentUserObj.products;
let sellerProducts = allProducts.filter(product => sellerProductsIDs.includes(product.productId)); 
let sellerOrdersIDs = currentUserObj.orders;
let sellerOrders = allOrders.filter(order=>sellerOrdersIDs.includes(order.orderID));

let pageType = 'products';
const rowsPerPage = 10;
let currentPage = 1;
  createTableHeader(pageType);
  populateTable(pageType,sellerProducts);
  addNumberValidation();
  addSearchEvent(searchProducts);
  addNavEvents();

function createTableHeader(type) {
  const tableHead = document.getElementById('tableHead');
  const headerRow = document.createElement('tr');
  tableHead.innerHTML='';

  if (type === 'orders') {
    const attributesToDisplay = ['Order ID', 'Customer ID', 'Place Date', 'Order Status', 'Products', 'Actions'];
    attributesToDisplay.forEach(attribute => {
      const th = document.createElement('th');
      th.setAttribute('scope', 'col');
      th.textContent = attribute;
      headerRow.appendChild(th);
    });
  } else if (type === 'products') {
    const attributesToDisplay = ['Product ID', 'Name', 'Brand','Category','Price', 'Discount', 'Stock','Actions'];
    attributesToDisplay.forEach(attribute => {
      const th = document.createElement('th');
      th.setAttribute('scope', 'col');
      th.textContent = attribute;
      headerRow.appendChild(th);
    });
  }

  tableHead.appendChild(headerRow);
}

// Function to populate the table based on the page type
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
      row.insertCell().textContent = order.customerID;
      row.insertCell().textContent = order.placeDate;
      row.insertCell().textContent = order.orderStatus;
      const productsCell = row.insertCell();
      const sellerOnlyProducts = order.products.filter(product => sellerProductsIDs.includes(product.productId));

      const showButton = document.createElement('button');
      showButton.textContent = 'Show';
      showButton.classList.add('btn', 'btn-light', 'btn-sm', 'mx-1','col-10','col-md-10','col-lg-7');
      showButton.setAttribute('data-bs-toggle','modal');
      showButton.setAttribute('data-bs-target','#proModal');
      showButton.addEventListener('click',()=>createHeadersModal('products'));
      showButton.addEventListener('click',()=>populateTableModal(sellerOnlyProducts));
      productsCell.appendChild(showButton);

      const actionsCell = row.insertCell();
      const confirmButton = document.createElement('button');
      confirmButton.textContent = 'Confirm';
      confirmButton.classList.add('btn', 'btn-success', 'btn-sm', 'mx-1','col-5','col-md-5','col-lg-5');
      // confirmButton.addEventListener('click',() => changeOrderStatus(order.orderID, 'Confirmed', row));
      actionsCell.appendChild(confirmButton);
  
      const rejectButton = document.createElement('button');
      rejectButton.textContent = 'Reject';
      rejectButton.classList.add('btn', 'btn-danger', 'btn-sm', 'mx-1','col-5','col-md-5','col-lg-5');
      // rejectButton.addEventListener('click',() => changeOrderStatus(order.orderID, 'Rejected', row));
      actionsCell.appendChild(rejectButton);

    });
  } else if (type === 'products') {
    pageType='products';
    currentPageRows.forEach(product => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${product.productId}</td>
        <td>${product.name}</td>
        <td>${product.brand}</td>
        <td>${product.category}</td>
        <td>${product.price}</td>
        <td>${product.discount}</td>
        <td>${product.stock}</td>
        <td>
          <button type="button" class="btn mx-1 btn-sm btn-light edit-btn col-4 col-md-5" data-bs-toggle="modal" data-bs-target="#editModal">
            Edit
          </button>
          <button type="button" class="btn mx-1 btn-sm btn-danger col-4 col-md-5" id="deleteBtn">
            Delete
          </button>
        </td>
      `;

      tableBody.appendChild(row);
      row.querySelector('.edit-btn').addEventListener('click', () => populateEditForm(product.productId));
      row.querySelector('#deleteBtn').addEventListener('click', () => FireDeleteSweetAlert(deleteProduct, product.productId));
    
    });
  }
  renderPagination(array);
}

  function populateEditForm(productId) {
    const product = sellerProducts.find(p => p.productId === productId);
    if (product) {
      document.getElementById('editProductId').value = product.productId;
      document.getElementById('editProductName').value = product.name;
      document.getElementById('editProductBrand').value = product.brand;
      document.getElementById('editProductPrice').value = product.price;
      document.getElementById('editProductDiscount').value = product.discount;
      document.getElementById('editProductStock').value = product.stock;
      document.getElementById('editProductImage1').value = product.images[0];
      document.getElementById('editProductImage2').value = product.images[1];
      document.getElementById('editProductImage3').value = product.images[2];
      document.getElementById('editProductDescription').value = product.description;
      document.getElementById('editProductMovement').value = product.specifications.movement;
      document.getElementById('editProductCaseMaterial').value = product.specifications.caseMaterial;
      document.getElementById('editProductCaseDiameter').value = product.specifications.caseDiameter;
      document.getElementById('editProductGlass').value = product.specifications.glass;
      document.getElementById('editProductWaterResistance').value = product.specifications.waterResistance;
      document.getElementById('editProductStrapMaterial').value = product.specifications.strapMaterial;
      document.getElementById('editProductStrapWidth').value = product.specifications.strapWidth;
      document.getElementById('editProductStrapColor').value = product.specifications.strapColor;
    }
  }

  function saveProductChanges() {
    const productId = document.getElementById('editProductId').value;
    const index = sellerProducts.findIndex(p => p.productId === productId);
    const allIndex = allProducts.findIndex(p => p.productId === productId);
    const editedProduct=sellerProducts.find(p => p.productId === productId);

    const updatedProduct = {
      productId,
      name: document.getElementById('editProductName').value,
      brand: document.getElementById('editProductBrand').value,
      category : document.getElementById('editProductCategory').value,
      price: +document.getElementById('editProductPrice').value,
      discount: +document.getElementById('editProductDiscount').value,
      rating : editedProduct.rating,
      stock: +document.getElementById('editProductStock').value,
      description: document.getElementById('editProductDescription').value,
      sellerID:currentUserObj.id,
      addedDate : editedProduct.addedDate,
      specifications: {
        movement: document.getElementById('editProductMovement').value,
        caseMaterial: document.getElementById('editProductCaseMaterial').value,
        caseDiameter: +document.getElementById('editProductCaseDiameter').value,
        glass: document.getElementById('editProductGlass').value,
        waterResistance: document.getElementById('editProductWaterResistance').value,
        strapMaterial: document.getElementById('editProductStrapMaterial').value,
        strapWidth: +document.getElementById('editProductStrapWidth').value,
        strapColor: document.getElementById('editProductStrapColor').value,
      },
      images: sellerProducts[index].images
     
    };

    if(isValid(updatedProduct)){
      if (index !== -1) {
        sellerProducts[index] =updatedProduct;
        allProducts[allIndex]=updatedProduct;
        storageModule.setItem('products',allProducts);
      }
      
      console.log(sellerProducts[index]);
  
      populateTable("products",sellerProducts);
    document.getElementById('editModal').classList.remove('show');
    document.body.classList.remove('modal-open');
    document.querySelector('.modal-backdrop').remove();
    } else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Complete All Required Fields With Valid Non Empty Data",
      });
    }

    
    

    // // Close the modal
    
  }

  function addProduct() {
    const newProduct = {
      productId: IDGenerator.generateProductId(), 
      name: document.getElementById('addProductName').value,
      brand: document.getElementById('addProductBrand').value,
      price: +document.getElementById('addProductPrice').value,
      rating : 5,
      category: document.getElementById('addProductCategory').value,
      discount: +document.getElementById('addProductDiscount').value,
      stock: +document.getElementById('addProductStock').value,
      description: document.getElementById('addProductDescription').value,
      sellerID:currentUserObj.id,
      addedDate : new Date(),
      specifications: {
        movement: document.getElementById('addProductMovement').value,
        caseMaterial: document.getElementById('addProductCaseMaterial').value,
        caseDiameter: +document.getElementById('addProductCaseDiameter').value,
        glass: document.getElementById('addProductGlass').value,
        waterResistance: document.getElementById('addProductWaterResistance').value,
        strapMaterial: document.getElementById('addProductStrapMaterial').value,
        strapWidth: +document.getElementById('addProductStrapWidth').value,
        strapColor: document.getElementById('addProductStrapColor').value,
      },
      images : []
    };

    newProduct.images.push(document.getElementById('addProductImage1').value);
    newProduct.images.push(document.getElementById('addProductImage2').value);
    newProduct.images.push(document.getElementById('addProductImage3').value);


    if(isValid(newProduct)){
      sellerProducts.push(newProduct);
      currentUserObj.products.push(newProduct.productId);
      allUsers[sellerIndex].products=currentUserObj.products;
      allProducts.push(newProduct);
      storageModule.setItem('currentUser',currentUserObj);
      storageModule.setItem('users',allUsers);
      storageModule.setItem('products',allProducts);
  
      document.getElementById('addModal').classList.remove('show');
      document.body.classList.remove('modal-open');
      document.querySelector('.modal-backdrop').remove();
      populateTable("products",sellerProducts);
    } else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Complete All Required Fields With Vlaid Non Empty Data",
      });
     }
    
  }

  function deleteProduct(productId) {
    // Filter out the product to be deleted
    sellerProducts = sellerProducts.filter(p => p.productId !== productId);
    currentUserObj.products=currentUserObj.products.filter(pId => pId !== productId);
    allUsers[sellerIndex].products=currentUserObj.products;
    allProducts = allProducts.filter(p => p.productId !== productId);

    allUsers.forEach((user) => {
      if (user.userType != "customer") {
        return;
      }
      user.cart = user.cart.filter((product) => product.productId != productId);
    });

    storageModule.setItem('currentUser',currentUserObj);
    storageModule.setItem('users',allUsers);
    storageModule.setItem('products',allProducts);

    // Repopulate the products table
    populateTable("products",sellerProducts);
  }

  function changeOrderStatus(orderID, newStatus, row) {
    const order = sellerOrders.find(order => order.orderID === orderID);
    const index = sellerOrders.findIndex(order => order.orderID === orderID);

    if (order) {
      order.orderStatus = newStatus;
      row.cells[3].textContent = newStatus;
    }
    if (index !== -1) {
      sellerOrders[index] = order;
    }
    console.log(sellerOrders);
  }

  function isValid(product){

    const validations = [
      checkEmpty(product.name),
      checkEmpty(product.brand),
      checkEmpty(product.price.toString()),
      checkEmpty(product.discount.toString()),
      checkEmpty(product.description),
      checkEmpty(product.stock.toString()),
      checkEmpty(product['images'][0]),
      checkEmpty(product['images'][1]),
      checkEmpty(product['images'][2])
  ];
  if (validations.every((isValid) => isValid)) {
    return true;
  }else {
   return false;
  }
  }
  function checkEmpty(field) {
    if (field.trim() === "") {
      return false;
    } else {
      return true;
    }
  }

  function addNumberValidation(){
    let oneValuesInputs = document.querySelectorAll('.oneval');
    let stockInputs = document.querySelectorAll('.stockinput');
    let discountInputs = document.querySelectorAll('.discountinput')

    for(let i =0; i<oneValuesInputs.length;i++){
      oneValuesInputs[i].addEventListener('input',function(){
        if(this.value<1)
        this.value=1;
      })
    }

    for(let i =0; i<stockInputs.length;i++){
      stockInputs[i].addEventListener('input',function(){
        if (!(/^\d*$/).test(this.value)) {
          this.value=0;
      }
      })
    }
    for(let i =0; i<discountInputs.length;i++){
      discountInputs[i].addEventListener('input',function(){
        if(this.value<0)
        this.value=0;
        else if (this.value>0.99)
        this.value=0.99;
      })
    }

  }
  function searchProducts (){
    const searchInput = document.getElementById('searchInput');
    const searchValue = searchInput.value;
    const searchTerm = searchValue.toLowerCase();

    // Use filter to get only the objects that match the search criteria
    const searchedProducts = sellerProducts.filter((product) => {
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
    populateTable('products',searchedProducts);
  }

  function searchOrders (){
    const searchInput = document.getElementById('searchInput');
    const searchValue = searchInput.value;
    const searchTerm = searchValue.toLowerCase();

    // Use filter to get only the objects that match the search criteria
    const searchedOrders = sellerOrders.filter((order) => {
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

  function addSearchEvent(searchFunction) {
    const searchInput = document.getElementById("searchInput");
    searchInput.onkeyup=searchFunction;
}

  function addNavEvents(){
    let NavLinks = document.querySelectorAll('.pop-link');
    let TableH = document.getElementById('TableH');
    let addBtn = document.getElementById('addBtn');
    NavLinks[0].addEventListener('click',()=>{
      createTableHeader('products');
      currentPage=1;
      populateTable('products',sellerProducts);
      addSearchEvent(searchProducts);
      TableH.innerText='My Products';
      addBtn.style.display="block";
    })
    NavLinks[1].addEventListener('click',()=>{
      createTableHeader('orders');
      currentPage=1;
      populateTable('orders',sellerOrders);
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
            //  renderPagination(array);
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
            // renderPagination(array);
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
    if(currentPage==totalPages||array.length==0)
        nextPageLink.classList.add('disabled');
    nextPageLink.href='#';
    nextPageLink.textContent = 'Next';

    nextPageLink.addEventListener('click', function (e) {
        if (currentPage < totalPages) {
            e.preventDefault();
            currentPage++;
            populateTable(pageType,array);
            //  renderPagination(array);
        }
    });

    nextPageItem.appendChild(nextPageLink);
    paginationSection.appendChild(nextPageItem);
}

function FireDeleteSweetAlert(func, id)
{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            func(id);
            Swal.fire({
                title: "Deleted!",
                text: "Deleted successfully.",
                icon: "success"
            });
        }
    });
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


function LoginCheck() // Check if the user is logged in or not
{
    if (storageModule.getItem("currentUser") == null || Object.keys(storageModule.getItem("currentUser")).length == 0) // If the user is not logged in then redirect him to the login page
    {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You must login as a seller first",
        }).then(() => {
            window.location.href = "../html/signPage.html";
        });
    }
    else // If the user is logged in then check if he is a seller or not
    {
        if (storageModule.getItem("currentUser").userType != "seller") // If the user is not a seller then redirect him to the home page
        {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You must login as a seller first",
            }).then(() => {
                window.location.href = "../html/signPage.html";
            });
        }
    }
}


  document.getElementById('saveChangesBtn').addEventListener('click', saveProductChanges);
  document.getElementById('addProductBtn').addEventListener('click', addProduct);

  logoutButton.addEventListener('click', function() {
    // Clear the currentUser object in local storage
    localStorage.removeItem('currentUser');
    // Redirect to the login page
    location.reload()
});


  
