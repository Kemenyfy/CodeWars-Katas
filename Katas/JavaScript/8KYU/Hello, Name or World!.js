function hello(name) {

    if (name == null || name == "") {
        return "Hello, World!";
    }
    else {
        var lowerCase = name.toLowerCase();
        var toCapital = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
        return "Hello, " + toCapital + "!";
    }

}