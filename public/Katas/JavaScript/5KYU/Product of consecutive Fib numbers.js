function productFib(prod) {

    let answerArray = [0, 1, 1];

    while (true) {

        let lastNumber = answerArray[answerArray.length - 1];
        let secondToLastNumber = answerArray[answerArray.length - 2];

        if (secondToLastNumber * lastNumber === prod) {

            return [secondToLastNumber, lastNumber, true];

        } else if (secondToLastNumber * lastNumber > prod) {

            return [secondToLastNumber, lastNumber, false];

        }

        answerArray.push(lastNumber + secondToLastNumber);

    }

}