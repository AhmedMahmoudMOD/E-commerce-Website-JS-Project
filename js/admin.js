// import { storageModule } from "../common/storageModule.js";

<<<<<<< HEAD
// let users = storageModule.getItem("users");
// let tableBody = document.getElementById("adminTableBody");
// let count = 0;
=======
let products = storageModule.getItem("products");
let content = document.getElementById("content");
var ids = document.querySelectorAll(".nav-link");
>>>>>>> f6f45079ce6cff91de4ae3f792ea3e1c99fe065a

let tableBody = document.getElementById("adminTableBody");
let telhead = document.getElementById("admintablehead");
let count = 0;
for (let i = 0; i < ids.length; i++) {
  ids[i].addEventListener("click", function (e) {
    let page = e.target.innerText;
    loadContent(page);
  });
}

function loadContent(page) {
  var content = document.getElementById("content");

  // Clear existing conten
  if (page == " Users Table") {
    LoadUserData();
    console.log(page);
  } else {
    // Implement logic for other pages if needed
    content.innerHTML = `<h3>Showing ${page} content.</h3>`;
  }
}

<<<<<<< HEAD
// function LoadUserData() {
//   tableBody.innerHTML = "";
//   users.forEach((user) => {
//     if (user.userType != "customer") {
//       return;
//     }
//     tableBody.innerHTML += `
//         <tr>
//             <th scope="row">${++count}</th>
//             <td>${user.id}</td>
//             <td>${user.userType}</td>
//             <td>${user.userName}</td>
//             <td>${user.email}</td>
//             <td>*****</td>
//             <td>${user.firstName}</td>
//             <td>${user.lastName}</td>
//             <td>${user.phoneNumber}</td>
//             <td>${user.location.street}, ${user.location.city}, ${
//       user.location.state
//     }, ${user.location.country}, ${user.location.zipCode}</td>
//             <td>${cartToString(user.cart)}</td>
//             <td>${ordersToString(user.orderHistory)}</td>
//             <td>
//                 <button type="button" class="btn btn-danger delete-user" data-id="${
//                   user.id
//                 }">Delete</button>
//             </td>
//         </tr>
//         `;
//   });
// }
=======
function LoadUserData() {
     tableBody.innerHTML = " ";
  products.forEach((user) => {
    if (user.userType != "customer") {
      return;
    }
    telhead.innerHTML = `
    <tr>
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
    <th scope="col">Cart</th>
    <th scope="col">Orders</th>
    <th scope="col">Controls</th>
                </tr>
    
    `;

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
            <td>$//{cartToString(user.cart)}</td>
            <td>$//{ordersToString(user.orderHistory)}</td>
            <td>
                <button type="button" class="btn btn-danger delete-user" data-id="${
                  user.id
                }">Delete</button>
            </td>
        </tr>
        `;
  });
}
>>>>>>> f6f45079ce6cff91de4ae3f792ea3e1c99fe065a

// function deleteUser(id) {
//   users = users.filter((user) => user.id != id);
//   storageModule.setItem("users", users);
//   LoadUserData();
// }

// LoadUserData();

// document.addEventListener("click", function (e) {
//   if (e.target.classList.contains("delete-user")) {
//     let id = e.target.getAttribute("data-id");
//     deleteUser(id);
//   }
// });
