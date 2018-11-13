function perimeter(n) {

    let array = [1, 1];
    let answer = 0;

    for (i = 1; i < n; i++) {

        let sum = array[i] + array[i - 1];
        array.push(sum);
        answer = answer + 4 * sum;

    }

    return answer + 8;

}