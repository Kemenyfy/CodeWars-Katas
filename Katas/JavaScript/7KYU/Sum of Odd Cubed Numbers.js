function cubeOdd(arr) {

    for (let i = 0; i - arr.length; i++) {
        if (typeof arr[i] !== 'number')
            return undefined;
    }

    return arr
        .filter(f => Math.abs(f % 2) === 1)
        .map(m => Math.pow(m, 3))
        .reduce((r, s) => r + s, 0);

}