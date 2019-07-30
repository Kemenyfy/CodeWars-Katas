function findOdd(A) {
    let n = 0;
    for (let i = 0; i < A.length; i++)  n ^= A[i];
    return n;
}