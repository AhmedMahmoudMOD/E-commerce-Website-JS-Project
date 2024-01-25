// import { storageModule } from "../common/storageModule.js";

// let users = storageModule.getItem("users");
// let tableBody = document.getElementById("adminTableBody");
// let count = 0;


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
