import { storageModule } from "../common/storageModule.js"
import { IDGenerator } from "../common/idclass.js"


//////////////////////////// Call Functions ////////////////////////////
LoginCheck(); // Check if the user is logged in or not
LoadData(); // Load the products information to the cart page
LoadShippingAddress(); // Load the shipping address


/////////////////////////////// Functions //////////////////////////////
function LoginCheck() // Check if the user is logged in or not
{
    if (storageModule.getItem("currentUser") == null) // If the user is not logged in then redirect him to the login page
    {
        alert("You must login first");
        window.location.href = "login.html";
    }
    else // If the user is logged in then check if he is a customer or not
    {
        if (storageModule.getItem("currentUser").userType != "customer") // If the user is not a customer then redirect him to the home page
        {
            alert("You must login as a customer first");
            window.location.href = "Login.html";
        }
        else if (storageModule.getItem("currentUser").cart.length == "") // check if the cart is empty
        {
            alert("Your cart is empty");
            window.location.href = "home.html";
        }
    }
}

function GetProductsInformation() // Get each product information from cart and return it in an array of objects with the product information
{
    let datacart = storageModule.getItem("currentUser").cart; // Get the cart from the storage
    let fullData = [];

    // Get the product information from the storage and push it to the fullData array
    datacart.forEach(element => {
        let product = storageModule.getItem("products").find(x => x.productId == element.productId);
        fullData.push({ id: element.productId, sellerID: product.sellerID, title: product.name, description: product.description, price: product.price, discount: product.discount, quantity: element.quantity, image: product.images[0] });
    });

    return fullData;
}

function ChangeItemFromCart(id, key, value) // Change the cart information in the storage
{
    let user = storageModule.getItem("users").find(x => x.id == storageModule.getItem("currentUser").id); // Get the user from the storage
    let usercart = user.cart; // Get the cart from the storage
    let userindex = usercart.findIndex(x => x.productId == id); // Get the index of the product in the cart

    usercart[userindex][key] = value; // Change the product information in the cart
    user.cart = usercart; // Set the cart in the storage
    storageModule.setItem("currentUser", user); // Set the user in the storage
    storageModule.setItem("users", storageModule.getItem("users").filter(x => x.id != user.id).concat(user)); // Set the user in the storage
}

function DeleteItemFromCart(id) // Delete the cart product information in the storage
{
    let user = storageModule.getItem("users").find(x => x.id == storageModule.getItem("currentUser").id); // Get the user from the storage
    let usercart = user.cart; // Get the cart from the storage

    usercart = usercart.filter(x => x.productId != id); // Delete the product from the cart
    user.cart = usercart; // Set the cart in the storage

    storageModule.setItem("currentUser", user); // Set the user in the storage
    storageModule.setItem("users", storageModule.getItem("users").filter(x => x.id != user.id).concat(user)); // Set the user in the storage
}

