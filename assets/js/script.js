// Assignment Code
var generateBtn = document.querySelector("#generate");
var chars ="";
var passwordLength = 0;
// sets of characters to be selected by the user
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChar = "!@#$%^&*()";




// Write password to the #password input
function writePassword() {
  // Call Function resetvalues
  resetvalues();
  // Call Function userPrompt
  userPrompt();
  // Declare var password and call function getPassword with password as parameter
  var password = getPassword(password);
  // Write the generated password into textarea html
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  return;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Function to create prompts for the user
function userPrompt() {
  // Ask user length of password
  passwordLength = window.prompt("Enter length of the password(from 8 to 128 characters):");
  // Check if length is between the limits
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Length should be between 8 and 128 characters!");
    userPrompt();
    // break the function
    return;
  }

  // Rest of user prompt
  var lowerCaseUse = window.confirm("Do you want letters in lowercase?");
  var upperCaseUse = window.confirm("Do you want letters in uppercase?");
  var numericUse = window.confirm("Do you want numbers?");
  var charactersUse = window.confirm("Do you want special characters?");

  // concat characters based on users selection
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
}

// function to generate the password with set of characters selected by the user
function getPassword(password) {
  var password ="";
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
  }
  // return value of the generated password
  return password;
}
// reset values to generate another password
function resetvalues() {
  chars ="";
  passwordLength = 0;
  password ="";
}

