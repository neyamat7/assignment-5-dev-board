// bg color change handler
changeColorBtn = document
  .getElementById("bg-color-change")
  .addEventListener("click", function () {
    const body = document.getElementById("body");
    const color = generateColor();
    body.style.backgroundColor = color;
  });

function generateColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
}
