import { orders } from "../common/staticdata.js";
//import { products } from "../common/staticdata.js";
import { storageModule } from "../common/storageModule.js";

storageModule.setItem("orders", orders);

let users = storageModule.getItem("users");
let tableBody = document.getElementById("adminTableBody");
let tableHead = document.getElementById("adminTableHead");
let modalBody = document.getElementById("modalTableBody");
let modalHead = document.getElementById("modalTableHead");
let modalTitle = document.getElementById("mainModalTitle");
let currentPage = "";
let products = storageModule.getItem("products");

function cartToString(cart) {
  if (cart.length == 0) {
    return "Empty";
  }
  let cartString = "(Product ID, Count):";
  cart.forEach((product) => {
    cartString += ` - (${product.productId}, ${product.quantity})`;
  });
  return cartString;
}

function ordersToString(orders) {
  if (orders.length == 0) {
    return "No orders";
  }
  let ordersString = "Order ID:";
  orders.forEach((order) => {
    ordersString += ` - ${order}`;
  });
  return ordersString;
}
/////// state color display
function color(status) {
  if (status == "Pending") {
    console.log(status);
    return "text-warning"; // orange
  } else if (status == "delivered") {
    return "text-success";
  } else if (status == "Rejected") {
    return "text-danger";
  }
}

function ProductsToOption(pro) {
  let result = "";
  pro.forEach((pro) => {
    result += `
                <option> prodduct ID :${pro.productId} : price : ${pro.price}  : Quantity: ${pro.quantity}   
                </option>`;
  });
  return result;
}

function loadProductsForSeller(sellerId) {
  let num = 0;
  let seller = users.find((user) => user.id == sellerId);
  let productsID = seller.products;
  let products = storageModule
    .getItem("products")
    .filter((product) => productsID.includes(product.productId));

  modalHead.innerHTML = "";
  modalBody.innerHTML = "";
  modalTitle.innerHTML = `Products for ${seller.userName}`;

  modalHead.innerHTML = `
    <tr>
        <th scope="col">#</th>
        <th scope="col">ID</th>
        <th scope="col">Name</th>
        <th scope="col">Image</th>
        <th scope="col">Price</th>
        <th scope="col">Discount</th>
        <th scope="col">Final Price</th>
        <th scope="col">Stock</th>
        <th scope="col">Controls</th>
    </tr>
    `;

  products.forEach((Product) => {
    console.log(products);
    modalBody.innerHTML += `
        <tr>
            <th scope="row">${++num}</th>
            <td>${Product.productId}</td>
            <td>${Product.name}</td>
            <td><img src="${Product.images[0]}" width="50px" height="50px"></td>
            <td>${Product.price}</td>
            <td>%${Product.discount * 100}</td>
            <td>${Product.price - Product.price * Product.discount}</td>
            <td>${Product.stock}</td>
            <td>
                <button type="button" class="btn btn-danger delete-product" data-id="${
                  Product.productId
                }">Delete</button>
            </td>
        `;
  });
}
function loadorderforseller(sellerId) {
  let num = 0;
  let seller = users.find((user) => user.id == sellerId);
  let ordersID = seller.orders;
  let orders = storageModule
    .getItem("orders")
    .filter((order) => ordersID.includes(order.orderID));

  modalHead.innerHTML = "";
  modalBody.innerHTML = "";
  modalTitle.innerHTML = `Orders for ${seller.userName}`;
  modalHead.innerHTML = `
    <tr>
        <th scope="col">#</th>
        <th scope="col">orderID</th>
        <th scope="col">customerID</th>
        <th scope="col">products</th>
        <th scope="col">placeDate</th>
        <th scope="col">orderStatus</th>
        <th scope="col">deliverDate</th>
    </tr>
    `;
  orders.forEach((orders) => {
    modalBody.innerHTML += `
        <tr>
            <th scope="row">${++num}</th>
            <td>${orders.orderID}</td>
            <td>${orders.customerID}</td>
            <td>
                <select>
                ${ProductsToOption(orders.products)}
                </select>
            </td>
            <td>${orders.placeDate}</td>
            <td> 
            <p class=${color(orders.orderStatus)}>.${orders.orderStatus}</p>
            </td>
            <td>${orders.deliverDate}</td>
        `;
  });
}

