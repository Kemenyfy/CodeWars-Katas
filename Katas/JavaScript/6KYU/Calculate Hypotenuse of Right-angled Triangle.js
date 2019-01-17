function calculateHypotenuse(a,b) {
  
    if (isNaN(a) || !(typeof(a) == "number")  || a < 0 || isNaN(b) || !(typeof(b) == "number") || b < 0) {
        
        {throw "Invalid";}
    
    } else {

        return Math.round(Math.sqrt(a * a + b * b) * 1000) / 1000;

    }

}