function race(v1, v2, g) {

    if (v1 >= v2) {

        return null;

    }
    else {

        let totalSeconds = g * 3600 / (v2 - v1);

        let h = Math.floor(totalSeconds / 3600);
        let m = Math.floor(totalSeconds % 3600 / 60);
        let s = Math.floor(totalSeconds % 3600 % 60);

        var hDisplay = h > 0 ? h : 0;
        var mDisplay = m > 0 ? m : 0;
        var sDisplay = s > 0 ? s : 0;

        return [hDisplay, mDisplay, sDisplay];

    }

}