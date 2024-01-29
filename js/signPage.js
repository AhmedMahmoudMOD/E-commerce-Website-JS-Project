import {storageModule} from "../common/storageModule.js";
import {IDGenerator} from "../common/idclass.js"
let allUsers = storageModule.getItem('users');
let currentUser = storageModule.getItem('currentUser');
let guestCartArr = storageModule.getItem('guest-cart');

    const loginForm = document.querySelector(".login_form");
    const eField = loginForm.querySelector(".email");
    const eInput = eField.querySelector("input");
    const pField = loginForm.querySelector(".password");
    const pInput = pField.querySelector("input");

    const signupForm = document.querySelector(".signup_form");
    var firstNameField = signupForm.querySelector(".fName");
    var lastNameField = signupForm.querySelector(".lName");
    var phoneNumberField = signupForm.querySelector(".phoneNumber");
    var emailFieldSignup = signupForm.querySelector(".email");
    var passwordFieldSignup = signupForm.querySelector(".password");
    var confirmPasswordField = signupForm.querySelector(".confirm_password");
    var streetField = signupForm.querySelector(".street");
    var cityField = signupForm.querySelector(".city");
    var stateField = signupForm.querySelector(".state");
    var countryField = signupForm.querySelector(".country");
    var zipCodeField = signupForm.querySelector(".zipCode");
    var accountTypeField = signupForm.querySelector(".accountType");

