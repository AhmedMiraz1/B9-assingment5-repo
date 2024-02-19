const allSit = document.getElementsByClassName("sit");

let count = 0;
let minus = 8;
const setArray = [];

for (const sit of allSit) {
  sit.addEventListener("click", addSeat);

  function addSeat(e) {
    if (count < 4) {
      const sitName = sit.innerText;
      if (setArray.includes(sitName)) {
        return;
      }

      sit.style.backgroundColor = "#1DD100";
      sit.style.color = "white";
      count = count + 1;
      minus = minus - 1;

      const name = e.target.innerText;

      // create a list
      const list = document.createElement("ul");
      list.classList.add("flex", "w-full", "justify-between", "mt-2");

      list.innerHTML = `<li>${name}</li><li>Economy</li><li>550</li>`;

      console.log(document.getElementById("seat-list"), list);

      // add list element to the dom
      document.getElementById("seat-list").appendChild(list);
      sit.removeEventListener("click", addSeat);

      const totalCost = document.getElementById("total-cost").innerText;
      const convertNumber = parseInt(totalCost);
      const sum = (document.getElementById("total-cost").innerText =
        convertNumber + 550);
      showGrandTotal(sum);

      setInnerText("current-seat", count);
      minusInnerText("minus-count", minus);
    }
  }
}

function handleDiscount() {
  const coupon = document.getElementById("input-field").value;

  let total = parseInt(document.getElementById("total-cost").innerText);

  if (coupon === "NEW15") {
    total = total - total * 0.15;
    document.getElementById("removable").style.display = "none";
  } else if (coupon === "Couple 20") {
    total = total - total * 0.2;
    document.getElementById("removable").style.display = "none";
  } else {
    alert("please select your coupon");
  }

  showGrandTotal(total);
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

function minusInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

function buy() {
  showElementById("main-section");
}
function success() {
  showElementById("modal");
}

function showGrandTotal(total) {
  document.getElementById("discount").innerText = total;
}
