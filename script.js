// Assignment Code
var generateBtn = document.querySelector("#generate");

//Declare global data 

//list of lowercase letters 
//list of uppercase letters 
//list of special letters 
//list of numbers letters 

// Declare lowercase array
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// Declare uppercase array
var uppercase = lowercase.map(function(x){ return x.toUpperCase(); });
//Declare special array

//Declare numbers array 
var numbers = new Array(128-8); // create an empty array with length 128
for(var i = 8; i <= n128; i++){
  numbers[i] = i;
}

function generatePassword() {

  // Ask the user how long the password will be and store their answer in a variable 'passwordlength'

  // Validate the 'passwordlength' variable to verify that it was between 8 and 128 

  // Ask user to make choice on if they want to include each type of character 


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
