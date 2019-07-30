function abbrevName(name){
    // code away
    return name.split(' ').map(v => v[0].toUpperCase()).join('.');
}