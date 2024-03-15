let output = document.querySelector(".output-text")
let outputMessage = output.innerText;
let outputTitle = document.querySelector(".output-title")
let outputButtonCopy = document.querySelector(".output-button-copy");

function encrypt() {
  let textToEncrypt = "";
  let encryptedText = "";
  textToEncrypt = document.querySelector(".textarea").innerText;
  if(checkIfEmpty(textToEncrypt)) return outputMessage;
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
  outputTitle.setAttribute("hidden", "");
  outputButtonCopy.removeAttribute("hidden");
  output.innerText = encryptedText;
  return encryptedText;
}

function decrypt() {
  let textToDecrypt = "";
  let decryptedText = "";
  textToDecrypt = document.querySelector(".textarea").innerText;
  if(checkIfEmpty(textToDecrypt)) return outputMessage;
  decryptedText = textToDecrypt
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  outputTitle.setAttribute("hidden", "");
  outputButtonCopy.removeAttribute("hidden");
  output.innerText = decryptedText;
  return decryptedText;
}

function checkIfEmpty(text) {
  if(text === "") {
    outputTitle.removeAttribute("hidden");
    outputButtonCopy.setAttribute("hidden", "");
    output.innerText = outputMessage;
    return true;
  }
  return false;
}

let textarea = document.querySelector(".textarea");
textarea.addEventListener('input', autoResize, false);

function autoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
}