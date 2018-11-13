function digital_root(n) {

    let singleDigits = n.toString().split("");
    let answer = 0;

    while (singleDigits.length > 1) {

        answer = 0;

        for (let i = 0; i < singleDigits.length; i++) {

            answer = answer + parseInt(singleDigits[i]);

        }

        singleDigits = answer.toString().split("");

    }

    return answer;

}