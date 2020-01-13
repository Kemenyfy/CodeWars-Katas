function adjacentElementsProduct(array) {

    let maxProduct = array[0] * array[1];

    for (let i = 1; i < array.length; i++) {

        product = array[i] * array[i + 1];

        if (product > maxProduct)
            maxProduct = product;

    }

    return maxProduct;

}

// A different Solution:

function adjacentElementsProduct(array) {

    let answer = [];
    for (i = 1; i < array.length; i++) {
        answer.push(array[i - 1] * array[i])
    }
    return Math.max.apply(null, answer);

}

// Or:

function adjacentElementsProduct(array) {

    let newArray = [];
    for (i = 0; i < array.length - 1; i++) {
        newArray.push(array[i] * array[i + 1])
    }
    return Math.max(...newArray)

}