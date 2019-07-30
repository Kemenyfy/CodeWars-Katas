function getAverage(marks) {

    let answer = 0;

    for (let i = 0; i < marks.length; i++) {

        answer = answer + marks[i];

    }

    return Math.floor(answer / marks.length);

}