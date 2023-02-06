let login =document.getElementById("login");
const form = document.querySelector("form");
eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");
let signUp = document.getElementById("signUp");
let errorLoginPart = document.getElementById("errorLoginPart");
let containerUsers;
let errorEmail = document.getElementById("errorEmail");
let errorPassword = document.getElementById("errorPassword");
let tryAgain = document.getElementById("tryAgain");
let alreadyExist = document.getElementById("alreadyExist");
localStorage.getItem("users") != null
  ? (containerUsers = JSON.parse(localStorage.getItem("users")))
  : (containerUsers = []);
form.onsubmit = (e)=>{
  e.preventDefault(); 

  (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();
  (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();

  setTimeout(()=>{ //remove shake class after 500ms
    eField.classList.remove("shake");
    pField.classList.remove("shake");
  }, 500);

  eInput.onkeyup = ()=>{checkEmail();}
  pInput.onkeyup = ()=>{checkPass();} 

//   function checkEmail(){ 
//     let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 
//     if(!eInput.value.match(pattern)){ 
//       eField.classList.add("error");
//       eField.classList.remove("valid");
//       let errorTxt = eField.querySelector(".error-txt");k
//       (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";
//     }else{ 
//       eField.classList.remove("error");
//       eField.classList.add("valid");
//     }
//   }
function validationEmail() {
    let rejexEmail = /@([a-z]|[A-Z]){5,10}(\.com)$/;
    if (rejexEmail.test(emailValue.value) == true && emailValue.value != "") {
      return true;
    } else {
      return false;
    }
  } 
  ////////////////////////////////////////////////////
  function validationPasswword() {
    let rejexPassword = /^.{5,15}$/;
    if (
      rejexPassword.test(passwordValue.value) == true &&
      passwordValue.value != ""
    ) {
      return true;
    } else {
      return false;
    }
  }
////////////////////////////////////////////////////////////
  function validationAll() {
    if (
      validationPasswword() == true &&   validationEmail() == true)
      {
      let users = {
        name: nameValue.value,
        email: emailValue.value,
        passwword: passwordValue.value,
      };
      containerUsers.push(users);
      localStorage.setItem("users", JSON.stringify(containerUsers)); ///////////// ERROR
    }
  }
//   function checkPass(){ //checkPass function
//     if(pInput.value == ""){ 
//       pField.classList.add("error");
//       pField.classList.remove("valid");
//     }else{ 
//       pField.classList.remove("error");
//       pField.classList.add("valid");
//     }
//   }

 
  if(!eField.classList.contains("error") && !pField.classList.contains("error")){
    window.location.href = form.getAttribute("action");
  }
}
currentName = localStorage.getItem("user");

if (login != null) {
  login.addEventListener("click", function () {
    if (emailValueLogin.value == "" || passwordValueLogin.value == "") {
      // console.log("sasasasasasasasasasasasasa");

      errorLoginAll.classList.add("d-block");
      errorLoginAll.classList.remove("d-none");

      errorLoginPart.classList.remove("d-block");
      errorLoginPart.classList.add("d-none");
    } else if (correctAll() == true) {
      login.href = "welcom.html";
    } else if (correctAll() != true) {
      // console.log("helsaddsadsadsadsadsasdasdalo");

      errorLoginPart.classList.replace("d-none", "d-block");

      errorLoginAll.classList.remove("d-block");
      errorLoginAll.classList.add("d-none");
    } else if (checkValidation() == undefined) {
      errorLoginAll.classList.replace("d-none", "d-block");
      errorLoginPart.classList.replace("d-block", "d-none");
    } else {
      errorLoginAll.classList.replace("d-none", "d-block");
      errorLoginPart.classList.replace("d-block", "d-none");
    }
  });
}
function welcome() {
  userName.innerHTML = "Welcome " + currentName;
}
function correctAll() {
    for (let i = 0; i < containerUsers.length; i++) {
      if (
        containerUsers[i].email == emailValueLogin.value &&
        containerUsers[i].passwword == passwordValueLogin.value
      ) {
        localStorage.setItem("user", containerUsers[i].name);
  
        return true;
      }
      // console.log("hello");
    }
  }
  function checkValidation() {
    if (emailValueLogin.value == "" && passwordValueLogin.value == "") {
      return undefined;
    }
  }
  if (subBtn != null) {
    subBtn.addEventListener("click", callUserData);
  }




























  function callUserData() {
    // console.log(checkNameAndEmail());
    // console.log("Hello");
  
    if (
    //   validationName() &&
      validationEmail() &&
      validationPasswword() 
    //   checkNameAndEmail() != true
    ) {
      validationAll();
    //   success.classList.remove("d-none");
    //   success.classList.add("d-block");
  
      // alreadyExist.classList.replace("d-none","d-block")
  
    //   btnSignIn.classList.replace("d-none", "d-block");
      printValidEmail();
      printValidPassword();
  
    //   alreadyExist.classList.remove("d-block");
    //   alreadyExist.classList.add("d-none");
  
      
      errorEmail.classList.replace("d-block", "d-none");
  
      errorPassword.classList.replace("d-block", "d-none");
  
      tryAgain.classList.replace("d-block", "d-none");
    // } else if (checkNameAndEmail() == true) {
    //   alreadyExist.classList.remove("d-none");
    //   alreadyExist.classList.add("d-block");
    //   success.classList.remove("d-block");
    //   success.classList.add("d-none");
  
    //   btnSignIn.classList.replace("d-block", "d-none");
  
    //   nameValue.classList.remove("is-valid");
  
    //   emailValue.classList.remove("is-valid");
  
    //   passwordValue.classList.remove("is-valid");
    // }
  
    if (
      validationEmail() == false ||
      validationPasswword() == false
    ) {
      tryAgain.classList.remove("d-none");
  
      tryAgain.classList.add("d-block");
    }
  
    if (
      validationEmail() == false &&
      validationPasswword() == false
    ) {
      tryAgain.classList.replace("d-none", "d-block");
      printInvalidEmail();
      printInvalidPassword();
    }
  
  
    if (validationEmail() != true) {
      printInvalidEmail();
    } else {
      printValidEmail();
    }
  
    if (validationPasswword() != true) {
      printInvalidPassword();
    } else {
      printValidPassword();
    }
  }







  function printValidEmail() {
    emailValue.classList.add("is-valid");
    emailValue.classList.remove("is-invalid");
    emailValue.classList.replace("d-block", "d-none");
  
    errorEmail.classList.remove("d-block");
    errorEmail.classList.add("d-none");
  }
  function printInvalidEmail() {
    emailValue.classList.add("is-invalid");
    emailValue.classList.remove("is-valid");
    emailValue.classList.replace("d-none", "d-block");
  
    errorEmail.classList.remove("d-none");
    errorEmail.classList.add("d-block");
  
    // tryAgain.classList.replace("d-none", "d-block");
  }



  }



  function printValidPassword() {
    passwordValue.classList.add("is-valid");
    passwordValue.classList.remove("is-invalid");
    passwordValue.classList.replace("d-block", "d-none");
  
    errorPassword.classList.remove("d-block");
    errorPassword.classList.add("d-none");
  }
  
  function printInvalidPassword() {
    passwordValue.classList.remove("is-valid");
    passwordValue.classList.add("is-invalid");
    passwordValue.classList.replace("d-none", "d-block");
  
    errorPassword.classList.remove("d-none");
    errorPassword.classList.add("d-block");
  
    // tryAgain.classList.replace("d-none", "d-block");
  }
  