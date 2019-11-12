function sumMix(x) {
    let answer = 0;
    for (i = 0; i < x.length; i++) {
        answer += parseInt(x[i])
    }
    return answer;
}

//Other Solutions:

//function sumMix(x) {
//    return x.map(a => +a).reduce((a, b) => a + b);
//}