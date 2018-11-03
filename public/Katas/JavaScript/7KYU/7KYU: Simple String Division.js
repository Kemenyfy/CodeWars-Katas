function solve(str, k) {
    let arr = [];
    for (let i = 0, n = str.length - k; i < n + k; i++)
        arr.push(+str.substr(i, n));
    return Math.max(...arr);
}