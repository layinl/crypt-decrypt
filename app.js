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
  toggleOutputVisibility(true);
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
    toggleOutputVisibility(true);
  output.innerText = decryptedText;
  return decryptedText;
}

/**
 * Checks if text is empty and toggles visibility in the .output section elements
 * @returns true if text is empty, false otherwise
 */
function checkIfEmpty(text) {
  if(text === "") {
    toggleOutputVisibility(false);
    outputTitle.innerText = outputTitleMessage;
    output.innerText = outputMessage;
    return true;
  }
  return false;
}

function checkIfSpecialChar(text) {
  text = text.replace(/\s/g, "");
  if(text.match(/\W|_/g)) {
    toggleOutputVisibility(false);
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


function copyOutput() {
  navigator.clipboard.writeText(output.innerText);
  outputButtonCopy.innerHTML = "Copiado!";
  setTimeout(() => outputButtonCopy.innerHTML = "Copiar", 3000);
}

function toggleOutputVisibility(isTextValid = true) {
  if(isTextValid) {
    outputTitle.setAttribute("hidden", "");
    outputButtonCopy.removeAttribute("hidden");
  } else {
    outputTitle.removeAttribute("hidden");
    outputButtonCopy.setAttribute("hidden", "");
  }
}