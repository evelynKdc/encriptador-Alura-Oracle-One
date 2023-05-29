/*-----------------declaration of variables------------*/
const btnEncrypt = document.getElementById("encryptButton");
const btnDecrypt = document.getElementById("decryptButton");
const txtInput = document.getElementById("textToTransform");
const textResult = document.getElementById("textResult");
const copyButton = document.getElementById("copybutton");
const messageContainer = document.getElementById("messageContainer");




/*-----------------declaration of arrow functions------------*/

const encrypt = () => {
  const text = txtInput.value;
  const lowerText = text.toLowerCase();
  let encrypted = lowerText.replace(/e/gim, "enter");
  encrypted = encrypted.replace(/i/gim, "ines");
  encrypted = encrypted.replace(/a/gim, "ai");
  encrypted = encrypted.replace(/o/gim, "ober");
  encrypted = encrypted.replace(/u/gim, "ufat");
  messageContainer.classList.add("unshow");
  copyButton.classList.add("show");
  textResult.classList.add("show");
  textResult.innerHTML = encrypted;
};

const descrypt = () => {
  const text = txtInput.value;
  const lowerText = text.toLowerCase();
  let decrypted = lowerText.replace(/enter/gim, "e");
  decrypted = decrypted.replace(/ines/gim, "i");
  decrypted = decrypted.replace(/ai/gim, "a");
  decrypted = decrypted.replace(/ober/gim, "o");
  decrypted = decrypted.replace(/ufat/gim, "u");
  messageContainer.classList.add("unshow");
  copyButton.classList.add("show");
  textResult.classList.add("show");
  textResult.innerHTML = decrypted;
};

const copy = () => {
  textResult.select(); //select the content
  document.execCommand("copy"); //copy in the clipboard the content
};

/*-----------------------EVENTS---------------------*/
btnEncrypt.addEventListener("click", () => encrypt());
btnDecrypt.addEventListener("click", () => descrypt());
copyButton.addEventListener("click", () => copy());
