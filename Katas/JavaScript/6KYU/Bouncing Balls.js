function bouncingBall(h, bounce, window) {

    let answer = 0;

    if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
        return -1;
    }
    else {

        while (h * bounce > window) {
            h = h * bounce;
            answer = answer + 2;
        }

    }

    return answer + 1;

}