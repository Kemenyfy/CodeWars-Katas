function getSize(width, height, depth) {

    let surfaceArea = 2 * (width * depth + width * height + height * depth);
    let volume = width * height * depth;
    return [surfaceArea, volume];

}

// Other Solutions

const getSize = (width, height, depth) => [2 * (width * height + height * depth + width * depth), width * height * depth];