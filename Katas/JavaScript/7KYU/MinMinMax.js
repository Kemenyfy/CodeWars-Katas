function minMinMax(array) {
    let minimumAbsent = Math.min(...array);
    while (array.includes(minimumAbsent))
        minimumAbsent++
    return [Math.min(...array), minimumAbsent, Math.max(...array)]
}