function multipleOfIndex(array) {
    let answer = [];
    for (let i = 1; i < array.length; i++) {

        if (Number.isInteger(array[i] / i)) {
            answer.push(array[i]);
        }
    }
    return answer;
}

//Other Solutions:

//function multipleOfIndex(array) {
//    return array.filter((num, i) => num % i === 0);
//}

//multipleOfIndex = (array) => result = array.filter((number, i) => number % i === 0);

