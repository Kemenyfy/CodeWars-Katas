function printerError(s) {

    let x = s.replace(/[nopqrstuvwxyz]/g, "");
    return (s.length - x.length) + '/' + (s.length);

}