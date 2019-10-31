function sumTriangularNumbers(n) {

    if (n <= 0)
        return 0;

    let numbersArray = [];
    let currentNumber = 0;

    for (let i = 1; i <= n; i++) {
        currentNumber = i + currentNumber;
        numbersArray.push(currentNumber);
    }
    return numbersArray.reduce(function (a, b) { return a + b }, 0);
}