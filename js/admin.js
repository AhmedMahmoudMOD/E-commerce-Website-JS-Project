import { storageModule } from "../common/storageModule.js";
let arrproducts = storageModule.getItem("products");
console.log(arrproducts);
console.log(Object.keys(arrproducts[0]));
var ids = document.querySelectorAll(".nav-link");
// load clicked tag
for (let i = 0; i < ids.length; i++) {
  ids[i].addEventListener("click", function (e) {
    let page = e.target.innerText;
    //console.log(page);
    loadContent(page);
  });
}

function loadContent(page) {
  var content = document.getElementById("content");

  // Clear existing content
  content.innerHTML = " ";

  if (page == " Product Catalog") {
    loadprductcontent();
  } else {
    // Implement logic for other pages if needed
    content.innerHTML = `<h3>Showing ${page} content.</h3>`;
  }

  function loadprductcontent() {
    let upper = document.createElement("div");
    upper.id = "operations";
    upper.classList.add("opertaionsdiv");

    let search = document.createElement("input");
    search.classList.add("form-control");
    search.type = "text";
    search.placeholder = "Search By product name";

    let searchbutton = document.createElement("input");
    searchbutton.classList.add("btn", "btn-primary", "btn-sm", "m-2");
    searchbutton.type = "button";
    searchbutton.value = "Search";
    // Functionality of search
    searchbutton.onclick = function () {};

    // Appending search and searchbutton to div
    upper.append(search, searchbutton);

    // Creating and appending the select element
    let select = document.createElement("select");
    select.classList.add("form-control", "my-select"); // Add your own class if needed

    // Array of options
    let optionsArray = ["10", "15", "20", "30"];

    // Adding options to select
    optionsArray.forEach(function (optionValue) {
      let option = document.createElement("option");
      option.value = optionValue;
      option.text = optionValue;
      select.appendChild(option);
    });

    // Appending select to div
    upper.appendChild(select);

    // Appending the upper div to the content
    content.prepend(upper);

    // Creating table
    tableCreate();
  }

  function tableCreate() {
    // Create elements <table> and a <tbody>
    var tbl = document.createElement("table");
    tbl.classList.add("table");
    var tblBody = document.createElement("tbody");
    tbl.classList.add("table-striped");
    tbl.classList.add("table-hover");

    // Add table headers
    var headers = Object.keys(arrproducts[0]);

    var trHeader = document.createElement("tr");
    headers.forEach(function (headerText) {
      if (headerText == "specifications") {
        headerText = " ";
      }
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
    arrproducts.forEach(function (product) {
      var row = document.createElement("tr");

      headers.forEach(function (header) {
        var cell = document.createElement("td");

        // Special handling for 'images' and 'specifications' properties
        if (header === "images") {
          var imagesCellContent = document.createElement("div");

          product[header].forEach(function (image) {
            var imgElement = document.createElement("img");
            imgElement.src = image;
            imgElement.style.maxWidth = "26px"; // Set maximum width for images if needed
            imagesCellContent.appendChild(imgElement);
          });

          cell.appendChild(imagesCellContent);
        } else if (header === "specifications") {
          let div = document.createElement("div");
          // Convert specifications object to a string for display
          console.log(JSON.stringify(product[header]));
          div.appendChild(
            document.createTextNode(JSON.stringify(product[header]))
          );
          // cell.appendChild(div);
        } else {
          cell.appendChild(document.createTextNode(product[header]));
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
        // alert("Edit button clicked for product " + product.productId);
      });

      var deleteButton = document.createElement("button");
      deleteButton.classList.add("btn", "btn-danger", "btn-sm");
      deleteButton.innerHTML = "Delete";
      deleteButton.addEventListener("click", function () {
        // Implement delete logic here
        // alert("Delete button clicked for product " + product.productId);
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
    content.appendChild(tbl);
    // Set table border attribute
    tbl.setAttribute("margin", "30px");
  }
}
