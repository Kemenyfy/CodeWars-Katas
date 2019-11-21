const descendingOrder = n => parseInt(String(n).split('').sort().reverse().join(''));

//Other Solutions:

//const descendingOrder = n => parseInt(n.toString().split('').sort(function (a, b) { return b - a }).join(''))