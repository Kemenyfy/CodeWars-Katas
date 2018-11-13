function color(x) {

    if (x[0] == x[1])
        return x[0];

    if ((x == 'BG' || x == 'GB'))
        return 'R';

    if ((x == 'RG' || x == 'GR'))
        return 'B';

    else return 'G';

}

function triangle(row) {

    let answer = '';

    for (let i = 1; i < row.length; i++)

        answer += color(row[i - 1] + row[i]);

    return (row.length == 1) ? row : triangle(answer);

}