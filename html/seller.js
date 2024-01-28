import { storageModule } from "../common/storageModule.js";

import {users,orders,products,currentUser,guestCart} from "../common/staticdata.js"

storageModule.setItem('currentUser',currentUser);
storageModule.setItem('orders',orders);
let allUsers=storageModule.getItem('users');
let allProducts = storageModule.getItem('products');
let currentUserObj = storageModule.getItem('currentUser');
let allOrders = storageModule.getItem("orders");
let sellerProductsIDs = currentUserObj.products;
let sellerProducts = allProducts.filter(product => sellerProductsIDs.includes(product.productId)); 

console.log(sellerProductsIDs);
console.log(sellerProducts);
createTableHeader();

function createTableHeader() {
    const attributesToDisplay = ['ProductID', 'Name', 'Brand', 'Price', 'Discount', 'Stock', 'Description', 'Actions'];
    const tableHead = document.getElementById('tableHead');
    const headerRow = document.createElement('tr');

    attributesToDisplay.forEach(attribute => {
      const th = document.createElement('th');
      th.setAttribute('scope', 'col');
      th.textContent = attribute;
      headerRow.appendChild(th);
    });

    tableHead.appendChild(headerRow);
  }

function populateProductsTable() {
    const tableBody = document.getElementById('productsBody');

    // Clear existing rows
    tableBody.innerHTML = '';

    // Iterate over products and create table rows
    sellerProducts.forEach(product => {
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
          <button type="button" class="btn btn-sm btn-outline-secondary edit-btn" data-bs-toggle="modal" data-bs-target="#editModal">
            Edit
          </button>
          <button type="button" class="btn btn-sm btn-danger" id="deleteBtn">
            Delete
          </button>
        </td>
      `;

      tableBody.appendChild(row);
      row.querySelector('.edit-btn').addEventListener('click', () => populateEditForm(product.productId));
      row.querySelector('#deleteBtn').addEventListener('click', () => deleteProduct(product.productId));
    
    });
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

    
    if (index !== -1) {
      sellerProducts[index] = updatedProduct;
    }
    
    console.log(sellerProducts[index]);

    populateProductsTable();

    // // Close the modal
    // document.getElementById('editModal').classList.remove('show');
    // document.body.classList.remove('modal-open');
    // document.querySelector('.modal-backdrop').remove();
  }

  function addProduct() {
    const newProduct = {
      productId: 'P51', // You need to implement a function to generate a unique product ID
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

    
    sellerProducts.push(newProduct);
    console.log(sellerProducts);

    populateProductsTable();

  }

  function deleteProduct(productId) {
    // Filter out the product to be deleted
    sellerProducts = sellerProducts.filter(p => p.productId !== productId);

    // Repopulate the products table
    populateProductsTable();
  }



  document.getElementById('saveChangesBtn').addEventListener('click', saveProductChanges);
  document.getElementById('addProductBtn').addEventListener('click', addProduct);


  populateProductsTable();

  