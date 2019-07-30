function invertValue(num) {

    if (num == 0)
        return 0;
    else
        return -num;

}

function invert(array) {

    return array.map(invertValue);

}