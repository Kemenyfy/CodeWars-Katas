let spaghettiCode = function (plate) {

    counts = {};
    for (i in plate) {
        for (j in plate[i]) {
            if (!counts[plate[i][j]]) {
                counts[plate[i][j]] = 0;
            }
            counts[plate[i][j]]++;
        }
    }
    max = 0;
    out = "";

    for (i in counts) {
        if (i.search(/^[^A-Za-z$]/) != -1) {
            continue;
        };
        if (counts[i] > max) {
            max = counts[i];
            out = i;
        }
    }
    return out;
}