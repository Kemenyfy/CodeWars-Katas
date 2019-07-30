function calculate(n1, n2, o) {

    let x = parseInt(n1, 2);
    let y = parseInt(n2, 2);
    if (o === 'add') x += y;
    if (o === 'subtract') x -= y;
    if (o === 'multiply') x *= y;
    return x.toString(2);

}