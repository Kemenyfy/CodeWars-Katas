function DNAStrand(dna) {

    let replaceLetters = { "A": "T", "T": "A", "G": "C", "C": "G" };

    return dna.replace(/[ATGC]/g, function (matchLetters) { return replaceLetters[matchLetters]; })

}