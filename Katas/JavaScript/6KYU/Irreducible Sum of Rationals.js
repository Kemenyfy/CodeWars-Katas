function sumFracts(l) {

    if (l.length === 0) {
        return null;
    }

    let d = l.map(a => a[1]).reduce((a, b) => a * b, 1);
    let n = l.map(a => a[0] * d / a[1]).reduce((a, b) => a + b);

    return (n % d === 0) ? n / d : [n / gcd(n, d), d / gcd(n, d)];

    function gcd(a, b) {

        return b === 0 ? a : gcd(b, a % b);

    }

}