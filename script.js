// JavaScript Document
const names = ["人員1", "人員2", "人員3", "人員4", "人員5", "人員6", "人員7", "人員8", "人員9"];
let selectedName = "";

document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("names");

  names.forEach((name) => {
    const option = document.createElement("option");
    option.value = name;
    option.text = name;
    select.appendChild(option);
  });
});

function drawLottery() {
  const resultDiv = document.getElementById("result");
  const select = document.getElementById("names");
  
  if (select.value === "") {
    alert("請選擇一個名字");
    return;
  }

  selectedName = select.value;
  names.splice(names.indexOf(selectedName), 1);

  const randomNumber = Math.floor(Math.random() * names.length);
  const selectedWinner = names[randomNumber];

  resultDiv.innerHTML = `<p>抽中的姓名：${selectedWinner}</p>`;
}

