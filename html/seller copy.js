import { storageModule } from "../common/storageModule.js";
import {IDGenerator} from "../common/idclass.js"

import {users,orders,products,currentUser,guestCart} from "../common/staticdata.js"

storageModule.setItem('currentUser',currentUser);
storageModule.setItem('orders',orders);
let allUsers=storageModule.getItem('users');
let allProducts = storageModule.getItem('products');
let currentUserObj = storageModule.getItem('currentUser');
let allOrders = storageModule.getItem("orders");
let sellerProductsIDs = currentUserObj.products;
let sellerProducts = allProducts.filter(product => sellerProductsIDs.includes(product.productId)); 
let sellerOrdersIDs = currentUserObj.orders /// modification cand
let sellerOrders = allOrders.filter(order=>sellerOrdersIDs.includes(order.orderID));

const pageType = 'products';
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
    const attributesToDisplay = ['Order ID', 'Customer ID', 'Place Date', 'Order Status', 'Deliver Date', 'Products', 'Actions'];
    attributesToDisplay.forEach(attribute => {
      const th = document.createElement('th');
      th.setAttribute('scope', 'col');
      th.textContent = attribute;
      headerRow.appendChild(th);
    });
  } else if (type === 'products') {
    const attributesToDisplay = ['Product ID', 'Name', 'Brand', 'Price', 'Discount', 'Stock', 'Description','Actions'];
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

  if (type === 'orders') {
    array.forEach(order => {
      const row = tableBody.insertRow();
      row.insertCell().textContent = order.orderID;
      row.insertCell().textContent = order.customerID;
      row.insertCell().textContent = order.placeDate;
      row.insertCell().textContent = order.orderStatus;
      row.insertCell().textContent = order.deliverDate;
      const productsCell = row.insertCell();
      const sellerOnlyProducts = order.products.filter(product => sellerProductsIDs.includes(product.id));
      console.log(sellerOnlyProducts);

      sellerOnlyProducts.forEach(product => {
        productsCell.innerHTML += `${product.id}: ${product.quantity} - ${product.price}<br>`;
      });

      const actionsCell = row.insertCell();
      const confirmButton = document.createElement('button');
      confirmButton.textContent = 'Confirm';
      confirmButton.classList.add('btn', 'btn-success', 'btn-sm', 'mx-1');
      confirmButton.addEventListener('click',() => changeOrderStatus(order.orderID, 'Confirmed', row));
      actionsCell.appendChild(confirmButton);
  
      const rejectButton = document.createElement('button');
      rejectButton.textContent = 'Reject';
      rejectButton.classList.add('btn', 'btn-danger', 'btn-sm', 'mx-1');
      rejectButton.addEventListener('click',() => changeOrderStatus(order.orderID, 'Rejected', row));
      actionsCell.appendChild(rejectButton);

    });
  } else if (type === 'products') {
    array.forEach(product => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${product.productId}</td>
        <td>${product.name}</td>
        <td>${product.brand}</td>
        <td>${product.price}</td>
        <td>${product.discount}</td>
        <td>${product.stock}</td>
        <td>${product.description}</td>
        <td>
          <button type="button" class="btn mx-1 btn-sm btn-outline-secondary edit-btn" data-bs-toggle="modal" data-bs-target="#editModal">
            Edit
          </button>
          <button type="button" class="btn mx-1 btn-sm btn-danger" id="deleteBtn">
            Delete
          </button>
        </td>
      `;

      tableBody.appendChild(row);
      row.querySelector('.edit-btn').addEventListener('click', () => populateEditForm(product.productId));
      row.querySelector('#deleteBtn').addEventListener('click', () => deleteProduct(product.productId));
    
    });
  }
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

    const updatedProduct = {
      productId,
      name: document.getElementById('editProductName').value,
      brand: document.getElementById('editProductBrand').value,
      price: document.getElementById('editProductPrice').value,
      discount: document.getElementById('editProductDiscount').value,
      stock: document.getElementById('editProductStock').value,
      description: document.getElementById('editProductDescription').value,
      specifications: {
        movement: document.getElementById('editProductMovement').value,
        caseMaterial: document.getElementById('editProductCaseMaterial').value,
        caseDiameter: document.getElementById('editProductCaseDiameter').value,
        glass: document.getElementById('editProductGlass').value,
        waterResistance: document.getElementById('editProductWaterResistance').value,
        strapMaterial: document.getElementById('editProductStrapMaterial').value,
        strapWidth: document.getElementById('editProductStrapWidth').value,
        strapColor: document.getElementById('editProductStrapColor').value,
      },
      images: sellerProducts[index].images
     
    };

    if(isValid(updatedProduct)){
      if (index !== -1) {
        sellerProducts[index] = updatedProduct;
      }
      
      console.log(sellerProducts[index]);
  
      populateTable("products",sellerProducts);
    document.getElementById('editModal').classList.remove('show');
    document.body.classList.remove('modal-open');
    document.querySelector('.modal-backdrop').remove();
    } else{
      alert("Pleace Make Sure Your Data is Correct");
    }

    
    

    // // Close the modal
    
  }

  function addProduct() {
    const newProduct = {
      productId: IDGenerator.generateProductId(), 
      name: document.getElementById('addProductName').value,
      brand: document.getElementById('addProductBrand').value,
      price: document.getElementById('addProductPrice').value,
      discount: document.getElementById('addProductDiscount').value,
      stock: document.getElementById('addProductStock').value,
      description: document.getElementById('addProductDescription').value,
      specifications: {
        movement: document.getElementById('addProductMovement').value,
        caseMaterial: document.getElementById('addProductCaseMaterial').value,
        caseDiameter: document.getElementById('addProductCaseDiameter').value,
        glass: document.getElementById('addProductGlass').value,
        waterResistance: document.getElementById('addProductWaterResistance').value,
        strapMaterial: document.getElementById('addProductStrapMaterial').value,
        strapWidth: document.getElementById('addProductStrapWidth').value,
        strapColor: document.getElementById('addProductStrapColor').value,
      },
      images : []
    };

    if(isValid(newProduct)){
      sellerProducts.push(newProduct);
      document.getElementById('addModal').classList.remove('show');
      document.body.classList.remove('modal-open');
      document.querySelector('.modal-backdrop').remove();
      populateTable("products",sellerProducts);
    } else{
        alert("Make sure your data is correct")
     }
    
  }

  function deleteProduct(productId) {
    // Filter out the product to be deleted
    sellerProducts = sellerProducts.filter(p => p.productId !== productId);

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
      if (checkEmpty(product.name)&&checkEmpty(product.brand)&&checkEmpty(product.price.toString())&&checkEmpty(product.discount.toString())&&checkEmpty(product.stock.toString()))
        return true ;
      else 
        return false ;  
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
      populateTable('products',sellerProducts);
      addSearchEvent(searchProducts);
      TableH.innerText='My Products';
      addBtn.style.display="block";
    })
    NavLinks[1].addEventListener('click',()=>{
      createTableHeader('orders');
      populateTable('orders',sellerOrders);
      addSearchEvent(searchOrders);
      TableH.innerText="My Orders";
      addBtn.style.display="none";
    })

  }


  document.getElementById('saveChangesBtn').addEventListener('click', saveProductChanges);
  document.getElementById('addProductBtn').addEventListener('click', addProduct);


  
