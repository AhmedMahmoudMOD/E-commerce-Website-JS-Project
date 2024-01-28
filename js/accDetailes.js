// Assuming you have a storageModule defined as mentioned before
import { storageModule } from "../common/storageModule.js";

// Function to initialize user data
function initializeUserData() {
    // Retrieve the current user from local storage
    const currentUser = storageModule.getItem('currentUser');

    // Check if a user is logged in
    if (currentUser) {
        // Display user data in HTML fields
        document.getElementById('userId').textContent = currentUser.id || '';
        document.getElementById('userType').textContent = currentUser.userType || '';
        document.getElementById('userName').textContent = currentUser.userName || '';
        document.getElementById('firstName').textContent = currentUser.firstName || '';
        document.getElementById('lastName').textContent = currentUser.lastName || '';
        document.getElementById('userEmail').textContent = currentUser.email || '';
        document.getElementById('userPass').textContent = currentUser.password || '';
        document.getElementById('userStreet').textContent = currentUser.location.street || '';
        document.getElementById('userCity').textContent = currentUser.location.city || '';
        document.getElementById('userState').textContent = currentUser.location.state || '';
        document.getElementById('userCountry').textContent = currentUser.location.country || '';
        document.getElementById('userZipCode').textContent = currentUser.location.zipCode || '';

        // Attach event listeners to the "Edit" buttons
        document.getElementById('editUserId').addEventListener('click', () => editField('id'));
        document.getElementById('editUserType').addEventListener('click', () => editField('userType'));
        document.getElementById('editUserName').addEventListener('click', () => editField('userName'));
        document.getElementById('editFirstName').addEventListener('click', () => editField('firstName'));
        document.getElementById('editLastName').addEventListener('click', () => editField('lastName'));
        document.getElementById('editUserEmail').addEventListener('click', () => editField('userEmail'));
        document.getElementById('editUserPass').addEventListener('click', () => editField('userPass'));
        document.getElementById('editUserStreet').addEventListener('click', () => editField('userStreet'));
        document.getElementById('editUserCity').addEventListener('click', () => editField('userCity'));
        document.getElementById('editUserState').addEventListener('click', () => editField('userState'));
        document.getElementById('editUserCountry').addEventListener('click', () => editField('userCountry'));
        document.getElementById('editUserZipCode').addEventListener('click', () => editField('userZipCode'));

        // Attach event listener to the "Save Changes" button
        document.getElementById('saveChanges').addEventListener('click', saveChanges);
    } else {
        alert('User not logged in.'); // Handle the case where no user is logged in
    }
}

// Function to handle editing a specific field
function editField(fieldName) {
    // Get all elements with the data-editable attribute
    const editableElements = document.querySelectorAll(`[data-editable="${fieldName}"]`);

    // Check if there are editable elements
    if (editableElements.length > 0) {
        editableElements.forEach(element => {
            const fieldValue = element.textContent;

            // Create an input field for editing
            const inputField = document.createElement('input');
            inputField.value = fieldValue;

            // Replace the element with the input field
            element.replaceWith(inputField);

            // Add an event listener to save the edited value when the input field loses focus
            inputField.addEventListener('blur', () => saveEditedValue(fieldName, inputField, element));
        });
    } else {
        console.error(`No editable elements found for field: ${fieldName}`);
    }
}

// Function to save the edited value
function saveEditedValue(fieldName, inputField, originalElement) {
    const editedValue = inputField.value;

    // Update the displayed user details
    originalElement.textContent = editedValue;

    // Update the user object in local storage
    const currentUser = storageModule.getItem('currentUser');
    currentUser[fieldName] = editedValue;
    storageModule.setItem('currentUser', currentUser);

    // Update the user data in the array of users
    updateUserInArray(currentUser);
}

// Function to update the user in the array of users
function updateUserInArray(updatedUser) {
    let users = storageModule.getItem('users') || [];

    // Find the index of the current user in the array
    const userIndex = users.findIndex(user => user.id === updatedUser.id && user.userType === updatedUser.userType);

    if (userIndex !== -1) {
        // Update the user object in the array
        users[userIndex] = updatedUser;

        // Update the array of users in local storage
        storageModule.setItem('users', users);

        alert('Changes saved successfully!');
        location.reload()
    } else {
        alert('User not found in the array of users.');
    }
}


// Call the function to initialize user data when the script loads
initializeUserData();