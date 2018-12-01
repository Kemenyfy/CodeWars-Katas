function SeriesSum(n) {

    if (n === 0) {

        return "0.00";

    }
    else if (n === 1) {

        return "1.00";

    }

    let answer = 1

    for (let i = 1; i < n; i++) {

        answer = answer + 1 / (1 + i * 3);

    }

    return answer.toFixed(2)

}