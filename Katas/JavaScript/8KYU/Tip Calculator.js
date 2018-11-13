function calculateTip(amount, rating) {

    let newRating = rating.toUpperCase();

    if (newRating == "EXCELLENT") {
        return Math.ceil(amount * .2);
    }
    else if (newRating == "GREAT") {
        return Math.ceil(amount * .15);
    }
    else if (newRating == "GOOD") {
        return Math.ceil(amount * .1);
    }
    else if (newRating == "POOR") {
        return Math.ceil(amount * .05);
    }
    else if (newRating == "TERRIBLE") {
        return 0
    }
    else {
        return "Rating not recognised"
    }

}