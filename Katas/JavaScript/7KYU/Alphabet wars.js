function alphabetWar(fight) {

    let leftSide = { 'w': 4, 'p': 3, 'b': 2, 's': 1 };
    let rightSide = { 'm': 4, 'q': 3, 'd': 2, 'z': 1 };
    let rightSideCount = 0;
    let leftSideCount = 0;

    fight.split("").forEach(letter => {
        leftSide.hasOwnProperty(letter) ? leftSideCount += leftSide[letter] : rightSide.hasOwnProperty(letter) ? rightSideCount += rightSide[letter] : 0;
    });
    return leftSideCount === rightSideCount ? "Let's fight again!" : leftSideCount > rightSideCount ? "Left side wins!" : "Right side wins!";

}