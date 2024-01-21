import { storageModule } from "../common/storageModule.js";

let arrusers = storageModule.getItem("users");
console.log(arrusers);
var ids = document.querySelectorAll(".nav-link");

// load clicked tag
for (let i = 0; i < ids.length; i++) {
  ids[i].addEventListener("click", function (e) {
    let page = e.target.innerText;
    loadContent(page);
  });
}

function loadContent(page) {
  var content = document.getElementById("content");

  // Clear existing content

  if (page == " Users Table") {
    loadUserContent();
  } else {
    // Implement logic for other pages if needed
    // content.innerHTML = `<h3>Showing ${page} content.</h3>`;
  }

  function loadUserContent() {
    content.innerHTML = " ";
    // table div
    // opretaions div
    let upper = document.createElement("div");
    upper.id = "operations";
    upper.classList.add("opertaionsdiv");
    upper.classList.add("sticky-top");

    let search = document.createElement("input");
    search.classList.add("form-control");
    search.type = "text";
    search.placeholder = "Search By user name";

    let searchbutton = document.createElement("input");
    searchbutton.classList.add("btn", "btn-primary", "btn-sm", "m-2");
    searchbutton.type = "button";
    searchbutton.value = "Search";
    // Functionality of search
    searchbutton.onclick = function () {
      

    };

    // Appending search and searchbutton to div
    upper.append(search, searchbutton);

    // Appending the upper div to the content
    content.prepend(upper);

    // Creating table
    tableCreate();
  }

  function tableCreate() {
    // Create elements <table> and a <tbody>
    let biggerdiv = document.createElement("div");
    biggerdiv.classList.add("table-responsive");
    var tbl = document.createElement("table");
    tbl.classList.add("table");
    var tblBody = document.createElement("tbody");
    tbl.classList.add("table-responsive");
    tbl.classList.add("table-striped");
    tbl.classList.add("table-hover");

    // Add table headers
    var headers = Object.keys(arrusers[0]);

    var trHeader = document.createElement("tr");
    headers.forEach(function (headerText) {
      var th = document.createElement("th");
      th.setAttribute("scope", "col");
      th.appendChild(document.createTextNode(headerText));
      trHeader.appendChild(th);
    });
    var th = document.createElement("th");
    th.setAttribute("scope", "col");
    th.appendChild(document.createTextNode("Actions"));
    trHeader.appendChild(th);
    tblBody.appendChild(trHeader);

    // Cells creation
    arrusers.forEach(function (user) {
      var row = document.createElement("tr");

      headers.forEach(function (header) {
        var cell = document.createElement("td");

        // Special handling for 'location' property
        if (header === "location") {
          // Convert location object to a string for display
          cell.appendChild(
            document.createTextNode(JSON.stringify(user[header]))
          );
        } else {
          cell.appendChild(document.createTextNode(user[header]));
        }

        row.appendChild(cell);
      });

      // Actions cell with Edit and Delete buttons
      var actionsCell = document.createElement("td");
      var editButton = document.createElement("button");
      editButton.classList.add("btn", "btn-primary", "btn-sm", "me-2");
      editButton.setAttribute("data-bs-toggle", "modal");
      editButton.setAttribute("data-bs-target", "#exampleModal");
      editButton.innerHTML = "Edit";
      editButton.addEventListener("click", function () {
        // Implement edit logic here
         alert("Edit button clicked for user " + user.id);
      });

      var deleteButton = document.createElement("button");
      deleteButton.classList.add("btn", "btn-danger", "btn-sm");
      deleteButton.innerHTML = "Delete";
      deleteButton.addEventListener("click", function () {
        // Implement delete logic here
        // alert("Delete button clicked for user " + user.id);
      });

      actionsCell.appendChild(editButton);
      actionsCell.appendChild(deleteButton);
      row.appendChild(actionsCell);

      // Row added to end of table body
      tblBody.appendChild(row);
    });

    // Append the <tbody> inside the <table>
    tbl.appendChild(tblBody);
    // Put <table> in the <body>
    biggerdiv.appendChild(tbl);
    // Set table border attribute
    content.appendChild(biggerdiv);
    tbl.setAttribute("margin", "30px");
  }
}
