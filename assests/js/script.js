// Assignment code here\
//Arrays of the different password criteria
var lowerCaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numerialsArray = ["0","1","2","3","4","5","6","7","8","9"];
var specialArray = [" ","!",'"',"#","$","%","&","'","(",")","*","+","-",".","/",":",";","<","=","/",">","?","@","[","\\","]","^","_","`","{","|","}","~"];
//This function gets the criteria for the password
function generatePassword(){
  var passWordLength = window.prompt("Select a length between 8 and 128 characters for your password.");
  if(passWordLength >= 8 && passWordLength <= 128){
    var includeLowerCase = window.confirm("Would you like to include lowercase characters?");
    var includeUpperCase = window.confirm("Would you like to include uppercase characters?");
    var includeNumerials = window.confirm("Would you like to include numeric characters?");
    var includeSpecial = window.confirm("Would you like to include special characters?");
    //Checks to make sure at least one criteria is chosen
    if(!includeLowerCase && !includeUpperCase && !includeNumerials && !includeSpecial){
      window.alert("You did not select any character sets to use in the password, Please try again.");
    }else{
      //If the criteria is acceptable it returns this function that generates the password
      return createPassword();
    }
    //Makes sure password length is useable
  }else{
    window.alert("You did not select a password length between 8 and 128 characters. Plese try again.");
  }
  //This function makes an array of usable characters based on the criteria
  function createPassword() {
    var thePassword = [];
    var acceptableCharacters = [];
    var acceptableCharacters = (includeLowerCase) ? acceptableCharacters.concat(lowerCaseArray) : acceptableCharacters;
    var acceptableCharacters = (includeUpperCase) ? acceptableCharacters.concat(upperCaseArray) : acceptableCharacters;
    var acceptableCharacters = (includeNumerials) ? acceptableCharacters.concat(numerialsArray) : acceptableCharacters;
    var acceptableCharacters = (includeSpecial) ? acceptableCharacters.concat(specialArray) : acceptableCharacters;
    //This loop builds the password using random numbers and an array that matches the criteria
    for(var i = 0; i < passWordLength; i++){
      thePassword.push(acceptableCharacters[getRandomInt(acceptableCharacters.length)]); 
    }
    //Random Number Generator
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    //Returns array as a single line
    return thePassword.join("");
  }
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
