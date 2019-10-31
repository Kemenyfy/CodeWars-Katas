function epidemic(tm, n, s0, i0, b, a) {

    const dt = tm / n;
    const infectedArray = new Array(n).fill();
    const susceptibleArray = new Array(n).fill();
    const recoveredArray = new Array(n).fill();

    [infectedArray[0], susceptibleArray[0], recoveredArray[0]] = [i0, s0, 0];

    infectedArray.slice(1).forEach((_, i) => {
        susceptibleArray[i + 1] = susceptibleArray[i] - dt * b * susceptibleArray[i] * infectedArray[i];
        infectedArray[i + 1] = infectedArray[i] + dt * (b * susceptibleArray[i] * infectedArray[i] - a * infectedArray[i]);
        recoveredArray[i + 1] = recoveredArray[i] + dt * infectedArray[i] * a;
    })

    return Math.ceil(Math.max.apply(null, infectedArray));
}
