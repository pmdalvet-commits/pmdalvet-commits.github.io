// bmd.js
function parseBMD(text) {
  // Exemplo simples: converte blocos [[ ]] em <h2>
  return text
    .replace(/

\[

\[(.*?)\]

\]

/g, "<h2>$1</h2>")
    .replace(/- (.*)/g, "<li>$1</li>");
}

const editor = document.getElementById("editor");
const preview = document.getElementById("preview");

editor.addEventListener("input", () => {
  preview.innerHTML = parseBMD(editor.value);
});
