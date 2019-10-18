function well(x) {

    let goodIdeas = 0;

    for (let i = 0; i < x.length; i++) {

        if (x[i] == 'good') {

            goodIdeas++;

        }
    }
    return goodIdeas > 2 ? 'I smell a series!' : goodIdeas == 1 || goodIdeas == 2 ? 'Publish!' : 'Fail!';
}

//Other Answers:

function well(x) {
    switch (x.filter(i => i === 'good').length) {
        case 0:
            return 'Fail!'
        case 1:
        case 2:
            return 'Publish!'
        default:
            return 'I smell a series!'
    }
}

well = x => (x = x.filter(e => e == 'good').length) < 1 ? 'Fail!' : x > 2 ? 'I smell a series!' : 'Publish!';