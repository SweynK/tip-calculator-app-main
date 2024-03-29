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
  if (billValue > 0) {
    e.target.classList.remove("border-red-400");
    e.target.classList.add("border-green-400");
    e.target.classList.add("border-2");
    calculation();
  } else {
    e.target.classList.remove("border-green-400");
    e.target.classList.add("border-red-400");
  }
});

tipInput.forEach((el) => {
  el.addEventListener("click", (e) => {
    tipValue = parseInt(e.target.innerText);
    calculation();
    tipInput.forEach((el) => {
      el.classList.add("bg-[#00474B]");
      el.classList.remove("bg-[#9FE8DF]");
      el.classList.add("text-[#FFFFFF]");
      el.classList.remove("text-[#00474B]");
    });
    el.classList.remove("bg-[#00474B]");
    el.classList.add("bg-[#9FE8DF]");
    el.classList.remove("text-[#FFFFFF]");
    el.classList.add("text-[#00474B]");
  });
});

peopleInput.addEventListener("input", (e) => {
  peopleValue = Number(e.target.value);
  if (peopleValue > 0) {
    e.target.classList.remove("border-red-400");
    e.target.classList.add("border-green-400");
    e.target.classList.add("border-2");
    calculation();
  } else {
    e.target.classList.remove("border-green-400");
    e.target.classList.add("border-red-400");
  }
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
customInput.addEventListener("click", () => {
  tipInput.forEach((el) => {
    el.classList.add("bg-[#00474B]");
    el.classList.remove("bg-[#9FE8DF]");
    el.classList.add("text-[#FFFFFF]");
  });
});

btnReset.addEventListener("click", () => {
  billValue = 0;
  tipValue = 0;
  peopleValue = 0;
  customInput.value = "";
  resultTip.innerText = "$0.00";
  resultTotal.innerText = "$0.00";
  billInput.value = "";
  peopleInput.value = "";
  billInput.classList.remove("border-red-400");
  billInput.classList.remove("border-green-400");
  peopleInput.classList.remove("border-red-400");
  peopleInput.classList.remove("border-green-400");
  tipInput.forEach((el) => {
    el.classList.add("bg-[#00474B]");
    el.classList.remove("bg-[#9FE8DF]");
    el.classList.add("text-[#FFFFFF]");
  });
});
