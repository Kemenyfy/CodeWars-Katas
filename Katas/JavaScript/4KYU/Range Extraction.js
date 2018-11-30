function solution(list) {

    let answer = [];
    let temporalArray = [];

    // Looping throughout the list
    for (let i = 0; i < list.length; i++) {

        // Add to temporalArray if following element is the next integer 
        if (list[i] + 1 === list[i + 1]) {

            temporalArray.push(list[i])

        } else {

            // if it isn't just push into answer array
            list[i] - 1 === temporalArray.slice(-1)[0] ? temporalArray.push(list[i]) : answer.push(String(list[i]))

            // Create Range if there is more than 3 consecutive integers
            if (temporalArray.length >= 3) {

                answer.push(String(temporalArray[0]) + '-' + String(temporalArray.slice(-1)))

            } else {

                for (let x of temporalArray) {

                    answer.push(String(x))

                }

            }

            // Reset
            temporalArray = []

        }

    }

    return answer.join(',')

}