function createTableHeader(tableType) {
  tableHead.innerHTML = `
    <tr id="header">
        <th scope="col">#</th>
        <th scope="col">ID</th>
        <th scope="col">User Type</th>
        <th scope="col">User Name</th>
        <th scope="col">Email</th>
        <th scope="col">Password</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Phone Number</th>
        <th scope="col">Address</th>
    </tr>        
    `;

  let header = document.getElementById("header");

  if (tableType == " Users Table") {
    header.innerHTML += `
        <th scope="col">Cart</th>
        <th scope="col">Orders</th>
        <th scope="col">Controls</th>  
    `;
  } else if (tableType == " Sellers Table") {
    header.innerHTML += `
        <th scope="col">Products</th>
        <th scope="col">Orders</th>
        <th scope="col">Controls</th>  
    `;
  } else {
    header.innerHTML = "";
    header.innerHTML += `
    <th>#</th>
    <th>productid</th>
    <th>name</th>
    <th>brand</th>
    <th>price</th>
    <th>rating</th>
    <th>category</th>
    <th>discount</th>
    <th>stock</th>
    <th>description</th>
    <th>sellerID</th>
    <th>addedDate</th>
    <th>images</th>
    <th>action</th>
    
    
    `;
  }
}
    
   function LoadUserData(tableType) {
     let count = 0;
     tableBody.innerHTML = "";
     if (tableType == " Users Table") {
       users.forEach((user) => {
         if (user.userType != "customer") {
           return;
         }
         tableBody.innerHTML += `
        <tr>
            <th scope="row">${++count}</th>
            <td>${user.id}</td>
            <td>${user.userType}</td>
            <td>${user.userName}</td>
            <td>${user.email}</td>
            <td>*****</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.phoneNumber}</td>
            <td>${user.location.street}, ${user.location.city}, ${
           user.location.state
         }, ${user.location.country}, ${user.location.zipCode}</td>
            <td>${cartToString(user.cart)}</td>
            <td>${ordersToString(user.orderHistory)}</td>
            <td>
                <button type="button" class="btn btn-danger delete-user" data-id="${
                  user.id
                }">Delete</button>
            </td>
        </tr>
        `;
       });
     } else if (tableType == " Sellers Table") {
       let num = 0;
       users.slice(0, numrows).forEach((user) => {
         if (user.userType != "seller") {
           return;
         }
         tableBody.innerHTML += `
        <tr>
            <th scope="row">${++num}</th>
            <td>${user.id}</td>
            <td>${user.userType}</td>
            <td>${user.userName}</td>
            <td>${user.email}</td>
            <td>*****</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.phoneNumber}</td>
            <td>${user.location.street}, ${user.location.city}, ${
           user.location.state
         }, ${user.location.country}, ${user.location.zipCode}</td>
            <td>
                <button type="button" class="btn btn-primary modal-dialog-scrollable" data-bs-toggle="modal" data-bs-target="#mainModal" name="product" productFor="${
                  user.id
                }">
                    Show
                </button>
            </td>
            <td>
                <button type="button" class="btn btn-primary modal-dialog-scrollable" data-bs-toggle="modal" data-bs-target="#mainModal" name="order" orderFor="${
                  user.id
                }">
                    Display
                </button>
            </td>
            <td>
                <button type="button" class="btn btn-danger delete-user" data-id="${
                  user.id
                }">Delete</button>
            </td>
            `;
       });
       let count = 0;
     } else if (tableType == " Product Catalog") {
       products.slice(0, rows).forEach((product) => {
         tableBody.innerHTML += `
        <tr>
            <th scope="row">${++count}</th>
            <td>${product.name}</td>
            <td>${product.brand}</td>
            <td>${product.price}</td>
            <td>${product.rating}</td>
            <td>${product.category}</td>
            <td>${product.discount}</td>
            <td>${product.stock}</td>
            <td>${product.description}</td>
            <td>${product.sellerID}</td>
            <td>${product.addedDate}</td>
             <td><img src="${
               product.images[0]
             }" width="50px" height="50px"></td>
            <td>${product.addedDate}</td>
            
            <td>
                 <button type="button" class="btn btn-danger delete-product" data-id="${
                   product.id
                 }">Delete</button>
            </td>   
            `;
       });
     }
    
   }


function deleteUser(id) {
  let user = users.find((user) => user.id == id); // get user object
  // if user is seller then delete all products for this seller
  if (user.userType == "seller") {
    user.products.forEach((productID) => {
      deleteProduct(productID);
    });
  }

  users = users.filter((user) => user.id != id); // delete user from users array

  storageModule.setItem("users", users); // update users array in local storage

  LoadUserData(currentPage); // reload table
}

function deleteProduct(id) {
  let product = products.find((product) => product.productId == id);
  // delete product from products array
  products = products.filter((product) => product.productId != id);
  storageModule.setItem("products", products);

  // delete product from seller array
  let currentSeller = users.find((user) => user.id == product.sellerID);
  currentSeller.products = currentSeller.products.filter(
    (productId) => productId != id
  );
  users = users.map((user) => {
    if (user.id == currentSeller.id) {
      return currentSeller;
    }

    return user;
  });
  storageModule.setItem("users", users);

  // delete product from customers cart
  users.forEach((user) => {
    if (user.userType != "customer") {
      return;
    }
    user.cart = user.cart.filter((product) => product.productId != id);
  });
  storageModule.setItem("users", users);

  loadProductsForSeller(currentSeller.id);
}
//// search function
$("#myInput").on("keyup", function () {
  var value = $(this).val().toLowerCase();
  var trs = Array.from(document.getElementsByTagName("tr"));

  trs.forEach(function (tr) {
    if (tr.textContent.toLowerCase().indexOf(value) > -1) {
      tr.style.display = "";
    } else {
      tr.style.display = "none";
    }
  });
});
/////// select by row
let numrows;
let select = document.getElementById("rows");
select.addEventListener("change", function (e) {
  let  selectvalue =parseInt(e.target.value);
     numrows = selectvalue;
});


/////////////////////////// Main ///////////////////////////

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-user")) {
    let id = e.target.getAttribute("data-id");
    deleteUser(id);
  } else if (e.target.classList.contains("nav-link")) {
    currentPage = e.target.innerText;
    createTableHeader(currentPage);
    LoadUserData(currentPage);
  } else if (e.target.classList.contains("modal-dialog-scrollable")) {
    if (e.target.getAttribute("name") == "product") {
      loadProductsForSeller(e.target.getAttribute("productFor"));
    } else if (e.target.getAttribute("name") == "order") {
      loadorderforseller(e.target.getAttribute("orderFor"));
    }
  } else if (e.target.classList.contains("delete-product")) {
    deleteProduct(e.target.getAttribute("data-id"));
  }
});
