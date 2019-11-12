function pyramid(n) {
    let answer = [];
    for (let i = 1; i <= n; i++) {
        let temp = [];
        for (let j = 0; j < i; j++) {
            temp.push(1);
        }
        answer.push(temp);
    }
    return answer;
}

function pyramid(n) {
    return Array.from({ length: n }, (x, i) => Array(i + 1).fill(1))
}