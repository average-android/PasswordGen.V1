// Assignment Code
var generateBtn = document.querySelector("#generate");

/*var passwordstart = '';*/



/*var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var numbers = "0123456789"
var specials = "!@#$%^&*()-_=+?/<>,."*/

function generatePassword() {

  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var specials = "!@#$%^&*()-_=+?/<>,.";
  var passwordstart = '';
  var password = "";
 
  var uppercaseConfirm = confirm("Press OK if you want Uppercase characters in your password.");

  if (uppercaseConfirm) {passwordstart += uppercase}

  var lowercaseConfirm = confirm("Press OK if you want Lowercase characters.");

  if (lowercaseConfirm) {passwordstart += lowercase}

  var numbersConfirm = confirm("Press OK if you want numbers in your password.");

  if (numbersConfirm) {passwordstart += numbers}

  var specialsConfirm = confirm("Press OK if you'd like special characters in your password.");

  if (!uppercaseConfirm && !lowercaseConfirm && !numbersConfirm && !symbolsConfirm) {return}

  if (specialsConfirm) {passwordstart += specials}

  var passwordlength = prompt("How long would you like your password to be?");

  if (passwordlength < 8 || passwordlength > 128) {alert("Please choose a number between 8 and 128.");return}
  
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

