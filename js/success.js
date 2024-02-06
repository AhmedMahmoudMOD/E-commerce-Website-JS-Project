import { storageModule } from "../common/storageModule.js"

        // Retrieve the currentUser from local storage
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
        navUsernameElement.style.display = 'none';
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
        logoutButton.addEventListener('click', function () {
            // Clear the currentUser object in local storage
            localStorage.removeItem('currentUser');
            // Redirect to the login page
            // window.location.href = '../html/signPage.html';
            location.reload()
        });
}

let currentUserObj = storageModule.getItem('currentUser');
if (currentUserObj?.userType === "customer") {
    dashLink.href = "../html/customer.html"
} else if (currentUserObj?.userType === "seller") {
    dashLink.href = "../html/seller.html"
} else if (currentUserObj?.userType === "admin") {
    dashLink.href = "../html/admin.html"
}
