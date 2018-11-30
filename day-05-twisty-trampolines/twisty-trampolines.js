const twistyTrampolines = ( input ) => {
    const parsedInput = input.split('\n').map((x) => x.trim()).map( (x) => parseInt(x));
    let index = 0;
    let counter = -1;
    while(index<parsedInput.length) {
        if(index < 0) {
            index = parsedInput.length + index
        }
        parsedInput[index] = parsedInput[index] + 1
        index = parsedInput[index]
        counter++
    }
    return counter;
}

module.exports = twistyTrampolines;