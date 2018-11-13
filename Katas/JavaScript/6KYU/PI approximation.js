function iterPi(epsilon) {

    let pi = 0;
    let iteration = 0;
    let negPos = 1;

    while (Math.abs(Math.PI - (pi * 4)) >= epsilon) {

        pi += negPos / (iteration * 2 + 1);
        iteration += 1;
        negPos *= -1;

    }

    return [iteration, Math.round(pi * 4 * 10000000000) / 10000000000];

}