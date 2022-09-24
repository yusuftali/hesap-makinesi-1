let list = [];
let listResult = [];
let result = 0;

document.querySelector(".buttons").addEventListener("click", (e) => {
  const screen = document.querySelector(".screen");

  if (
    e.target.classList.contains("operator") ||
    e.target.classList.contains("number")
  ) {
    let p = document.createElement("p");
    screen.appendChild(p);
    let pTextNode = document.createTextNode(e.target.textContent);
    p.appendChild(pTextNode);
    list.push(p.textContent);
    console.log(list);

    if (e.target.classList.contains("operator")) {
      listResult.push(
        list.splice(0, list.indexOf(e.target.textContent)).join("")
      );
      list.pop();
      listResult.push(e.target.textContent);
      console.log(listResult);

      if (e.target.classList.contains("equal")) {
        calculate();

        console.log(listResult, result);
        Array.from(screen.children).map(() => {
          screen.removeChild(screen.children[0]);
        });

        console.log(screen.children);
        let p = document.createElement("p");
        screen.appendChild(p);
        let pTextNode = document.createTextNode(result);
        p.appendChild(pTextNode);
        listResult = [];
        list = [result];
        console.log(listResult);
      }
    }
  }

  if (e.target.classList.contains("ac")) {
    Array.from(screen.children).map(() => {
      screen.removeChild(screen.children[0]);
    });

    console.log(screen.children);
    let p = document.createElement("p");
    screen.appendChild(p);
    let pTextNode = document.createTextNode("0");
    p.appendChild(pTextNode);
    listResult = [];
    list = [];
  }
});

function calculate() {
  for (i of listResult) {
    if (i == "%") {
      result = Number(listResult[listResult.indexOf("%") - 1]) / 100;
      listResult.splice(listResult.indexOf("%") - 1, 3, result);
      console.log(listResult);
    }
  }
  for (i of listResult) {
    if (i == "x") {
      result =
        Number(listResult[listResult.indexOf("x") - 1]) *
        Number(listResult[listResult.indexOf("x") + 1]);
      listResult.splice(listResult.indexOf("x") - 1, 3, result);
      console.log(listResult);
    }
  }

  for (i of listResult) {
    if (i == ":") {
      result =
        Number(listResult[listResult.indexOf(":") - 1]) /
        Number(listResult[listResult.indexOf(":") + 1]);
      listResult.splice(listResult.indexOf(":") - 1, 3, result);
      console.log(listResult, result);
    }
  }
  for (i of listResult) {
    if (i == "+") {
      result =
        Number(listResult[listResult.indexOf("+") - 1]) +
        Number(listResult[listResult.indexOf("+") + 1]);
      listResult.splice(listResult.indexOf("+") - 1, 3, result);
      console.log(listResult, result);
    }
  }
  for (i of listResult) {
    if (i == "-") {
      result =
        Number(listResult[listResult.indexOf("-") - 1]) -
        Number(listResult[listResult.indexOf("-") + 1]);
      listResult.splice(listResult.indexOf("-") - 1, 3, result);
      console.log(listResult, result);
    }
  }
}

console.log();