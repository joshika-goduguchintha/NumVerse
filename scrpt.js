function convert() {
  let num = document.getElementById("inputNumber").value.trim();
  let fromBase = parseInt(document.getElementById("fromBase").value);
  let toBase = parseInt(document.getElementById("toBase").value);
  let error = document.getElementById("error");
  let resultBox = document.getElementById("result");

  error.innerText = "";

  if (num === "") {
    error.innerText = "Please enter a number";
    return;
  }

  try {
    let decimal = parseInt(num, fromBase);

    if (isNaN(decimal)) throw "error";

    let result = decimal.toString(toBase).toUpperCase();
    resultBox.innerText = result;

  } catch {
    error.innerText = "Invalid input for selected base!";
  }
}

function copyResult() {
  let text = document.getElementById("result").innerText;

  if (text === "Result will appear here") return;

  navigator.clipboard.writeText(text);
  alert("Copied!");
}

function resetApp() {
  document.getElementById("inputNumber").value = "";
  document.getElementById("result").innerText = "Result will appear here";
  document.getElementById("error").innerText = "";
}