function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
    let yourTime = pontoonDistance / youSpeed;
    let sharkTime = (dolphin) ? sharkDistance / (sharkSpeed / 2) : sharkDistance / sharkSpeed;
    if (yourTime < sharkTime)
        return "Alive!"
    else
        return "Shark Bait!"
}

// Other Solutions:

//function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
//    if (dolphin)
//        sharkSpeed /= 2;
    
//    return pontoonDistance / youSpeed < sharkDistance / sharkSpeed ? "Alive!" : "Shark Bait!";
//}

// const shark = (pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) => sharkDistance / (dolphin ? sharkSpeed / 2 : sharkSpeed) > pontoonDistance / youSpeed ? "Alive!" : "Shark Bait!";