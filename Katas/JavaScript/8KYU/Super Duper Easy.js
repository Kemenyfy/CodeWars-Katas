function problem(x) {

    return typeof x === "number" ? x * 50 + 6 : "Error";

}


function problem(x) {

    if (typeof x === 'string') {
        return "Error";
    }
    else {
        return (x * 50) + 6;
    }

}