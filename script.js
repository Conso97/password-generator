// Assignment Code
var generateBtn = document.querySelector("#generate");

//Declare global data 

// Declare lowercase array
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// Declare uppercase array
var uppercase = lowercase.map(function(x){ return x.toUpperCase(); });
//Declare special array

//Declare numbers array 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
