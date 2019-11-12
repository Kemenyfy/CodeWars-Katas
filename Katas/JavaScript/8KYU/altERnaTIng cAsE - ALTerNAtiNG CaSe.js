String.prototype.toAlternatingCase = function () {
    let string = "";
    for (let i = 0; i < this.length; i++) {
        if (this[i] === this[i].toUpperCase()) {
            string += this[i].toLowerCase();
        } else {
            string += this[i].toUpperCase();
        }
    }
    return string;
}

//Other Solutions:

//String.prototype.toAlternatingCase = function () {
//    return [...this].map(a => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase())).join("");
//}