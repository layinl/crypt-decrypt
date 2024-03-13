let output = document.querySelector(".output")
let outputMessage = output.innerText;
let outputTitle = document.querySelector(".output-title")

function encrypt() {
  let textToEncrypt = "";
  let encryptedText = "";
  textToEncrypt = document.querySelector("#text").value;
  if(textToEncrypt === "") {
    outputTitle.removeAttribute("hidden");
    output.innerText = outputMessage;
    return outputMessage;
  }
  [...textToEncrypt].forEach(c => {
      switch (c) {
        case 'e':
          encryptedText += "enter";
          break;
        case 'i':
          encryptedText += "imes";
          break;
        case 'a':
          encryptedText += "ai";
          break;
        case 'o':
          encryptedText += "ober";
          break;
        case 'u':
          encryptedText += "ufat";
          break;
        default:
          encryptedText += c;
      }
    }
  )
  outputTitle.setAttribute("hidden", "")
  output.innerText = encryptedText;
  return encryptedText;
}

function decrypt() {
  let textToDecrypt = "";
  let decryptedText = "";
  textToDecrypt = document.querySelector("#text").value;
  if(textToDecrypt === "") {
    outputTitle.removeAttribute("hidden")
    output.innerText = outputMessage;
    return outputMessage;
  }
  decryptedText = textToDecrypt
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  outputTitle.setAttribute("hidden", "")
  output.innerText = decryptedText;
  return decryptedText;
}