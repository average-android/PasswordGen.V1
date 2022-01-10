// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordstart = '';

var passwordlength = prompt("How long would you like your password to be?")

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var numbers = "0123456789"
var specials = "!@#$%^&*()-_=+?/<>,."

function generatepassword() {

confirm("Press ok if you want Uppercase characters in your password")

  
for (let i = 0; i < passwordlength; i++ ) {
  password +=
    passwordstart[Math.floor(Math.random() * passwordstart.length)];
}
return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


 
 
  

 

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

