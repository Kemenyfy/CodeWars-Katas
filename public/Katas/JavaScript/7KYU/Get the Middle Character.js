function getMiddle(s) {

    let length = s.length;
    let middleLetter = Math.floor(length / 2);

    if (length % 2 == 0) {
        return s[middleLetter - 1] + s[middleLetter];
    } else {
        return s[middleLetter];
    }

}