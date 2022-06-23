const firstOperand = parseInt(prompt("Enter Number: "));
const operator = prompt("Enter Operand: ");
const secondOperand = parseInt(prompt("Enter Number: "));

let result;
try {
  if (!firstOperand || !secondOperand) {
    result = alert("INVALID INPUT! PLEASE ENTER A NUMBER...");
  } else if (operator === "+") {
    result = parseInt(
      alert(
        `${firstOperand} + ${secondOperand} = ${firstOperand + secondOperand}`
      )
    );
  } else if (operator === "*") {
    result = parseInt(
      alert(
        `${firstOperand} * ${secondOperand} = ${firstOperand * secondOperand}`
      )
    );
  } else if (operator === "-") {
    result = parseInt(
      alert(
        `${firstOperand} - ${secondOperand} = ${firstOperand - secondOperand}`
      )
    );
  } else if (operator === "/") {
    result = parseInt(
      alert(
        `${firstOperand} / ${secondOperand} = ${firstOperand / secondOperand}`
      )
    );
  } else if (operator === "%") {
    result = parseInt(
      alert(
        `${firstOperand} % ${secondOperand} = ${firstOperand % secondOperand}`
      )
    );
  }
} catch (err) {
  alert(err);
  console.log(err);
}
