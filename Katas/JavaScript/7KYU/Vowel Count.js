function getCount(str) {

    return str.length - str.replace(/[aeiou]/g, "").length;

}

function getCount(str) {

    return str.replace(/[^aeiou]/gi, '').length;

}

function getCount(str) {

    return (str.match(/[aeiou]/ig) || []).length;

}