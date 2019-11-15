const wordsToMarks = (string) => {
    let value = 0;
    for (let i = 0; i < string.length; i++)
        value += string.charCodeAt(i) - 96;
    return value;
}