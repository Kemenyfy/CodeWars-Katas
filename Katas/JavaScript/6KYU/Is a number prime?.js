function isPrime(num) {

    if (num < 2) {

        return false; (num + " is not prime");

    }

    for (let i = 2; i < num; i++) {

        if (num % i == 0) {

            return false; (num + " is not prime");

        }

    }

    return true; (num + " is prime");

}
