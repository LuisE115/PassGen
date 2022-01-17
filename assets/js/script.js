// Assignment Code
var generateBtn = document.querySelector("#generate");
var chars ="";
var passwordLength = 0;
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChar = "!@#$%^&*()";




// Write password to the #password input
function writePassword() {
  
  userPrompt();

  var password = getPassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function userPrompt() {
  passwordLength = window.prompt("Enter length of the password(from 8 to 128 characters):");
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Length should be between 8 and 128 characters!");
    userPrompt();
    return;
  }

  var lowerCaseUse = window.confirm("Do you want letters in lowercase?");
  var upperCaseUse = window.confirm("Do you want letters in uppercase?");
  var numericUse = window.confirm("Do you want numbers?");
  var charactersUse = window.confirm("Do you want special characters?");

  if (lowerCaseUse === true) {
    chars = chars.concat(lowerCase);
  }
  if (upperCaseUse === true) {
    chars = chars.concat(upperCase);
  }
  if (numericUse === true) {
    chars = chars.concat(numbers);
  }
  if (charactersUse === true) {
    chars = chars.concat(specialChar);
  }
  console.log(chars);
}

function getPassword() {
  
}

