function howmuch(m, n) {

    if (m === n) {
        return [];
    }

    let minimum = Math.min(m, n);
    let maximum = Math.max(m, n);
    let answer = [];

    for (i = minimum; i <= maximum; i++) {

        if ((i - 1) / 9 % 1 === 0 && (i - 2) / 7 % 1 === 0)

            answer.push(["M: " + i, "B: " + (i - 2) / 7, "C: " + (i - 1) / 9]);

    }

    return answer;

}