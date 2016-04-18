var userTemp = document.getElementById("input");

function printRed(temp) {
  var results = document.getElementById("answer");
  results.innerHTML = "<p style='color:red;'> Answer: " + temp + "</p>";
}

function printBlue(temp) {
  var results = document.getElementById("answer");
  results.innerHTML = "<p style='color:blue;'> Answer: " + temp + "</p>";
}

function printGreen(temp) {
  var results = document.getElementById("answer");
  results.innerHTML = "<p style='color:green;'> Answer: " + temp + "</p>";
}

function toFah(userInput) {
  var temp = (9 / 5) * userInput + 32;
  if (temp > 90) {
    printRed(temp);
  } else if (temp < 32) {
    printBlue(temp);
  } else {
    printGreen(temp);
  }
}

function toCel(userInput) {
  var temp = (userInput - 32) * 5 / 9;
  if (temp > 32) {
    printRed(temp);
  } else if (temp < 0) {
    printBlue(temp);
  } else {
    printGreen(temp);
  }
}

function convert(clickEvent) {
  clickEvent.preventDefault();
  var userInput = userTemp.value;
  if (document.getElementById("cel").checked) {
    toCel(userInput);
  } else if (document.getElementById("fah").checked) {
    toFah(userInput);
  }
}

function clear(clickEvent) {
  var results = document.getElementById("answer");
  results.innerHTML = "<p>Answer: </p>";
}

var run = document.getElementById("go");
run.addEventListener("click", convert);

var wipe = document.getElementById("clear");
wipe.addEventListener("click", clear);