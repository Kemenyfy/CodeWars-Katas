function commas(num) {

    if (num.toString().match(/\.\d{4}/)) {

        num = num.toFixed(3).toString().replace(/0+$/, "");

    }

    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

}