<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      Super Panel
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto"></ul>
    </div>
  </div>
</nav>;

import { storageModule } from "../common/storageModule.js";

let arrproducts = storageModule.getItem("products");

var ids = document.querySelectorAll(".nav-link");

// load clicked tag
for (let i = 0; i < ids.length; i++) {
  ids[i].addEventListener("click", function (e) {
    let page = e.target.innerText;
    console.log(page);
    loadContent(page);
  });
}

function loadContent(page) {
  var content = document.getElementById("content");

  // Clear existing content
  content.innerHTML = " ";
  if (page == " Product Catalog") {
    loadProductContent();
  } else {
    // Implement logic for other pages if needed
    content.innerHTML = `<h3>Showing ${page} content.</h3>`;
  }

  function loadProductContent() {
    let upper = document.createElement("div");
    upper.id = "operations";
    upper.classList.add("operationsdiv");

    let search = document.createElement("input");
    search.classList.add("form-control");
    search.type = "text";
    search.placeholder = "Search By product name";

    let searchbutton = document.createElement("input");
    searchbutton.classList.add("btn", "btn-primary", "btn-sm", "m-2");
    searchbutton.type = "button";
    searchbutton.value = "Search";

    // Functionality of search on button click
    searchbutton.onclick = function () {
      performSearch(search.value.toUpperCase());
    };

    // Functionality of search on keyup
    search.addEventListener("keyup", function () {
      performSearch(search.value.toUpperCase());
    });

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
    content.appendChild(upper);

    // Initial table creation with default number of rows
    select.addEventListener("change", function (e) {
      let num = e.target.value;
      tableCreate(parseInt(num));
    });

    // Initial table creation with default number of rows
    tableCreate(parseInt(select.value));

    function deleteProduct(productId) {
      // Find the index of the product with the specified productId
      const index = arrproducts.findIndex(
        (product) => product.productId === productId
      );

      // If the product is found, remove it from the array
      if (index !== -1) {
        arrproducts.splice(index, 1);

        // Update the local storage with the modified array
        storageModule.setItem("products", arrproducts);

        // Log to console for demonstration
        console.log("Product with ID " + productId + " deleted.");
      }
    }

    function performSearch(filter) {
      let table = document.getElementById("producttable");
      let tr = table.getElementsByTagName("tr");

      for (let i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td")[2]; // Assuming the product name is in the second column (index 1)
        if (!td) continue;
        let txtValue = td.textContent || td.innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }

    function tableCreate(rowsToShow) {
      // Remove existing table if it exists
      var existingTable = document.getElementById("producttable");
      if (existingTable) {
        existingTable.remove();
      }

      // Create elements <table> and a <tbody>
      var tbl = document.createElement("table");
      tbl.id = "producttable";
      tbl.classList.add("table");
      var tblBody = document.createElement("tbody");
      tbl.classList.add("table-responsive");
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
      arrproducts.slice(0, rowsToShow).forEach(function (product) {
        var row = document.createElement("tr");

        headers.forEach(function (header) {
          var cell = document.createElement("td");

          // Special handling for 'images' property
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
            cell.innerHTML = " ";
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
        editButton.addEventListener("click", function () {});

        var deleteButton = document.createElement("button");
        deleteButton.classList.add("btn", "btn-danger", "btn-sm");
        deleteButton.innerHTML = "Delete";
        deleteButton.addEventListener("click", function () {
          // Implement delete logic here
          if (confirm("Are you sure you want to delete this product?")) {
            deleteProduct(product.productId);
            tableCreate(parseInt(select.value));
          }
        });

        //actionsCell.appendChild(editButton);
        actionsCell.appendChild(deleteButton);
        row.appendChild(actionsCell);

        // Row added to end of table body
        tblBody.appendChild(row);
      });

      // Append the <tbody> inside the <table>
      tbl.appendChild(tblBody);
      // Put <table> in the <content>
      content.appendChild(tbl);
    }
  }
}
