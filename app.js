let output = document.querySelector(".output")

function encrypt() {
  let textToEncrypt = document.querySelector("#text").value;
  let encryptedText = textToEncrypt
    .replace("a", "enter")
    .replace("e", "imes")
    .replace("i", "ai")
    .replace("o", "ober")
    .replace("u", "ufat");
  output.innerText = encryptedText;
  return encryptedText;
}