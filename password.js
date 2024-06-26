// let origin = process.argv[2];
// const password = function(word) {
//   let newPass = "";
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === "a"){
//       newPass += "4";
//     } else if (word[i] === "e"){
//       newPass += "3";
//     } else if (word[i] === "o"){
//       newPass += "0";
//     } else if (word[i] === "l"){
//       newPass += "1";
//     } else {
//       newPass += word[i];
//     }
//   }
//   return newPass;
// }
// console.log(password(origin));

const originalPassword = process.argv[2];

const obfuscatePassword = function(word) {
  let newPass = "";
  for (let i = 0; i < word.length; i++) {
    switch(word[i]) {
      case "a":
        newPass += "4";
        break;
      case "e":
        newPass += "3";
        break;
      case "o":
        newPass += "0";
        break;
      case "l":
        newPass += "1";
        break;
      default:
        newPass += word[i];
    }
  }
  return newPass;
}

console.log(obfuscatePassword(originalPassword));