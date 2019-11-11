function howMuchILoveYou(nbPetals) {
    while (nbPetals - 6 > 0)
        nbPetals -= 6

    switch (nbPetals) {
        case 1:
            nbPetals == 1
            return "I love you"
            break;
        case 2:
            nbPetals == 2
            return "a little"
            break;
        case 3:
            nbPetals == 1
            return "a lot"
            break;
        case 4:
            nbPetals == 2
            return "passionately"
            break;
        case 5:
            nbPetals == 1
            return "madly"
            break;
        case 6:
            nbPetals == 2
            return "not at all"
            break;
    }
}

//Other Solutions:

//const phrases = [
//    'I love you',
//    'a little',
//    'a lot',
//    'passionately',
//    'madly',
//    'not at all',
//]

//function howMuchILoveYou(n) {
//    return phrases[(n - 1) % phrases.length]
//}

//howMuchILoveYou = n => ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'][(n - 1) % 6]