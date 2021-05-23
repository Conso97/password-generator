// Assignment Code
var generateBtn = document.querySelector("#generate");

//Declare global data 

// Declare lowercase array
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// Declare uppercase array
var uppercase = lowercase.map(function(x){ return x.toUpperCase(); });
//Declare special array
var special = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">",
"?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

//Declare numbers array 
var numbers = ["0","1","2","3","4","5","6","7","8","9"]; 


function generatePassword() {

  // Ask the user how long the password will be and store their answer in a variable 'passwordlength'
  var passwordLength = prompt("How many characters would you like your password to contain");


  // Validate the 'passwordlength' variable to verify that it was between 8 and 128 
  if (passwordLength < 8) {
    alert("Password length must be at least 8 characters."); 
    return "";
  } else if (passwordLength > 128) {
    alert("Password length must be at less than 128 characters."); 
    return "";
  }
  

  // Ask user to make choice on if they want to include each type of character 

  var useSpecialCharacters = confirm("Click OK to confirm including special characters.");
  var useUpperCase = confirm("Click OK to confirm including uppercase characters.");
  var useLowercase =  confirm("Click OK to confirm including lowercase characters.");
  var useNumeric =  confirm("Click OK to confirm including numeric characters.");

  // Generating the password
  optionsArray = [];
  if (useSpecialCharacters) {
    optionsArray.push(special);
  }
  if (useUpperCase) {
    optionsArray.push(uppercase);
  }
  if (useLowercase) {
    optionsArray.push(lowercase);
  }
  if (useNumeric) {
    optionsArray.push(numbers);
  }
  password = "";
  for (var i = 0; i < passwordLength; i++) {
    // randomly select the type of character 
    var optionType = optionsArray[Math.floor(Math.random() * optionsArray.length)];
    // randomly select the specific character
    password += optionType[Math.floor(Math.random() * optionType.length)];
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
