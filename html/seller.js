import { storageModule } from "../common/storageModule.js";

import {users,orders,products,ordersHistory,currentUser,guestCart} from "../common/staticdata.js"

storageModule.setItem('currentUser',currentUser);
let allUsers=storageModule.getItem('users');
let allProducts = storageModule.getItem('products');
let currentUserObj = storageModule.getItem('currentUser');
let sellerProductsIDs = currentUserObj.products;
let sellerProducts = allProducts.filter(product => sellerProductsIDs.includes(product.productId)); 

console.log(sellerProductsIDs);
console.log(sellerProducts);

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
          <button type="button" class="btn btn-sm btn-outline-secondary" id="deleteBtn">
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


  document.getElementById('saveChangesBtn').addEventListener('click', saveProductChanges);


  function deleteProduct(productId) {
    // Filter out the product to be deleted
    sellerProducts = sellerProducts.filter(p => p.productId !== productId);

    // Repopulate the products table
    populateProductsTable();
  }

  populateProductsTable();

  
