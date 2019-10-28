function backwardsPrime(start, stop) {

    let arr = [];

    for (let i = start; i <= stop; i++) {
        let backwardNumber = reverseNumber(i);
        if (isPrime(i) && isPrime(backwardNumber) && i != backwardNumber)
            arr.push(i);
    }
    return arr;
}

function reverseNumber(number) {
    return (number + "").split("").reverse().join("");
}

function isPrime(number) {

    if (number % 2 === 0 || number < 2)
        return false;

    for (let i = 3, s = Math.sqrt(number); i <= s; i += 2)

        if (number % i === 0)
            return false;

    return number > 1;
}