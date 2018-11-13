function seatsInTheater(nCols, nRows, col, row) {

    var columnsToTheLeft = nCols - col + 1;
    var rowsBehind = nRows - row;
    return answer = columnsToTheLeft * rowsBehind;

}