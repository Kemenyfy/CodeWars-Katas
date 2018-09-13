function remove(s){
  let i = s.match(/!*$/).join('');
  return s.replace(/!/g, '') + i ;
}