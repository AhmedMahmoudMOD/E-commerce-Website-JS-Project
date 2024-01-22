const formContainer = document.querySelector(".form_container"),
  signupContainer = document.querySelector(".signup_container"),
  boxContainer = document.querySelector(".box")
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
  // Signup
  const signupForm = document.querySelector(".signup_form");
  const firstNameField = signupForm.querySelector(".fname");
  const laseNameField = signupForm.querySelector(".lName")

// utilities 
  function checkEmail(emailField) {
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailField.querySelector("input").value.match(pattern)) {
      emailField.classList.add("error");
    } else {
      emailField.classList.remove("error");
    }
  }
  
  function checkPass(passField) {
    if (passField.querySelector("input").value === "") {
      passField.classList.add("error");
    } else {
      passField.classList.remove("error");
    }
  }

  eInput.addEventListener("input", ()=> checkEmail(eField)); 
  pInput.addEventListener("input", ()=> checkPass(pField)); 

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); 
    checkEmail(eField);
    checkPass(pField); 

    if (!eField.classList.contains("error") && !pField.classList.contains("error")) {
      console.log("Form submitted successfully!");
      window.location.href = "../html/home.html";
    }
  });



});