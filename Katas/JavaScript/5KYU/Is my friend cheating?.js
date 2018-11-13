function removeNb(n) {

    const totalSum = (n * (n + 1)) / 2;
    let answer = [];

    for (let b = n; b > 0; b--) {

        let a = (totalSum - b) / (b + 1)

        if (a < n && Number.isInteger(a)) {

            answer.push([a, b]);

        }

    }

    return answer;

}