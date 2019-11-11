function multipleOfIndex(array) {
    let answer = [];
    for (let i = 1; i < array.length; i++) {

        if (Number.isInteger(array[i] / i)) {
            answer.push(array[i]);
        }
    }
    return answer;
}