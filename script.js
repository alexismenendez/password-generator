// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

///////////////////////////

function generatePassword() {
  //User prompt to set password length
  var lenCriteria = window.prompt("Set Password Length:");
 
  //Validate password length fits criteria
  if (lenCriteria < 8) {
    window.alert("Password must have at least 8 characters.");
    return;
  } else if (lenCriteria > 128) {
    window.alert("Password cannot exceed 128 characters.");
    return;
  }
  
  //User prompt to set parameters for the generator
  var uppCriteria = window.confirm("Contains both Uppercase and Lowercase characters?");
  var numCriteria = window.confirm("Contains numbers?");
  var speCriteria = window.confirm("Contains special characters?");

  console.log(lenCriteria)
  console.log(uppCriteria)
  console.log(numCriteria)
  console.log(speCriteria)

  //Object storing all possible password characters
  var characterTypes = {
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    speCharacters: "!@#$%^&*()_+~\`|}{[]:;?><,./-="
  }
  
  var lowerSplit = characterTypes.lowerCase.split("");
  var upperSplit = characterTypes.upperCase.split("");
  var numSplit = characterTypes.numbers.split("");
  var speSplit = characterTypes.speCharacters.split("");

  //Array to store possible charactcers for the password generator to pick from
  var availCharacters = lowerSplit

  //Adding characterTypes to array based off user answers
  if (uppCriteria === true) {
    availCharacters = availCharacters.concat(upperSplit);
  }

  if (numCriteria === true) {
    availCharacters = availCharacters.concat(numSplit);
  }

  if (speCriteria === true) {
    availCharacters = availCharacters.concat(speSplit);
  }

  console.log(availCharacters);

  function passGenerate() {
    var password = "";
    while (lenCriteria > password.length) {
      password +=
        availCharacters[Math.floor(Math.random() * availCharacters.length)];
    }

    return password;
  }

  var password = passGenerate();

  return password;
}
