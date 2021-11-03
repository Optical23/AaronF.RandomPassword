// Assignment code here


function generatePassword(){
  var passWordLength = window.prompt("Select a length between 8 and 128 characters for your password.");
  if(passWordLength > 8 && passWordLength < 128){
    var includeLowerCase = window.confirm("Would you like to include lowercase characters?");
    var includeUpperCase = window.confirm("Would you like to include uppercase characters?");
    var includeNumerials = window.confirm("Would you like to include numeric characters?");
    var includeSpecial = window.confirm("Would you like to include special characters?");
    if(!includeLowerCase && !includeUpperCase && !includeNumerials && !includeSpecial){
      window.alert("You did not select any character sets to use in the password, Please try again.")
      return;
    }
  }else{
    window.alert("You did not select a password length between 8 and 128 characters. Plese try again.");
  }


}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
