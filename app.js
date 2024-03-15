let output = document.querySelector(".output-text")
let outputMessage = output.innerText;
let outputTitle = document.querySelector(".output-title")
let outputTitleMessage = outputTitle.innerText;
let outputButtonCopy = document.querySelector(".output-button-copy");

/**
 * Encrypts the text in .output-text
 * @returns the encryptedText
 */
function encrypt() {
  let textToEncrypt = "";
  let encryptedText = "";
  textToEncrypt = document.querySelector(".textarea").value;
  if(checkIfEmpty(textToEncrypt) || checkIfSpecialChar(textToEncrypt)) return outputMessage;
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

/**
 * Decrypts the text in .output-text
 * @returns the decryptedText
 */
function decrypt() {
  let textToDecrypt = "";
  let decryptedText = "";
  textToDecrypt = document.querySelector(".textarea").value;
  if(checkIfEmpty(textToDecrypt) || checkIfSpecialChar(textToDecrypt)) return outputMessage;
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

/**
 * Checks if text is empty and toggles visibility in the .output section elements
 * @returns true if text is empty, false otherwise
 */
function checkIfEmpty(text) {
  if(text === "") {
    outputTitle.removeAttribute("hidden");
    outputButtonCopy.setAttribute("hidden", "");
    outputTitle.innerText = outputTitleMessage;
    output.innerText = outputMessage;
    return true;
  }
  return false;
}

function checkIfSpecialChar(text) {
  if(text.match(/\W|_/g)) {
    outputTitle.innerText = "Mensagem inválida";
    output.innerText = "Digite um texto sem letras com acento ou sem caracteres especiais.";
    return true;
  }
  return false;
}

let textarea = document.querySelector(".textarea");
textarea.addEventListener('input', autoResize, false);

/**
 * Automatically resizes the element based on input
 */
function autoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
}