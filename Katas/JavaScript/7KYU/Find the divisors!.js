function divisors(integer) {

    let answer = [];

    for (let i = 2; i < integer; i++) {

        if (integer % i == 0) answer.push(i);

    }

    return answer.length == 0 ? integer + " is prime" : answer;

};