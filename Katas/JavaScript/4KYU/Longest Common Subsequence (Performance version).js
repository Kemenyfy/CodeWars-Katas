const lcs = (x, y) => {

    let answer = Array(x.length).fill('')

    for (let i = 0; i < y.length; i++) {

        let l = '';
        answer = answer.map((a, c) => (l = x[c] == y[i] ? (answer[c - 1] || '') + x[c] : (l.length > a.length ? l : a)));

    }

    return answer.pop() || '';

}