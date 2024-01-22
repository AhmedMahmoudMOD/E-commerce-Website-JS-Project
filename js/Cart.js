import { users, products, cart } from "../common/staticdata.js"
import { storageModule } from "../common/storageModule.js"

storageModule.setItem("users", users);
storageModule.setItem("products", products);
storageModule.setItem("cart", cart);

function GetProductsInformation() // Get each product information from cart and return it in an array of objects with the product information
{
    let datacart = storageModule.getItem("cart"); // Get the cart from the storage
    let fullData = [];

    // Get the product information from the storage and push it to the fullData array
    datacart.forEach(element => {
        let product = storageModule.getItem("products").find(x => x.productId == element.productId);
        fullData.push({ id: element.productId, title: product.name, description: product.description, price: product.price, quantity: element.quantity, image: product.images[0] });
    });

    return fullData;
}

function ChangeItemFromCart(id, key, value) // Change the cart information in the storage
{
    let cart = storageModule.getItem("cart"); // Get the cart from the storage
    let index = cart.findIndex(x => x.productId == id); // Get the index of the product in the cart

    cart[index][key] = value; // Change the product information in the cart
    storageModule.setItem("cart", cart); // Set the cart in the storage
}

function DeleteItemFromCart(id) // Delete the cart product information in the storage
{
    let cart = storageModule.getItem("cart"); // Get the cart from the storage
    cart = cart.filter(x => x.productId != id); // Delete the product from the cart
    storageModule.setItem("cart", cart); // Set the cart in the storage
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

        items += Product.price * Product.quantity; // Calculate the total items price in the cart
        total += Product.price * Product.quantity; // Calculate the total price in the cart after adding the shipping price

        let price = Math.floor(Product.price); // Get the price without the decimal part
        let supPrice = (Product.price % 1 * 100).toFixed(); // Get the decimal part of the price

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

LoadData(); // Load the products information to the cart page


document.addEventListener("click", function (e) {

    // implement delete button functionality
    if (e.target.name == "delete" || e.target.parentElement.name == "delete") {
        let product = e.target.closest(".card"); // Get the product card

        // remove the product from the cart
        DeleteItemFromCart(product.id);

        LoadData(); // Load the products information to the cart page
    }

    // implement checkout button functionality
    if (e.target.id == "checkout") {
        // check if the user is logged in or not
        if (/*storageModule.getItem("currentUser") == null*/false) {
            alert("You must login first");
        }
        else {
            // check if the user is a customer or not
            if (/*storageModule.getItem("currentUser").UserType == "customer"*/true) {
                // check if the cart is empty or not
                if (storageModule.getItem("cart").length == 0) {
                    alert("Your cart is empty");
                }
                else {
                    // check if the products quantity is available or not
                    let cart = storageModule.getItem("cart"); // Get the cart from the storage
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
                    if (/*storageModule.getItem("currentUser").Location == null*/false) {
                        alert("You must add an address first");
                    }
                    else {
                        // check if the user has a saved phone number or not
                        if (/*storageModule.getItem("currentUser").PhoneNumber == null*/false) {
                            alert("You must add a phone number first");
                        }
                        else {
                            alert("Your order has been placed"); ///////////////////////////////////
                        }
                    }
                }
            }
            else {
                alert("You must login as a customer first");
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