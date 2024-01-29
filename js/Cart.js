import { storageModule } from "../common/storageModule.js"

function CheckIfUserIsCustomer() // Check if the user is a customer or not
{
    if (storageModule.getItem("currentUser") == null || Object.keys(storageModule.getItem("currentUser")).length == 0) // If the user is not logged in then redirect him to the login page
    {return;}

    if (storageModule.getItem("currentUser").userType != "customer") // If the user is a customer then get the cart from the storage
    {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You must login as a customer first",
        }).then(() => {
            window.location.href = "../html/signPage.html";
        });
    }

}

function checkIfCartIsEmpty() // Check if the cart is empty or not
{
    if (GetProductFromCart() == 0) // If the cart is empty then redirect the user to the home page
    {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Your cart is empty",
        }).then(() => {
            window.location.href = "../html/home.html";
        });
    }
}

function GetProductFromCart() // Get the product from the cart in the storage
{
    if (storageModule.getItem("currentUser") == null || Object.keys(storageModule.getItem("currentUser")).length == 0) // If the user is not logged in then redirect him to the login page
    {
        return storageModule.getItem("guest-cart"); // Get the cart from the storage
    }
    else // If the user is logged in then check if he is a customer or not
    {
        return storageModule.getItem("currentUser").cart; // Get the cart from the storage
    }
}

function GetProductsInformation() // Get each product information from cart and return it in an array of objects with the product information
{
    let datacart = GetProductFromCart();

    let fullData = [];

    // Get the product information from the storage and push it to the fullData array
    datacart.forEach(element => {
        let product = storageModule.getItem("products").find(x => x.productId == element.productId);
        fullData.push({ id: element.productId, title: product.name, description: product.description, price: product.price, discount: product.discount, quantity: element.quantity, image: product.images[0] });
    });

    return fullData;
}

function ChangeItemFromCart(id, key, value) // Change the cart information in the storage
{
    let cart = GetProductFromCart(); // Get the cart from the storage
    let index = cart.findIndex(x => x.productId == id); // Get the index of the product in the cart

    if (storageModule.getItem("currentUser") == null) // If the user is not logged in then redirect him to the login page
    {
        cart[index][key] = value; // Change the product information in the cart
        storageModule.setItem("guest-cart", cart); // Set the cart in the storage
    }
    else {
        let user = storageModule.getItem("users").find(x => x.id == storageModule.getItem("currentUser").id); // Get the user from the storage
        cart[index][key] = value; // Change the product information in the cart
        user.cart = cart; // Set the cart in the storage
        storageModule.setItem("currentUser", user); // Set the user in the storage
        storageModule.setItem("users", storageModule.getItem("users").filter(x => x.id != user.id).concat(user)); // Set the user in the storage
    }
}

function DeleteItemFromCart(id) // Delete the cart product information in the storage
{
    let cart = GetProductFromCart(); // Get the cart from the storage
    let index = cart.findIndex(x => x.productId == id); // Get the index of the product in the cart

    if (storageModule.getItem("currentUser") == null || Object.keys(storageModule.getItem("currentUser")).length == 0) // If the user is not logged in then redirect him to the login page
    {
        cart = cart.filter(x => x.productId != id); // Delete the product from the cart
        storageModule.setItem("guest-cart", cart); // Set the cart in the storage
    }
    else {
        let user = storageModule.getItem("users").find(x => x.id == storageModule.getItem("currentUser").id); // Get the user from the storage

        cart = cart.filter(x => x.productId != id); // Delete the product from the cart
        user.cart = cart; // Set the cart in the storage

        storageModule.setItem("currentUser", user); // Set the user in the storage
        storageModule.setItem("users", storageModule.getItem("users").filter(x => x.id != user.id).concat(user)); // Set the user in the storage
    }
}