const formContainer = document.querySelector(".form_container"),
  signupContainer = document.querySelector(".signup_container"),
  boxContainer = document.querySelector(".box"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login"),
  pwShowHide = document.querySelectorAll(".pw_hide");
  
pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

signupBtn.addEventListener("click", function (e) {
  e.preventDefault();
  boxContainer.classList.add("active");
});

loginBtn.addEventListener("click", function (e) {
  e.preventDefault();
  boxContainer.classList.remove("active");
});

  // Validation
  document.addEventListener("DOMContentLoaded", function () {

    function showIcon(inputField) {
      const icon = inputField.querySelector("i");
      icon.style.display = "inline-block";
    }

    function hideIcon(inputField) {
      const icon = inputField.querySelector("i");
      icon.style.display = "none";
    }

    function checkEmail(emailField) {
      let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      emailField.querySelector("input").value = emailField.querySelector("input").value.trim();
      if (!emailField.querySelector("input").value.match(pattern)) {
        emailField.classList.add("error");
        showIcon(emailField);
        return false;
      } else {
        emailField.classList.remove("error");
        // hideIcon(emailField);
        return true;
      }
    }

    function checkPass(passField) {
      passField.querySelector("input").value = passField.querySelector("input").value.trim();
      if (passField.querySelector("input").value === "") {
        passField.classList.add("error");
        showIcon(passField);
        return false;
      } else {
        passField.classList.remove("error");
        // hideIcon(passField);
        return true;
      }
    }

    function checkEmpty(inputField) {
      const inputElement = inputField.querySelector("input");
      if (inputElement && inputElement.value.trim() === "") {
        showIcon(inputField);
        return false;
      } else {
        hideIcon(inputField);
        return true;
      }
    }

    function checkPasswordMatch() {
      const password1 = passwordFieldSignup.querySelector("input").value;
      const password2 = confirmPasswordField.querySelector("input").value;

      if (password1 !== password2 || password1 === "" || password2 === "") {
        showIcon(confirmPasswordField);
        return false;
      } else {
        hideIcon(confirmPasswordField);
        return true;
      }
    }

    function checkSelectRequired(selectField) {
      const selectElement = selectField.querySelector("select");
      const selectedIndex = selectElement.selectedIndex;
    
      if (selectedIndex === 0) {
        showIcon(selectField);
        return false;
      } else {
        hideIcon(selectField);
        return true;
      }
    }

    // Event Listeners for Login Form
    eInput.addEventListener("input", () => {
      checkEmail(eField);
    });
    pInput.addEventListener("input", () => {
      checkPass(pField);
    });

    // Login Submittion
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      checkEmail(eField);
      checkPass(pField);
    
      if (!eField.classList.contains("error") && !pField.classList.contains("error")) {
        const registeredUser = isRegistered();
    
        if (registeredUser) {
          storageModule.setItem('currentUser', registeredUser);
    
          // Check user type for redirection
          switch (registeredUser.userType) {
            case 'seller':
              window.location.href = "../html/seller copy 3.html";
              break;
            case 'customer':
              window.location.href = "../html/home.html";
              break;
            case 'admin':
              window.location.href = "../html/admin.html";
              break;
            default:
              console.error("Unknown user type");
          }
        }
      }
    });

    function isRegistered(){
      for (let i = 0; i < allUsers.length; i++){
        if(allUsers[i].email == eField.querySelector("input").value && allUsers[i].password == pField.querySelector("input").value){
          eField.classList.remove("error");
          pField.classList.remove("error");
          console.log("Email is Found")
          return allUsers[i] ;
        }else{
          console.log("Email not found")
          eField.classList.add("error");
          pField.classList.add("error");
        }
      }
      return false;
    }

    // Event Listeners for Signup Form
    firstNameField.querySelector("input").addEventListener("input", () => {
      firstNameField.querySelector("input").value = firstNameField.querySelector("input").value.trim();
      checkEmpty(firstNameField);
      hideIcon(firstNameField);
    });
    lastNameField.querySelector("input").addEventListener("input", () => {
      lastNameField.querySelector("input").value = lastNameField.querySelector("input").value.trim();
      checkEmpty(lastNameField);
      hideIcon(lastNameField);
    });
    phoneNumberField.querySelector("input").addEventListener("input", () => {
      phoneNumberField.querySelector("input").value = phoneNumberField.querySelector("input").value.trim();
      checkEmpty(phoneNumberField);
      hideIcon(phoneNumberField);
    });
    emailFieldSignup.querySelector("input").addEventListener("input", () => {
      if(checkEmail(emailFieldSignup)){
        hideIcon(emailFieldSignup);
      }
    });
    passwordFieldSignup.querySelector("input").addEventListener("input", () => {
      checkPass(passwordFieldSignup);
      hideIcon(passwordFieldSignup);
    });
    confirmPasswordField.querySelector("input").addEventListener("input", () => {
      checkPass(confirmPasswordField);
      checkPasswordMatch();
      hideIcon(confirmPasswordField);
    });
    streetField.querySelector("input").addEventListener("input", () => {
      streetField.querySelector("input").value = streetField.querySelector("input").value.trim();
      checkEmpty(streetField);
      hideIcon(streetField);
    });
    cityField.querySelector("select").addEventListener("change", () => {
      checkSelectRequired(cityField);
    });
    stateField.querySelector("input").addEventListener("input", () => {
      stateField.querySelector("input").value = stateField.querySelector("input").value.trim();
      checkEmpty(stateField);
      hideIcon(stateField);
    });
    countryField.querySelector("input").addEventListener("input", () => {
      countryField.querySelector("input").value = countryField.querySelector("input").value.trim();
      checkEmpty(countryField);
      hideIcon(countryField);
    });
    // Event Listener for Zip Code Input Field in Signup Form
    // zipCodeField.querySelector("input").addEventListener("input", () => {
    //   zipCodeField.querySelector("input").value = zipCodeField.querySelector("input").value.trim();
    //   const zipCodeInput = zipCodeField.querySelector("input").value.trim();
    //   const isValidZipCode = /^\d{0,5}$/.test(zipCodeInput);
    //   hideIcon(zipCodeField);
    //   if (!isValidZipCode) {
    //       showIcon(zipCodeField);
    //   }
    // });
    zipCodeField.querySelector("input").addEventListener("input", () => {
      const zipCodeInput = zipCodeField.querySelector("input").value.trim();
      const isValidZipCode = /^\d{0,5}$/.test(zipCodeInput);
      // Trim the input value and update the input field
      zipCodeField.querySelector("input").value = zipCodeInput;
      // Clear any existing icons
      hideIcon(zipCodeField);
      // Check the validity and show the icon if needed
      if (!isValidZipCode) {
        showIcon(zipCodeField);
      }
    });
    

    accountTypeField.querySelector("select").addEventListener("change", () => {
      checkSelectRequired(accountTypeField);
    });
    
    // sign up Submittion
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const validation = [
        checkEmpty(firstNameField),
        checkEmpty(lastNameField),
        checkEmpty(phoneNumberField),
        checkEmpty(emailFieldSignup),
        checkEmail(emailFieldSignup),
        checkPass(passwordFieldSignup),
        checkPass(confirmPasswordField),
        checkPasswordMatch(),
        checkEmpty(streetField),
        checkEmpty(stateField),
        checkEmpty(countryField),
        checkEmpty(zipCodeField),
        checkSelectRequired(cityField),
        checkSelectRequired(accountTypeField),
        ];

      if (validation.every((isValid) => isValid)) {
        console.log("Signup Form submitted successfully!");
        addNewUser ();
        alert("Signed Up Successfully")
        location.reload();
      }else {
        alert("Please fill all Fields in form")
        // console.log("Please fill all Fields in form");
        // console.log(firstNameField.querySelector("input").value);
      }
    });
  });
  
  // Add New Users To Local Storage 
  function addNewUser (){
    let newUser = {};
    if(accountTypeField.querySelector("select").value=='customer'){
      newUser = {
      id: IDGenerator.generateUserId() ,
    userType: accountTypeField.querySelector("select").value,
    userName: firstNameField.querySelector("input").value + lastNameField.querySelector("input").value,
    email: emailFieldSignup.querySelector("input").value,
    password: passwordFieldSignup.querySelector("input").value,
    firstName: firstNameField.querySelector("input").value,
    lastName: lastNameField.querySelector("input").value,
    phoneNumber: phoneNumberField.querySelector("input").value,
    location: {
      street: streetField.querySelector("input").value,
      city: cityField.querySelector("select").value,
      state: stateField.querySelector("input").value,
      country: countryField.querySelector("input").value,
      zipCode: zipCodeField.querySelector("input").value,
    },
    orderHistory: [],
    wishList: [],
    cart: guestCartArr,
    }
  }else if (accountTypeField.querySelector("select").value=='seller'){

     newUser = {
      id: IDGenerator.generateUserId() ,
    userType: accountTypeField.querySelector("select").value,
    userName: firstNameField.querySelector("input").value + lastNameField.querySelector("input").value,
    email: emailFieldSignup.querySelector("input").value,
    password: passwordFieldSignup.querySelector("input").value,
    firstName: firstNameField.querySelector("input").value,
    lastName: lastNameField.querySelector("input").value,
    phoneNumber: phoneNumberField.querySelector("input").value,
    location: {
      street: streetField.querySelector("input").value,
      city: cityField.querySelector("select").value,
      state: stateField.querySelector("input").value,
      country: countryField.querySelector("input").value,
      zipCode: zipCodeField.querySelector("input").value,
    },
    orders: [],
    wishList: [],
    }
  }

    allUsers.push(newUser);
    storageModule.setItem('users',allUsers);
  }

