// Assignment Code
var generateBtn = document.querySelector("#generate");
//global variables
var pwLength = 0;
var special = false;
var upperCase = false;
var lowerCase = false;
var numeric = false;

//function to test if a user entry is a decimal, starts passLength() over if it is
var fraction = function (number) {
  var result = (number - Math.floor(number)) !== 0;
  if (result) {
    window.alert("Don't enter decimals! We can't create a fraction of a character.");
    passLength();
  }
};

//get user's password length, repeat until valid request of 8-128 and check for fractions
var passLength = function () {
  pwLength = window.prompt("How many characters? Choose password length between 8 and 128 characters.");
  if (pwLength < 8 || pwLength > 128) {
    window.alert("Please read directions and choose a valid password length.");
    passLength();
  };
    fraction(pwLength);
  };

// get user criteria for password requirements.
var passCriteria = function () {
  passLength();
  special = window.confirm("Would you like to include special characters?");
  upperCase = window.confirm("Would you like to include upper case letters?");
  lowerCase = window.confirm("Would you like to include lower case letters?");
  numeric = window.confirm("Would you like to include numbers?");
  if (special === false && upperCase === false && lowerCase === false && numeric === false) {
    window.alert("You must choose at least one criteria!  Try again.");
    passCriteria();
  }
};

//apply user criteria to generate a random password


var generatePassword = function () {
  passCriteria();
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
