const removeUrlAnchor = (url) => url.split("#")[0];

//Other Solutions:

//const removeUrlAnchor = (url) => url.replace(/#.+$/, '');

//function removeUrlAnchor(url) {
//    return url.replace(/#.*/gi, "");
//}