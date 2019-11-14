function countingValleys(s) {
    let valleys = 0;
    for (let i = 0, seaLevel = 0; i < s.length; i++) {
        if (s[i] == 'U')
            seaLevel++;
        else if (s[i] == 'D')
            seaLevel--;
        if (seaLevel == 0 && s[i] == 'U')
            valleys++;
    }
    return valleys;
}