// Assignment Code
var generateBtn = document.querySelector("#generate");
var type = {
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numeric: "0123456789",
  specialCharaters: "!@#$%^&*()"
};



// Write password to the #password input
function writePassword() {
  
  generate();

  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  // passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generate() {
  var passwordLength = window.prompt("Enter length of the password(from 8 to 128 characters):");
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Length should be between 8 and 128 characters!");
    generate();
  }
  var lowerCaseUse = window.confirm("Do you want letters in lowercase?");
  console.log(lowerCaseUse);
  var upperCaseUse = window.confirm("Do you want letters in uppercase?");
  var numericUse = window.confirm("Do you want numbers?");
  var charactersUse = window.confirm("Do you want special characters?");


}