function reloadWithWarning(changedProducts) // Reload the page and inform the user with the changes
{
    LoadData(); // Load the products information to the cart page

    // inform the user with the changes for each product
    changedProducts.forEach(changedProductId => {
        // get index of chenged product in storage
        let productCard = document.getElementById(changedProductId);

        // changed the HTML to inform user with changes in the product
        productCard.innerHTML += `<div class="alert alert-warning alert-dismissible fade show m-3" role="alert">
        <strong>Quantity changed!</strong> The quantity has been changed to the maximum quantity available in stock.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;

    });
}

function LoadData() // Load the products information to the cart page
{
    // declare variables
    let Data = GetProductsInformation(); // Get the products information from the storage
    let CartList = document.getElementById("cart"); // Get the cart list
    let items = 0; // Total items price in the cart
    let total = 0; // Total price in the cart after adding the shipping price

    CartList.innerHTML = ""; // Clear the cart list

    // Loop through the products information and add it to the cart list
    Data.forEach(Product => {

        items += (Product.price - (Product.price * Product.discount)) * Product.quantity; // Calculate the total items price in the cart
        total += (Product.price - (Product.price * Product.discount)) * Product.quantity; // Calculate the total price in the cart after adding the shipping price

        let price = Math.floor(Product.price - (Product.price * Product.discount)); // Get the price without the decimal part
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

        document.getElementById("cart-items").innerText = `$${items.toFixed(2)}`; // Add the total items price to the cart
        document.getElementById("cart-total").innerText = `$${total.toFixed(2)}`; // Add the total price to the cart
    });
}

/////////////////////////// Main ///////////////////////////

CheckIfUserIsCustomer(); // Check if the user is a customer or not
checkIfCartIsEmpty(); // Check if the cart is empty or not
LoadData(); // Load the products information to the cart page


document.addEventListener("click", function (e) {

    // implement delete button functionality
    if (e.target.name == "delete" || e.target.parentElement.name == "delete") {
        let product = e.target.closest(".card"); // Get the product card

        Swal.fire({ // Ask the user if he is sure about deleting the product
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                // remove the product from the cart
                DeleteItemFromCart(product.id);
                LoadData(); // Load the products information to the cart page

                Swal.fire({ // Notify the user that the product has been deleted
                    title: "Deleted!",
                    text: "Your item has been deleted.",
                    icon: "success"
                });
            }
        });
    }

    // implement checkout button functionality
    if (e.target.id == "checkout" || e.target.parentElement.id == "checkout") {
        // check if the user is logged in or not
        if (storageModule.getItem("currentUser") == null || Object.keys(storageModule.getItem("currentUser")).length == 0){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You must login first",
            }).then(() => {
                window.location.href = "../html/signPage.html";
            });
        }
        else {
            // check if the user is a customer or not
            // check if the cart is empty or not
            if (GetProductFromCart() == 0) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Your cart is empty",
                }).then(() => {
                    window.location.href = "../html/signPage.html";
                });
            }
            else {
                // check if the products quantity is available or not
                let cart = GetProductFromCart(); // Get the cart from the storage
                let changedProducts = []; // array of products that has quantity more than the stock

                cart.forEach(product => {
                    let productInfo = storageModule.getItem("products").find(x => x.productId == product.productId); // Get the product information from the storage

                    if (product.quantity > productInfo.stock) // checl if the quantity is more than the stock
                    {
                        // chenge the quantity to max quantity and notify the user about the change
                        ChangeItemFromCart(product.productId, "quantity", productInfo.stock);
                        changedProducts.push(product.productId);
                    }
                })

                if (changedProducts.length > 0) // if there are changes then reload the page and infor user with changes
                {
                    reloadWithWarning(changedProducts);
                    return;
                }

                // check if the user has a saved address or not
                if (storageModule.getItem("currentUser").location == null) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "You must add an address first",
                    }).then(() => {
                        window.location.href = "Address.html";
                    });
                }
                else {
                    // check if the user has a saved phone number or not
                    if (storageModule.getItem("currentUser").phoneNumber == null) {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "You must add a phone number first",
                        }).then(() => {
                            window.location.href = "PhoneNumber.html";
                        });
                    }
                    else {
                        window.location.href = "Checkout.html"; // redirect the user to the checkout page
                    }
                }
            }
        }
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

// prevent user from entering a number less than 1 or more than 999
document.getElementById("cart").addEventListener("change", function (e) {
    if (e.target.name == "quantity") {
        if (e.target.value < 1) {
            e.target.value = 1;
        }
        else if (e.target.value > 999) {
            e.target.value = 999;
        }

        // change the quantity in the storage
        ChangeItemFromCart(e.target.closest(".card").id, "quantity", e.target.value);

        LoadData(); // Load the products information to the cart page
    }
});

// Nav Bar //

const storedCurrentUser = storageModule.getItem('currentUser');
const navUsernameElement = document.getElementById('userProfileDiv');

// Check if currentUser exists and has a username property
if (storedCurrentUser && storedCurrentUser.userName) {
    // Access the username and update the navUsername
    
    const userNameText = navUsernameElement.querySelectorAll("a")[0]
    if (storedCurrentUser) {
        userNameText.textContent = storedCurrentUser.userName;
    }
} else {
    // case where the currentUser or username is not available
    // Create a login button and redirect to Login page
    navUsernameElement.style.display='none';
    const loginButton = document.createElement('button');
    loginButton.classList.add('btn','btn-primary','me-4');
    loginButton.style.width = '100px';
    loginButton.textContent = 'Log In';
    navbar.appendChild(loginButton);
    loginButton.addEventListener('click', function() {
        window.location.href = '../html/signPage.html';
    })
}

const logoutButton = document.getElementById('logoutBtn');
if (logoutButton) {
    logoutButton.addEventListener('click', function() {
        // Clear the currentUser object in local storage
        localStorage.removeItem('currentUser');
        // Redirect to the login page
        // window.location.href = '../html/signPage.html';
        location.reload()
    });
}