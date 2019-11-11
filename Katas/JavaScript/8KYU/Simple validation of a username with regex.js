function validateUsr(username) {
    var res = /^[/_0-9a-z/s]{4,16}$/g;
    return res.test(username);
}

//Other Solutions:

//function validateUsr(username) {
//    return /^[0-9a-z_]{4,16}$/.test(username)
//}

//const validateUsr = username => /^[a-z\d_]{4,16}$/.test(username);