const bill = Number(prompt("what is the bill?"));
const percentage = Number(prompt("Percentage you want to pay?"));
const tip = percentage/100 * bill;
const total = alert(`your total is ${bill + tip }`)
