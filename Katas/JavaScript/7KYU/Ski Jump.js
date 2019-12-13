function skiJump(mountain) {

    let speed = mountain.length * 1.5
    let jumpLength = ((mountain.length * speed * 9) / 10).toFixed(2)

    switch (true) {
        case jumpLength < 10:
            return `${jumpLength} metres: He's crap!`
            break;
        case (jumpLength <= 25):
            return `${jumpLength} metres: He's ok!`
            break;
        case jumpLength <= 50:
            return `${jumpLength} metres: He's flying!`
            break;
        case jumpLength > 50:
            return `${jumpLength} metres: Gold!!`
            break;
    }
}