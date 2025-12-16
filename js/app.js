console.log("✅ app.js cargado y ejecutándose");

document.body.insertAdjacentHTML(
  "beforeend",
  `<div style="
    margin-top:20px;
    padding:12px;
    background:#111;
    color:#0f0;
    font-family:monospace;
    border-radius:8px;
  ">
    ✅ JavaScript ejecutándose correctamente
  </div>`
);
