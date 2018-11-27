class SmallestIntegerFinder {

    findSmallestInt(args) {

        let sortedNumbers = args.sort(function (a, b) { return a - b });
        return sortedNumbers[0];

    }

}