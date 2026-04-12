function switchTab(tabId) {
  document.querySelectorAll(".tab").forEach(tab => {
    tab.classList.remove("active");
  });
  document.getElementById(tabId).classList.add("active");
}

const input = document.getElementById("markdown-input");
const preview = document.getElementById("markdown-preview");

input.addEventListener("input", () => {
  preview.innerHTML = marked.parse(input.value);
});

const imageInput = document.getElementById("imageInput");
const previewImg = document.getElementById("preview-img");

imageInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onload = function(event) {
    previewImg.src = event.target.result;
  };

  if (file) reader.readAsDataURL(file);
});

function generateQuote(){
  const text=document.getElementById("quote-text").value;
  const author=document.getElementById("quote-author").value;

  document.getElementById("preview-text").innerText=text;
  document.getElementById("preview-author").innerText=author ? "- "+author : "";
}

function copyHTML(){
  const text = document.getElementById("html-output").textContent;
  navigator.clipboard.writeText(text);
}

const fontSlider = document.getElementById("fontSize");

fontSlider.addEventListener("input", ()=>{
  const size = fontSlider.value + "px";
  document.getElementById("preview-text").style.fontSize = size;
});

function downloadImage() {
  const element = document.querySelector(".quote-preview");

  html2canvas(element).then(canvas => {
    const link = document.createElement("a");
    link.download = "quote.png";
    link.href = canvas.toDataURL();
    link.click();
  });
}