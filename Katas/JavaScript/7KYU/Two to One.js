function longest(s1, s2) {

    // Join both strings (concat)
    // Turn them into an Array (split)
    // Remove duplicates (filter)
    // Sort the Array (sort)
    // Turn them into a String (join)
     
    return s1.concat(s2).split('').filter(function (item, pos, self) {
        return self.indexOf(item) == pos;
    }).sort().join('');

}