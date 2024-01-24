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
    const loginForm = document.querySelector(".login_form");
    const eField = loginForm.querySelector(".email");
    const eInput = eField.querySelector("input");
    const pField = loginForm.querySelector(".password");
    const pInput = pField.querySelector("input");

    const signupForm = document.querySelector(".signup_form");
    const firstNameField = signupForm.querySelector(".fName");
    const lastNameField = signupForm.querySelector(".lName");
    const phoneNumberField = signupForm.querySelector(".phoneNumber");
    const emailFieldSignup = signupForm.querySelector(".email");
    const passwordFieldSignup = signupForm.querySelector(".password");
    const confirmPasswordField = signupForm.querySelector(".confirm_password");
    const streetField = signupForm.querySelector(".street");
    const cityField = signupForm.querySelector(".city");
    const stateField = signupForm.querySelector(".state");
    const countryField = signupForm.querySelector(".country");
    const zipCodeField = signupForm.querySelector(".zipCode");
    const accountTypeField = signupForm.querySelector(".accountType");

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
      if (!emailField.querySelector("input").value.match(pattern)) {
        emailField.classList.add("error");
        showIcon(emailField);
        return false;
      } else {
        emailField.classList.remove("error");
        hideIcon(emailField);
        return true;
      }
    }

    function checkPass(passField) {
      if (passField.querySelector("input").value === "") {
        passField.classList.add("error");
        showIcon(passField);
        return false;
      } else {
        passField.classList.remove("error");
        hideIcon(passField);
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

    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      checkEmail(eField);
      checkPass(pField);

      if (!eField.classList.contains("error") && !pField.classList.contains("error")) {
        console.log("Login Form submitted successfully!");
        window.location.href = "../html/home.html";
      }
    });

    // Event Listeners for Signup Form
    firstNameField.querySelector("input").addEventListener("input", () => {
      checkEmpty(firstNameField);
      hideIcon(firstNameField);
    });
    lastNameField.querySelector("input").addEventListener("input", () => {
      checkEmpty(lastNameField);
      hideIcon(lastNameField);
    });
    phoneNumberField.querySelector("input").addEventListener("input", () => {
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
      checkEmpty(streetField);
      hideIcon(streetField);
    });
    cityField.querySelector("select").addEventListener("change", () => {
      checkSelectRequired(cityField);
    });
    stateField.querySelector("input").addEventListener("input", () => {
      checkEmpty(stateField);
      hideIcon(stateField);
    });
    countryField.querySelector("input").addEventListener("input", () => {
      checkEmpty(countryField);
      hideIcon(countryField);
    });
    zipCodeField.querySelector("input").addEventListener("input", () => {
      checkEmpty(zipCodeField);
      hideIcon(zipCodeField);
    });

    accountTypeField.querySelector("select").addEventListener("change", () => {
      checkSelectRequired(accountTypeField);
    });
    
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
      }else {
        console.log("Please fill all Fields in form");
        console.log(firstNameField.querySelector("input").value);
      }
    });
  });
  
