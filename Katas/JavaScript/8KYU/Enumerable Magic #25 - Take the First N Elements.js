function take(arr, n) {
    let newArray = [];
    j = (arr.length < n) ? arr.length : n;
    for (let i = 0; i < j; i++) {
        newArray.push(arr[i]);
    }
    return newArray;
}

//Other Solutions:

//const take = (arr, n) => arr.slice(0, n)