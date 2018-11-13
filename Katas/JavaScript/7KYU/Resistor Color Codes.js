function decodeResistorColors(bands) {
    var arrayOneColors = bands.split(" ");
    var returnString = "";
    var ohms = "";
    var tolerance;
    if (arrayOneColors[0] === 'black') {
        ohms += '0';
    } else if (arrayOneColors[0] === 'brown') {
        ohms += '1';
    } else if (arrayOneColors[0] === 'red') {
        ohms += '2';
    } else if (arrayOneColors[0] === 'orange') {
        ohms += '3';
    } else if (arrayOneColors[0] === 'yellow') {
        ohms += '4';
    } else if (arrayOneColors[0] === 'green') {
        ohms += '5';
    } else if (arrayOneColors[0] === 'blue') {
        ohms += '6';
    } else if (arrayOneColors[0] === 'violet') {
        ohms += '7';
    } else if (arrayOneColors[0] === 'gray') {
        ohms += '8';
    } else if (arrayOneColors[0] === 'white') {
        ohms += '9';
    }
    if (arrayOneColors[1] === 'black') {
        ohms += '0';
    } else if (arrayOneColors[1] === 'brown') {
        ohms += '1';
    } else if (arrayOneColors[1] === 'red') {
        ohms += '2';
    } else if (arrayOneColors[1] === 'orange') {
        ohms += '3';
    } else if (arrayOneColors[1] === 'yellow') {
        ohms += '4';
    } else if (arrayOneColors[1] === 'green') {
        ohms += '5';
    } else if (arrayOneColors[1] === 'blue') {
        ohms += '6';
    } else if (arrayOneColors[1] === 'violet') {
        ohms += '7';
    } else if (arrayOneColors[1] === 'gray') {
        ohms += '8';
    } else if (arrayOneColors[1] === 'white') {
        ohms += '9';
    }
    var stringToNum = Number(ohms);
    if (arrayOneColors[2] === 'black') {
        stringToNum = stringToNum * Math.pow(10, 0);
    } else if (arrayOneColors[2] === 'brown') {
        stringToNum = stringToNum * Math.pow(10, 1);
    } else if (arrayOneColors[2] === 'red') {
        stringToNum = stringToNum * Math.pow(10, 2);
    } else if (arrayOneColors[2] === 'orange') {
        stringToNum = stringToNum * Math.pow(10, 3);
    } else if (arrayOneColors[2] === 'yellow') {
        stringToNum = stringToNum * Math.pow(10, 4);
    } else if (arrayOneColors[2] === 'green') {
        stringToNum = stringToNum * Math.pow(10, 5);
    } else if (arrayOneColors[2] === 'blue') {
        stringToNum = stringToNum * Math.pow(10, 6);
    } else if (arrayOneColors[2] === 'violet') {
        stringToNum = stringToNum * Math.pow(10, 7);
    } else if (arrayOneColors[2] === 'gray') {
        stringToNum = stringToNum * Math.pow(10, 8);
    } else if (arrayOneColors[2] === 'white') {
        stringToNum = stringToNum * Math.pow(10, 9);
    }
    if (stringToNum >= 1000 && stringToNum < 1000000) {
        stringToNum = stringToNum / 1000;
        ohms = stringToNum.toString();
        ohms += "k";
    } else if (stringToNum >= 1000000) {
        stringToNum = stringToNum / 1000000;
        ohms = stringToNum.toString();
        ohms += "M";
    } else {
        ohms = stringToNum.toString();
    }
    ohms += " ohms";
    if (arrayOneColors.length === 3) {
        tolerance = ', 20%';
    } else if (arrayOneColors.length === 4) {
        if (arrayOneColors[3] === 'gold') {
            tolerance = ', 5%';
        } else if (arrayOneColors[3] === 'silver') {
            tolerance = ', 10%';
        }
    }
    returnString = ohms + tolerance;
    return returnString;
}
