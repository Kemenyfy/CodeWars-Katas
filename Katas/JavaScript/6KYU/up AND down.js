function arrange(strng) {

    let tempString = strng.split(' ');
    let i = -1;
    let comp = i => (tempString[i + i % 2].length) > (tempString[i + 1 - i % 2].length);

    while (++i < tempString.length - 1)
        if (comp(i))
            [tempString[i], tempString[i + 1]] = [tempString[i + 1], tempString[i]]

    return tempString.map((s, i) => s[`to${i % 2 ? 'Upper' : 'Lower'}Case`]()).join(' ');
}