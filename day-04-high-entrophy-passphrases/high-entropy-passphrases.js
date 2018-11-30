const highEntrophyPassphrases = (input) => {
    const splitInput = input.split('\n');
    const trimmedSplitInput = splitInput.map( x => x.trim());
    const trimmedSplitSeparatedInput = splitInput.map( x => x.trim().split(" "));
    const aocGithub = splitInput.map((x) => x.trim().split(/[\s\t/]+/));
    const reducedInput = trimmedSplitSeparatedInput.reduce((accumulator, currentValue) => {
        const uniqueWords = [...new Set(currentValue)];

        return accumulator + (uniqueWords.length == currentValue.length ? 1 : 0);
    }, 0);

    return reducedInput
};

module.exports = highEntrophyPassphrases;