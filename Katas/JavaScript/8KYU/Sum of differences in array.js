function sumOfDifferences(arr) {

    const sortedArray = arr.sort((a, b) => b - a)
    let result = 0;

    for (let i = 1; i < sortedArray.length; i++) {

        result += sortedArray[i - 1] - sortedArray[i];

    }
    return result;

}
