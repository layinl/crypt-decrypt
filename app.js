let root = document.querySelector(":root");
let textarea = document.querySelector(".textarea");
textarea.addEventListener('input', autoResize, false);
let outputImg = document.querySelector(".output-img");
let output = document.querySelector(".output-text");
let outputMessage = output.innerText;
let outputTitle = document.querySelector(".output-title");
let outputTitleMessage = outputTitle.innerText;
let outputButtonCopy = document.querySelector(".output-button-copy");

/**
 * Encrypts the text in .output-text if valid or not empty
 * @returns the encryptedText if valid or not empty. Returns outputMessage otherwise
 * @see checkIfEmpty @see checkIfSpecialChar
 */
function encrypt() {
  let textToEncrypt = "";
  let encryptedText = "";
  textToEncrypt = document.querySelector(".textarea").value;
  if(checkIfEmpty(textToEncrypt) || checkIfSpecialChar(textToEncrypt)) return outputMessage;
  encryptedText = textToEncrypt
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  toggleOutputVisibility(true);
  output.innerText = encryptedText;
  return encryptedText;
}

/**
 * Decrypts the text in .output-text if valid or not empty
 * @returns the decryptedText if valid or not empty. Returns outputMessage otherwise
 * @see checkIfEmpty @see checkIfSpecialChar
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
 * Checks if text is empty, toggles visibility in the .output section elements and changes its text to default
 * @param {string} text the text to be checked
 * @returns true if text is empty, false otherwise
 * @see toggleOutputVisibility
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

/**
 * 
 * @param {string} text the text to be checked
 * @returns true if text contains a non lowercase letter (except number), false otherwise
 * @see toggleOutputVisibility
 */
function checkIfSpecialChar(text) {
  text = text.replace(/\s/g, "");
  if(text.match(/\W|[A-Z]|_/g)) {
    toggleOutputVisibility(false);
    outputTitle.innerText = "Mensagem inválida";
    output.innerText = "Digite um texto sem letras maiúsculas, sem letras acentuadas ou sem caracteres especiais.";
    return true;
  }
  return false;
}

/**
 * Automatically resizes the element based on input
 */
function autoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
}

/**
 * Copies the output text to clipboard
 */
function copyOutput() {
  navigator.clipboard.writeText(output.innerText);
  outputButtonCopy.innerHTML = "Copiado!";
  setTimeout(() => outputButtonCopy.innerHTML = "Copiar", 3000);
}

/**
 * toggles the output section visibility based on whether the input text is valid
 * - Shows the copy button, hides image and title if isTextValid is true
 * - Hides the copy button, shows image and title if isTextValid is false
 * @param {boolean} isTextValid if text is valid. It'll be true by default
 */
function toggleOutputVisibility(isTextValid = true) {
  if(isTextValid) {
    outputImg.setAttribute("hidden", "");
    outputTitle.setAttribute("hidden", "");
    outputButtonCopy.removeAttribute("hidden");
  } else {
    outputImg.removeAttribute("hidden");
    outputTitle.removeAttribute("hidden");
    outputButtonCopy.setAttribute("hidden", "");
  }
}


const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {
  document.body.classList.toggle("dark-mode");
} else if (currentTheme == "light") {
  document.body.classList.toggle("light-mode");
}

/**
 * Toggles the page's color mode. The preference is saved.
 */
function toggleDarkMode() {
  document.body.classList.toggle("light-mode");
  document.body.classList.toggle("dark-mode");
  if (prefersDarkScheme.matches) {
    var theme = document.body.classList.contains("light-theme")
      ? "light"
      : "dark";
  } else {
    var theme = document.body.classList.contains("dark-mode")
      ? "dark"
      : "light";
  }
  localStorage.setItem("theme", theme);
  
}