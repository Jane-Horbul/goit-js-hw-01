let enteredNumber = "0";
let total = 0;

while (enteredNumber !== null) {
  let input = Number(enteredNumber);
  if (Number.isNaN(input) === false) {
    total += input;
  } else {
    alert(`Было введено не число, попробуйте еще раз`);
  }
  enteredNumber = prompt("Введите число");
}
alert(`Общая сумма чисел равна , ${total}!`);
