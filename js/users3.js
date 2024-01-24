// import { storageModule } from "../common/storageModule.js";

// let arrusers = storageModule.getItem("users");
// var ids = document.querySelectorAll(".nav-link");

// // load clicked tag
// for (let i = 0; i < ids.length; i++) {
//   ids[i].addEventListener("click", function (e) {
//     let page = e.target.innerText;
//     loadContent(page);
//   });
// }

// function loadContent(page) {
//   var content = document.getElementById("content");

//   // Clear existing content

//   if (page == " Users Table") {
//     loadUserContent();
//   } else {
//     // Implement logic for other pages if needed
//     // content.innerHTML = `<h3>Showing ${page} content.</h3>`;
//   }

//   function loadUserContent() {
//     content.innerHTML = " ";
//     let upper = document.createElement("div");
//     upper.id = "operations";
//     upper.classList.add("operationsdiv");

//     let search = document.createElement("input");
//     search.classList.add("form-control");
//     search.type = "text";
//     search.placeholder = "Search By user name";

//     let searchbutton = document.createElement("input");
//     searchbutton.classList.add("btn", "btn-primary", "btn-sm", "m-2");
//     searchbutton.type = "button";
//     searchbutton.value = "Search";

//     // Functionality of search on button click
//     searchbutton.onclick = function () {
//       performSearch(search.value.toUpperCase());
//     };

//     // Functionality of search on keyup
//     search.addEventListener("keyup", function () {
//       performSearch(search.value.toUpperCase());
//     });

//     // Appending search and searchbutton to div
//     upper.append(search, searchbutton);

//     // Creating and appending the select element
//     let select = document.createElement("select");
//     select.classList.add("form-control", "my-select"); // Add your own class if needed

//     // Array of options
//     let optionsArray = ["5", "10", "15", "20", "30"];

//     // Adding options to select
//     optionsArray.forEach(function (optionValue) {
//       let option = document.createElement("option");
//       option.value = optionValue;
//       option.text = optionValue;
//       select.appendChild(option);
//     });

//     // Appending select to div
//     upper.appendChild(select);

//     // Appending the upper div to the content
//     content.appendChild(upper);

//     // Initial table creation with default number of rows
//     select.addEventListener("change", function (e) {
//       let num = e.target.value;
//       tableCreate(parseInt(num));
//     });

//     // Initial table creation with default number of rows
//     tableCreate(parseInt(select.value));
//   }

//   function performSearch(filter) {
//     let table = document.getElementById("usertable");
//     let tr = table.getElementsByTagName("tr");

//     for (let i = 0; i < tr.length; i++) {
//       let td = tr[i].getElementsByTagName("td")[2]; // Assuming the user name is in the second column (index 1)
//       if (!td) continue;
//       let txtValue = td.textContent || td.innerText;

//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }
//   }

//   function tableCreate(rowsToShow) {
//     // Remove existing table if it exists
//     var existingTable = document.getElementById("usertable");
//     if (existingTable) {
//       existingTable.remove();
//     }

//     // Create elements <table> and a <tbody>
//     var tbl = document.createElement("table");
//     tbl.id = "usertable";
//     tbl.classList.add("table");
//     var tblBody = document.createElement("tbody");
//     tbl.classList.add("table-responsive");
//     tbl.classList.add("table-striped");
//     tbl.classList.add("table-hover");

//     // Add table headers
//     var headers = Object.keys(arrusers[4]);
//     //	PRODUCTS
//     var trHeader = document.createElement("tr");
//     headers.forEach(function (headerText) {
//       if (headerText == "products") {
//         return;
//       }
//       var th = document.createElement("th");
//       th.setAttribute("scope", "col");
//       th.appendChild(document.createTextNode(headerText));
//       trHeader.appendChild(th);
//     });
//     var th = document.createElement("th");
//     th.setAttribute("scope", "col");
//     th.appendChild(document.createTextNode("Actions"));
//     trHeader.appendChild(th);
//     tblBody.appendChild(trHeader);

//     // Cells creation
//     arrusers.slice(0, rowsToShow).forEach(function (user) {
//       var row = document.createElement("tr");

//       headers.forEach(function (header) {
//         var cell = document.createElement("td");

//         // Special handling for 'location' property
//         if (header === "location") {
//           // Convert location object to a string for display
//           //console.log(user[header]);
//           cell.innerText = `${user[header].street}, ${user[header].city},${user[header].state},${user[header].country},${user[header].zipCode}`;
//         } else if (header == "products") {return;}  
//         else {
//           cell.appendChild(document.createTextNode(user[header]));
//         }

//         row.appendChild(cell);
//       });
//       // {"street":"Pine","city":"San Francisco","state":"AZ","country":"France","zipCode":"13564"}

//       // Actions cell with Edit and Delete buttons
//       var actionsCell = document.createElement("td");
//       var editButton = document.createElement("button");
//       editButton.classList.add("btn", "btn-primary", "btn-sm", "me-2");
//       editButton.setAttribute("data-bs-toggle", "modal");
//       editButton.setAttribute("data-bs-target", "#exampleModal");
//       editButton.innerHTML = "Edit";
//       editButton.addEventListener("click", function () {
//         // Implement edit logic here
//         // alert("Edit button clicked for user " + user.id);
//       });

//       var deleteButton = document.createElement("button");
//       deleteButton.classList.add("btn", "btn-danger", "btn-sm");
//       deleteButton.innerHTML = "Delete";
//       deleteButton.addEventListener("click", function () {
//         // Implement delete logic here
//         if (confirm("Are you sure you want to delete this user?")) {
//           deleteProduct(user.id);
//           tableCreate(parseInt(select.value));
//         }
//       });

//       actionsCell.appendChild(editButton);
//       actionsCell.appendChild(deleteButton);
//       row.appendChild(actionsCell);

//       // Row added to end of table body
//       tblBody.appendChild(row);
//     });

//     // Append the <tbody> inside the <table>
//     tbl.appendChild(tblBody);
//     // Put <table> in the <content>
//     content.appendChild(tbl);
//   }

//   function deleteProduct(userId) {
//     // Find the index of the user with the specified userId
//     const index = arrusers.findIndex((user) => user.id === userId);

//     // If the user is found, remove it from the array
//     if (index !== -1) {
//       arrusers.splice(index, 1);

//       // Update the local storage with the modified array
//       storageModule.setItem("users", arrusers);

//       // Log to console for demonstration
//       console.log("User with ID " + userId + " deleted.");
//     }
//   }
// }
