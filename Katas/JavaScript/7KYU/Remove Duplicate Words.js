function removeDuplicateWords(s) {
    let newArray = s.split(' ')
    newArray = newArray.filter(function (element, i) {
        return newArray.indexOf(element) == i
    })
    return newArray.join(' ')

}