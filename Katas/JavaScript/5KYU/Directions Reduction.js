function dirReduc(arr) {

    // Initialize Count
    let i = 0;

    // Loop over every index of array
    while (i < arr.length) {

        // If conditions are met
        if ((arr[i] === "NORTH" && arr[i + 1] === "SOUTH") ||
            (arr[i] === "SOUTH" && arr[i + 1] === "NORTH") ||
            (arr[i] === "EAST" && arr[i + 1] === "WEST") ||
            (arr[i] === "WEST" && arr[i + 1] === "EAST")) {

            // Take out index and index + 1
            arr.splice(i, 2);
            // Restart check in previous index
            i--;

        }
        else {
            // Keep checking the rest of the array
            i++;
        }

    }
    return arr;
}