function reloadWithWarning(changedProducts) // Reload the page and inform the user with the changes
{
    LoadData(); // Load the products information to the cart page

    // inform the user with the changes for each product
    changedProducts.forEach(changedProductId => {
        // get index of chenged product in storage
        let productCard = document.getElementById(changedProductId);

        // changed the HTML to inform user with changes in the product
        productCard.innerHTML += `<div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Quantity changed!</strong> The quantity or price has been changed please review the changes.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;

    });
}

function ProductQuantity(id) // Get the quantity of the product in the cart
{
    return storageModule.getItem("products").find(x => x.productId == id).stock;
}

function Warning(ProductId) // inform the user with the changes
{
    // get index of chenged product in storage
    let productCard = document.getElementById(ProductId);

    // check if the product already has a warning
    if (productCard.innerHTML.includes("alert-warning") == true) { return; }

    // changed the HTML to inform user with changes in the product
    productCard.innerHTML += `<div class="alert alert-warning alert-dismissible fade show m-3" role="alert">
    <strong>Quantity changed!</strong> The quantity has been changed to the maximum quantity available in stock.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
}

function LoadData() // Load the products information to the cart page
{
    // declare variables
    let Data = GetProductsInformation(); // Get the products information from the storage
    let CartList = document.getElementById("cart"); // Get the cart list
    let items = 0; // Total items price in the cart
    let totalAfterShipping = 0; // Total price in the cart after adding the shipping price
    let tax = 0; // Tax
    let totalAfterTax = 0; // Total price in the cart after adding the tax


    CartList.innerHTML = ""; // Clear the cart list

    // Loop through the products information and add it to the cart list
    Data.forEach(Product => {

        items += (Product.price - (Product.price * Product.discount)) * Product.quantity; // Calculate the total items price in the cart
        totalAfterShipping = items + 10; // Calculate the total price in the cart after adding the shipping price
        tax = totalAfterShipping * 0.14; // Calculate the tax
        totalAfterTax = totalAfterShipping * 1.14; // Calculate the total price in the cart after adding the tax

        let price = Math.floor(Product.price-(Product.price * Product.discount)); // Get the price without the decimal part
        let supPrice = ((Product.price - (Product.price * Product.discount)) % 1 * 100).toFixed(); // Get the decimal part of the price

        // Add the product information to the cart list (adding cards)
        CartList.innerHTML += `
        <!-- card  -->
            <div class="card m-auto" id="${Product.id}">
        <!-- Row 1 in card -->
                <div class="row g-0">
                  <!-- Image -->
                    <div class="col-md-3">
                    <img src="${Product.image}" class="img-fluid rounded-start " alt="...">
                    </div>
                    <!-- End of image -->
                    <!-- Information and controls -->
                    <div class="col-md-9 d-flex justify-content-center">
                    <div class="card-body d-flex gap-3 flex-wrap">
                      <!-- Information -->
                      <div class="col-sm-8 flex-grow-1">
                        <h5 class="card-title">${Product.title}</h5>
                        <p class="card-text">${Product.description}</p>
                      </div>
                      <!-- End of information -->
                      <!-- Controls -->
                      <div class="d-flex flex-sm-column col-12 col-sm-3 gap-3 justify-content-evenly">
                        <h1 class ="fw-bold align-self-center" name="price">$${price}</h1>
                        <input type="number" class="form-control" name="quantity" placeholder="Quantity" min= 1 max = 999 value="${Product.quantity}">
                        <button type="button" name="delete" class="btn btn-danger col-5 flex-shrink-1 align-self-center"><i class="fa-solid fa-trash fa-xl" style="color: #ffffff;"></i></button>
                      </div>
                      <!-- End of controls -->
                    </div>
                    <!-- End of Control and information -->
                    </div>
                </div>
            </div>
            <!-- end card -->
        `;

        if (supPrice != 0) // If the price has a decimal part add it to the price
        {
            document.getElementById("price").innerHTML += `<sup>.${supPrice}</sup>`;
        }

        document.getElementById("items").innerText = `$${items.toFixed(2)}`; // Add the total items price to the cart
        document.getElementById("TBT").innerText = `$${totalAfterShipping.toFixed(2)}`; // Add the total price to the cart
        document.getElementById("ETTBC").innerText = `$${tax.toFixed(2)}`; // Add the tax to the cart
        document.getElementById("total").innerText = `$${totalAfterTax.toFixed(2)}`; // Add the total price to the cart

    });
}

// check if price changed or stock is less than quantity in cart before checkout
function PlaceOrder() {
    let changedProducts = []; // array of products that changed
    let cartpricesfromhtml = document.getElementsByName("price"); // get prices from html

    // loop through cart
    cartpricesfromhtml.forEach(element => {
        let product = storageModule.getItem("products").find(x => x.productId == element.closest(".card").id); // get product from storage
        // check if price changed
        if ((product.price - (product.price * product.discount)) != element.innerText.slice(1)) {
            changedProducts.push(element.productId);
        }
        // check if stock is less than quantity in cart
        if (product.stock < element.closest(".card").querySelector("input").value) {
            element.quantity = product.stock;
            changedProducts.push(element.productId);
        }
    }
    );

    // if there are changes reload page with warning
    if (changedProducts.length > 0) {
        reloadWithWarning(changedProducts);
    }
    else {
        CreateOrder(); // Create the order
        EmptyCart(); // Empty the cart
        window.location.href = "Success.html";
        //alert("Your order has been placed successfully");
    }
}

function EstimateShipping() // Estimate the shipping price
{
    let currentDate = new Date(); // Get the current date
    let EstimateDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 2); // Get the date after 7 days
}

function EmptyCart() // Empty the cart
{
    let user = storageModule.getItem("users").find(x => x.id == storageModule.getItem("currentUser").id); // Get the user from the storage
    user.cart = []; // Empty the cart
    storageModule.setItem("currentUser", user); // Set the user in the storage
    storageModule.setItem("users", storageModule.getItem("users").filter(x => x.id != user.id).concat(user)); // Set the user in the storage
}

function LoadShippingAddress() // Load the shipping address
{
    let user = storageModule.getItem("currentUser"); // Get the user from the storage
    let address = user.location; // Get the address from the user
    let ShippingAddress = document.getElementById("ShippingAddress"); // Get the shipping address input

    // Add the address to the shipping address input
    ShippingAddress.innerText = `${user.firstName} ${user.lastName},\n${user.phoneNumber}\n${address.street}, ${address.city}, ${address.state}, ${address.zipCode}`;
}

function CreateOrder() // Create the order
{
    let user = storageModule.getItem("users").find(x => x.id == storageModule.getItem("currentUser").id); // Get the user from the storage
    let usercart = storageModule.getItem("currentUser").cart; // Get the cart from the storage
    let fullusercart = GetProductsInformation(); // Get the products information from the storage
    let orders = storageModule.getItem("orders"); // Get the orders from the storage
    let orderid = IDGenerator.generateID("order"); // Order id
    let sellerid = [];

    // Loop through the cart and get the seller id
    fullusercart.forEach(element => {
        if (sellerid.includes(element.sellerID) == false) // Check if the seller id is already in the array
            sellerid.push(element.sellerID);
    });

    console.log(usercart);
    // add price and quantity to products in cart
    usercart.forEach(element => {
        let Product = storageModule.getItem("products").find(x => x.productId == element.productId); // Get the product from the storage
        element.price = (Product.price - (Product.price * Product.discount));
    });

    // Create the order
    orders.push({ orderID: orderid, sellerID: sellerid, customerID: user.id, products: usercart, placeDate: new Date(), orderStatus: "Pending", deliverDate: new Date() + 2});

    storageModule.setItem("orders", orders); // Set the orders in the storage

    // push order to customer order history
    user.orderHistory.push(orderid);
    storageModule.setItem("currentUser", user); // Set the user in the storage
    storageModule.setItem("users", storageModule.getItem("users").filter(x => x.id != user.id).concat(user)); // Set the user in the storage

    // push order to seller order history
    sellerid.forEach(element => {
        let seller = storageModule.getItem("users").find(x => x.id == element); // Get the seller from the storage
        seller.orderHistory.push(orderid);
        storageModule.setItem("users", storageModule.getItem("users").filter(x => x.id != seller.id).concat(seller)); // Set the seller in the storage
    });
}

//////////////////////////// Event Listeners ////////////////////////////
document.addEventListener("click", function (e) {

    // implement delete button functionality
    if (e.target.name == "delete" || e.target.parentElement.name == "delete") {
        let product = e.target.closest(".card"); // Get the product card

        // remove the product from the cart
        DeleteItemFromCart(product.id);

        LoadData(); // Load the products information to the cart page
    }

    // implement checkout button functionality
    else if (e.target.id == "placeOrder" || e.target.parentElement.id == "placeOrder") {
        PlaceOrder(); // check if price changed or stock is less than quantity in cart before checkout
    }

    // implement save address button functionality
    else if (e.target.id == "saveaddress" || e.target.parentElement.id == "saveaddress") {
        let user = storageModule.getItem("users").find(x => x.id == storageModule.getItem("currentUser").id); // Get the user from the storage
        let address = user.location; // Get the address from the user

        // change the address in the storage
        address.street = document.getElementById("street").value;
        address.city = document.getElementById("city").value;
        address.state = document.getElementById("state").value;
        address.zipCode = document.getElementById("zip").value;
        user.firstName = document.getElementById("firstName").value;
        user.lastName = document.getElementById("lastName").value;
        user.phoneNumber = document.getElementById("phoneNumber").value;

        user.location = address; // Set the address in the user
        storageModule.setItem("currentUser", user); // Set the user in the storage
        storageModule.setItem("users", storageModule.getItem("users").filter(x => x.id != user.id).concat(user)); // Set the user in the storage

        LoadShippingAddress(); // Load the shipping address
    }
});

// prevent pressing - or + in the quantity input
document.getElementById("cart").addEventListener("keydown", function (e) {
    if (e.target.name == "quantity") {
        if (e.key == "-" || e.key == "+") {
            e.preventDefault();
        }
    }
});

// prevent user from entering a number less than 1 or more than 999 and check quantity in stock
document.getElementById("cart").addEventListener("change", function (e) {
    if (e.target.name == "quantity") {
        if (e.target.value < 1) {
            e.target.value = 1;
        }
        else if (e.target.value > 999) {
            e.target.value = 999;
        }

        if (e.target.value > ProductQuantity(e.target.closest(".card").id)) // Check if the quantity of the product in the cart is more than the quantity in the stock
        {
            e.target.value = ProductQuantity(e.target.closest(".card").id);
            Warning(e.target.closest(".card").id); // inform the user with the changes
            return;
        }

        // change the quantity in the storage
        ChangeItemFromCart(e.target.closest(".card").id, "quantity", e.target.value);

        LoadData(); // Load the products information to the cart page
    }
});



//////////////////////////////////////////////////
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            form.classList.add('was-validated')
        }, false)
    })
})()