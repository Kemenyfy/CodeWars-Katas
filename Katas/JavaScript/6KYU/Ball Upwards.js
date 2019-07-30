function maxBall(v0) {

    let cv = v0 * 0.277777777;
    let time = 10 * cv / 9.81;
    if (time - parseInt(time, 10) > 0.5) { return parseInt(time, 10) + 1; }
    else { return parseInt(time, 10); }

}