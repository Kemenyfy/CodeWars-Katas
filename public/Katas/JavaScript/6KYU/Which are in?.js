function inArray(array1, array2) {

    let answerArray = [];
    let joinedArray2 = array2.join();

    for (let i = 0; i < array1.length; i++) {

        if (joinedArray2.includes(array1[i])) {

            answerArray.push(array1[i]);

        }

    }

    return answerArray.sort();

}