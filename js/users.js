import { orders } from "../common/staticdata.js";
import { storageModule } from "../common/storageModule.js";

storageModule.setItem("orders", orders);

let users = storageModule.getItem("users");
let products = storageModule.getItem("products");
let tableBody;
let tableHead;
let modalBody = document.getElementById("modalTableBody");
let modalHead = document.getElementById("modalTableHead");
let modalTitle = document.getElementById("mainModalTitle");
let currentPage = "";
let container = document.getElementById("content");

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

function color(status) {
    if (status == "Pending") {
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
                <button type="button" class="btn btn-danger delete-product" data-id="${Product.productId
            }">Delete</button>
            </td>
        `;
    });
}

function loadorderforseller(sellerId) {
    let num = 0;
    let seller = users.find((user) => user.id == sellerId);
    let ordersID = seller.orders;
    console.log(seller);
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

function getTopBrands(num) {
    let brands = [];
    let result = [];
    let others = 0;
    products.forEach((product) => {
        if (!brands.includes(product.brand)) {
            brands.push(product.brand);
        }
    });
    brands.forEach((brand) => {
        let count = 0;
        products.forEach((product) => {
            if (product.brand == brand) {
                count++;
            }
        });
        result.push({ brand: brand, count: count });
    });
    result.sort((a, b) => (a.count < b.count) ? 1 : -1);
    result.slice(num - 1, result.length).forEach((brand) => {
        others += brand.count;
    });
    result = result.slice(0, num - 1);
    result.push({ brand: "others", count: others });
    return result;

}

function getUsersCount() {
    let customers = 0;
    let sellers = 0;
    users.forEach((user) => {
        if (user.userType == "customer") {
            customers++;
        }
        else if (user.userType == "seller") {
            sellers++;
        }
    });
    return [customers, sellers];
}

function LoadUserData(tableType) {
    let count = 0;
    LoadEmptyTable();
    if (tableType == " Users Table") {
        createTableHeader(currentPage);
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
            <td>${user.location.street}, ${user.location.city}, ${user.location.state
            }, ${user.location.country}, ${user.location.zipCode}</td>
            <td>${cartToString(user.cart)}</td>
            <td>${ordersToString(user.orderHistory)}</td>
            <td>
            <button type="button" class="btn btn-danger delete-user" data-id="${user.id
            }">Delete</button>
            </td>
            </tr>
            `;
        });
        LoadSearchOptions(currentPage);
    } else if (tableType == " Sellers Table") {
        createTableHeader(currentPage);
        let num = 0;
        users.forEach((user) => {
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
            <td>${user.location.street}, ${user.location.city}, ${user.location.state
            }, ${user.location.country}, ${user.location.zipCode}</td>
            <td>
            <button type="button" class="btn btn-primary modal-dialog-scrollable" data-bs-toggle="modal" data-bs-target="#mainModal" name="product" productFor="${user.id
            }">
            Show
            </button>
            </td>
            <td>
            <button type="button" class="btn btn-primary modal-dialog-scrollable" data-bs-toggle="modal" data-bs-target="#mainModal" name="order" orderFor="${user.id
            }">
            Display
            </button>
            </td>
            <td>
            <button type="button" class="btn btn-danger delete-user" data-id="${user.id
            }">Delete</button>
            </td>
            `;
        });
        LoadSearchOptions(currentPage);
    } else if (tableType == " Product Catalog") {
        createTableHeader(currentPage);
        products.forEach((product) => {
            tableBody.innerHTML += `
            <tr>
            <th scope="row">${++count}</th>
            <td>${product.productId}</td>
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
            <td><img src="${product.images[0]
            }" width="50px" height="50px"></td>            
            <td>
            <button type="button" class="btn btn-danger delete-product" data-id="${product.productId}">Delete</button>
            </td>
            `;
        });
        LoadSearchOptions(currentPage);
    } else if (tableType == " charts") {
        
        container.innerHTML = ""; // clear container

        // add canvas to content div
        container.innerHTML = ` 
        <div class="container mt-3">
            <div class="row gap-3">
                <div class="col p-3 rounded-5 border bg-dark bg-opacity-10 chart-container">
                    <canvas id="BrandChart"></canvas>
                </div>
                <div class="col p-3 rounded-5 border bg-dark bg-opacity-10 chart-container">
                    <canvas id="userCountChart"></canvas>
                </div>
                <div class="col p-3 rounded-5 border bg-dark bg-opacity-10 chart-container">
                    <canvas id="UserChart"></canvas>
                </div>
            </div>
        </div>`; 
        
        InitializeCharts(); // initialize charts
    }
}

function InitializeCharts() {
    // setup chart
    const Utils = ChartUtils.init(); // get chart utils

    const Brands_ctx = document.getElementById("BrandChart"); // get canvas
    const User_ctx = document.getElementById("UserChart"); // get canvas
    const UserCount_ctx = document.getElementById("userCountChart"); // get canvas

    const Brands_DATA_COUNT = 5; // number of data points

    const brandsData = {
        labels: getTopBrands(Brands_DATA_COUNT).map((brand) => brand.brand), // get top 5 brands
        datasets: [
            {
                label: "Number of Products",
                data: getTopBrands(Brands_DATA_COUNT).map((brand) => brand.count), // get top 5 brands count
                backgroundColor: Object.values(Utils.CHART_COLORS), // get chart colors
            },
        ],
    };

    const brandsConfig = {
        type: "doughnut",
        data: brandsData,
        options: {
            maintainAspectRatio: false,
            responsive: true,
            animation: { animateRotate: true, duration: 2500 },
            plugins: {
                legend: {
                    position: "top",
                },
                title: {
                    display: true,
                    text: "Top Number of Products by Brand",
                },
            },
        },
    };

    new Chart(Brands_ctx, brandsConfig);

    const User_DATA_COUNT = 7;
    const History_NUMBER_CFG = { count: User_DATA_COUNT, min: 1000, max: 10000 };

    const labels = Utils.months({ count: 7 });
    const userData = {
        labels: labels,
        datasets: [
            {
                label: 'Customers',
                data: Utils.numbers(History_NUMBER_CFG),
                borderColor: Utils.CHART_COLORS.red,
                backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
            },
            {
                label: 'Sellers',
                data: Utils.numbers(History_NUMBER_CFG),
                borderColor: Utils.CHART_COLORS.blue,
                backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
            }
        ]
    };

    const userConfig = {
        type: 'line',
        data: userData,
        options: {
            maintainAspectRatio: false,
            responsive: true,
            animation: { duration: 2500 },
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Users count by Month'
                }
            }
        },
    };

    new Chart(User_ctx, userConfig);


    const userCountData = {
        labels: ['Customer', 'Seller'],
        datasets: [
            {
                label: 'Count',
                data: getUsersCount(),
                backgroundColor: Object.values(Utils.CHART_COLORS),
            }
        ]
    };

    const userCountConfig = {
        type: 'pie',
        data: userCountData,
        options: {
            maintainAspectRatio: false,
            responsive: true,
            animation: { duration: 2500 },
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Current Users Count'
                }
            }
        },
    };

    new Chart(UserCount_ctx, userCountConfig);
}

function LoadSearchOptions(tableType) {
    let searchBy = document.getElementById("searchBy");
    //searchBy.innerHTML = "";
    if (tableType == " Users Table" || tableType == " Sellers Table") {
        searchBy.innerHTML += `
            <option value="1">ID</option>
            <option value="3">User Name</option>
            <option value="4">Email</option>
            `;
    } else if (tableType == " Product Catalog") {
        searchBy.innerHTML += `
            <option value="1">ID</option>
            <option value="2">Name</option>
            <option value="3">Brand</option>
            <option value="4">Price</option>
            `;
    }

    // search function
    $("#search").on("keyup", function () {
        let searchBy = document.getElementById("searchBy").value; // get search by value
        let value = $(this).val().toLowerCase(); // get search value
        let tableBody = document.getElementById("adminTableBody"); // get table body

        // searching each row for value
        Array.from(tableBody.rows).forEach((row) => {
            $(row).toggle(row.cells[parseInt(searchBy)].innerText.toLowerCase().includes(value.toLowerCase()));
        });
    });
}

function deleteUser(id) {
  // Add a confirmation dialog

  let user = users.find((user) => user.id == id); // get user object
  if (!user) {
    alert("User not found!");
    return;
  }

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
  if (!product) {
    alert("Product not found!");
    return;
  }
  // delete product from products array
  products = products.filter((product) => product.productId != id);
  storageModule.setItem("products", products);

  // delete product from seller array
  let currentSeller = users.find((user) => user.id == product.sellerID);
  if (currentSeller) {
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
  }

  // delete product from customers cart
  users.forEach((user) => {
    if (user.userType != "customer") {
      return;
    }
    user.cart = user.cart.filter((product) => product.productId != id);
  });
  storageModule.setItem("users", users);

  if (currentPage == " Sellers Table") loadProductsForSeller(currentSeller.id);
  else if (currentPage == " Product Catalog") LoadUserData(currentPage);
}

function LoadEmptyTable() {
    container.innerHTML = "";

    container.innerHTML = `
    <!-- Search bar -->
    <div class="d-flex flex-row mb-3 border p-2" id="searchContainer">
        <div class="col">
        <label>search:</label>
        <input
            type="search"
            placeholder="search"
            class="form-control w-75"
            id="search"
        />
        </div>
        <div class="col">
        <label>Search By:</label>
        <select
            name="searchBy"
            id="searchBy"
            class="form-select w-75"
        ></select>
        </div>
        <div class="col"></div>
    </div>
    <!-- End of search bar -->

    <!-- Table creation -->
    <div class="text-center table-responsive">
        <table
        class="table table-striped table-hover align-middle"
        style="font-size: small"
        >
        <thead class="table-primary" id="adminTableHead"></thead>
        <tbody class="table-group-divider" id="adminTableBody"></tbody>
        </table>
    </div>
    <!-- End of table creation -->
    `;
    tableBody = document.getElementById("adminTableBody");
    tableHead = document.getElementById("adminTableHead");
}

function FireDeleteSweetAlert(func, id)
{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            func(id);
            Swal.fire({
                title: "Deleted!",
                text: "Deleted successfully.",
                icon: "success"
            });
        }
    });
}

/////////////////////////// Main ///////////////////////////

LoadUserData(" charts"); // Load charts by default 

document.addEventListener("click", function (e) {

    if (e.target.classList.contains("delete-user")) { // if delete user button is clicked
        
        FireDeleteSweetAlert(deleteUser, e.target.getAttribute("data-id"));

    } else if (e.target.classList.contains("nav-link")) { // if nav link is clicked
        
        currentPage = e.target.innerText;
        LoadUserData(currentPage);

    } else if (e.target.classList.contains("modal-dialog-scrollable")) { // if modal button is clicked
        
        if (e.target.getAttribute("name") == "product") { // if product button is clicked
            loadProductsForSeller(e.target.getAttribute("productFor"));

        } else if (e.target.getAttribute("name") == "order") { // if order button is clicked
            loadorderforseller(e.target.getAttribute("orderFor"));
        }

    } else if (e.target.classList.contains("delete-product")) { // if delete product button is clicked
        
        FireDeleteSweetAlert(deleteProduct, e.target.getAttribute("data-id"));
    }
});