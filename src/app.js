const billInput = document.querySelector("#bill");
const tipInput = Array.from(document.getElementsByClassName("tip"));
const customInput = document.querySelector("#custom");
const peopleInput = document.querySelector("#people");
const resultTip = document.querySelector("#result-tip");
const resultTotal = document.querySelector("#result-total");
const btnReset = document.querySelector("#btn-reset");

let billValue = 0;
let tipValue = 0;
let peopleValue = 0;

billInput.addEventListener("input", (e) => {
  billValue = Number(e.target.value);
  calculation();
});

tipInput.forEach((el) => {
  el.addEventListener("click", (e) => {
    tipValue = parseInt(e.target.innerText);
    calculation();
  });
});

peopleInput.addEventListener("input", (e) => {
  peopleValue = Number(e.target.value);
  calculation();
});

function calculation() {
  if (peopleValue != 0) {
    let resultTipValue = (billValue * (tipValue / 100)) / peopleValue;
    resultTip.innerText = `$${resultTipValue.toFixed(2)}`;

    let totalValue = billValue / peopleValue + resultTipValue;
    resultTotal.innerText = `$${totalValue.toFixed(2)}`;
  } else {
    resultTip.innerText = "$0.00";
    resultTotal.innerText = "$0.00";
  }
}

customInput.addEventListener("input", (e) => {
  tipValue = Number(e.target.value);
  calculation();
});

btnReset.addEventListener("click", () => {
  billValue = 0;
  tipValue = 0;
  peopleValue = 0;
  customInput.value = "Custom";
  resultTip.innerText = "$0.00";
  resultTotal.innerText = "$0.00";
  billInput.value = "";
  peopleInput.value = "";
});
