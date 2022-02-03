let singleDigitsArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let doubleDigitsArr = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
let specialDoubleDigitsArr = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const hundred = 'hundred';
module.exports = function toReadable (number) {
const numberString = number.toString();
const firstSymbol = numberString[0];
const secondSymbol = numberString[1];
const thirdSymbol = numberString[2];
if (numberString.length === 1) {
    let firstNumber = singleDigitsArr[number];
    return `${firstNumber}`;
} else if (numberString.length === 2 && firstSymbol == '1') {
    let firstNumber = specialDoubleDigitsArr[Number(secondSymbol)];
    return `${firstNumber}`;
} else if (numberString.length === 2 && firstSymbol != '1' && secondSymbol != '0') {
    let firstNumber = doubleDigitsArr[Number(firstSymbol)-2];
    let secondNumber = singleDigitsArr[Number(secondSymbol)];
    return `${firstNumber} ${secondNumber}`;
} else if (numberString.length === 2 && firstSymbol != '1' && secondSymbol == '0') {
    let firstNumber = doubleDigitsArr[Number(firstSymbol)-2];
    return `${firstNumber}`;
} else if (numberString.length === 3 && secondSymbol == '0' && thirdSymbol == '0') {
    let firstNumber = singleDigitsArr[Number(firstSymbol)];
    return `${firstNumber} ${hundred}`
} else if (numberString.length === 3 && secondSymbol == '1') {
    let firstNumber = singleDigitsArr[Number(firstSymbol)];
    let secondNumber = specialDoubleDigitsArr[Number(thirdSymbol)];
    return `${firstNumber} ${hundred} ${secondNumber}`;
} else if (numberString.length === 3 && secondSymbol != '1' && thirdSymbol == '0') {
    let firstNumber = singleDigitsArr[Number(firstSymbol)];
    let secondNumber = doubleDigitsArr[Number(secondSymbol)-2];
    return `${firstNumber} ${hundred} ${secondNumber}`;
} else if (numberString.length === 3 && secondSymbol == '0' && thirdSymbol != '0') {
    let firstNumber = singleDigitsArr[Number(firstSymbol)];
    let secondNumber = singleDigitsArr[Number(thirdSymbol)];
    return `${firstNumber} ${hundred} ${secondNumber}`;
} else if (numberString.length === 3 && secondSymbol != '1' && secondSymbol != '0' && thirdSymbol != '0') {
    let firstNumber = singleDigitsArr[Number(firstSymbol)];
    let secondNumber = doubleDigitsArr[Number(secondSymbol) - 2];
    let thirdNumber = singleDigitsArr[Number(thirdSymbol)];
    return `${firstNumber} ${hundred} ${secondNumber} ${thirdNumber}`;
}
}

