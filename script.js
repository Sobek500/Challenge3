var generateBtn = document.querySelector("#generate");

var charset = "";

function generatePassword() {
  let length = prompt("Please enter the length of the password you would like", "Enter here");
  if (length >= 8 && length <= 128) {
    console.log(length);
    let lowerCase = "Would you like the password to contain lowercase characters?\nEither Yes or No.";
    if (confirm(lowerCase) == true) {
      charset = charset + "abcdefghijklmnopqrstuvwxyz";
    }
    let upperCase = "Would you like the password to contain uppercase characters?\nEither Yes or No.";
    if (confirm(upperCase) == true) {
      charset = charset + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    let numericChar = "Would you like the password to contain numeric characters?\nEither Yes or No.";
    if (confirm(numericChar) == true) {
      charset = charset + "1234567890";
    }
    let specialChar = "Would you like the password to contain special characters?\nEither Yes or No.";
    if (confirm(specialChar) == true) {
      charset = charset + "`~!@#$%^&*-_=+";
    }

    console.log(charset);
  } else {
    let retry = "Please enter a number between 8 - 128.";
  if (confirm(retry) == true) {
    generatePassword();
  }
  }

  for (let i = 0; i < length; i++) {
    password += charset.charAt((Math.random() * charset.length));
  }
  password = password.slice(28, 28 + length);
  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(password)
  passwordText.value = password;
  charset = "";
}

generateBtn.addEventListener("click", writePassword);
