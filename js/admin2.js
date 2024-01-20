// import { products } from "../common/staticdata.js";
// import { storageModule } from "../common/storageModule.js";
// storageModule.setItem("products", products);
// console.log(products);
function loadContent(page) {
  var content = document.getElementById("content");

  // Clear existing content
  content.innerHTML = " ";

  if (page == "product") {
    loadprductcontent();
  } else {
    // Implement logic for other pages if needed
    content.innerHTML = `<h3>Showing ${page} content.</h3>`;
  }

  // Create and append the Add button
  // var addButton = document.createElement("input");
  // addButton.setAttribute("type", "button");
  // addButton.value = "Add";
  // addButton.className = "buttonstyle";
  // addButton.addEventListener("click", function () {
  //   // Implement add logic here
  //   alert("Add button clicked");
  // });
  // let uppercontent = document.getElementById('uppercontent');
  // uppercontent.appendChild(addButton);
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
    tbl.classList.add("table"); // Corrected from contains to add
    var tblBody = document.createElement("tbody");

    // Add table headers
    var headers = [
      "Product ID",
      "Header 1",
      "Header 2",
      "Header 3",
      "Header 4",
      "Header 5",
      "Header 6",
      "Header 7",
      "Header 8",
      "Header 9",
      "Actions",
    ];

    var trHeader = document.createElement("tr");
    headers.forEach(function (headerText) {
      var th = document.createElement("th");
      th.setAttribute("scope", "col");
      th.appendChild(document.createTextNode(headerText));
      trHeader.appendChild(th);
    });
    tblBody.appendChild(trHeader);

    // Cells creation
    for (var j = 0; j <= 80; j++) {
      // Table row creation
      var row = document.createElement("tr");

      // Product ID cell
      var cell = document.createElement("td");
      var cellText = document.createTextNode("cell is row " + j + ", column 0");
      cell.appendChild(cellText);
      row.appendChild(cell);

      // Cells with data for the rest of the headers
      for (var k = 1; k <= 9; k++) {
        var dataCell = document.createElement("td");
        var dataCellText = document.createTextNode(
          "Data " + k + " for row " + j
        );
        dataCell.appendChild(dataCellText);
        row.appendChild(dataCell);
      }

      // Actions cell with Edit and Delete buttons
      var actionsCell = document.createElement("td");
      var editButton = document.createElement("button");
      editButton.classList.add("btn", "btn-primary", "btn-sm", "me-2");
      editButton.setAttribute("data-bs-toggle", "modal");
      editButton.setAttribute("data-bs-target", "#exampleModal");
      editButton.innerHTML = "Edit";
      editButton.addEventListener("click", function () {
        // Implement edit logic here
        // alert("Edit button clicked for row " + j);
      });

      var deleteButton = document.createElement("button");
      deleteButton.classList.add("btn", "btn-danger", "btn-sm");
      deleteButton.innerHTML = "Delete";
      deleteButton.addEventListener("click", function () {
        // Implement delete logic here
        alert("Delete button clicked for row " + j);
      });

      actionsCell.appendChild(editButton);
      actionsCell.appendChild(deleteButton);
      row.appendChild(actionsCell);

      // Row added to end of table body
      tblBody.appendChild(row);
    }

    // Append the <tbody> inside the <table>
    tbl.appendChild(tblBody);
    // Put <table> in the <body>
    content.appendChild(tbl);
    // Set table border attribute
    tbl.setAttribute("margin", "30px");
  }
}
