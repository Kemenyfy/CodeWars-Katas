function warnTheSheep(queue) {

    if (queue[queue.length - 1] == "wolf")
        return "Pls go away and stop eating my sheep";
    else if (queue[0] == "wolf")
        return "Oi! Sheep number " + (queue.length - 1) + "! You are about to be eaten by a wolf!"

    for (let i = queue.length - 1; i > 0; i--) {

        if (queue[i] == "wolf")
            return "Oi! Sheep number " + (queue.length - [i + 1]) + "! You are about to be eaten by a wolf!";

    }
}

// Other Solutions

