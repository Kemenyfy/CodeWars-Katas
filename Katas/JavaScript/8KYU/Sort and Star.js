const twoSort = (s) => s.sort()[0].split('').join('***');

//Other Solutions:

//function twoSort(s) {
//    let sorted = s.sort();
//    let splited = sorted[0].split('');
//    let answer = [];
//    for (let i = 0; i < splited.length; i++) {
//        if (i < splited.length - 1)
//            answer.push(splited[i] + '***');
//        else
//            answer.push(splited[i]);
//    }
//    return answer.join('');
//}