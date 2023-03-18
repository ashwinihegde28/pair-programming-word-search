const transpose = function(array) {
    const numberOfRows = array.length;
    const numberOfColumns = array[0].length;
    const matrix = [];
    for (let i = 0; i < numberOfColumns; i++) {
        matrix[i] = [];
    }

    for (let i = 0; i < numberOfRows; i++) {
        for (let j = 0; j < numberOfColumns; j++) {
            matrix[j][i] = array[i][j];
        }
    }
    return matrix;
};

const printMatrix = (matrix) => {
    for (const row of matrix) {
        for (const el of row) {
            process.stdout.write(el + " ");
        }
        process.stdout.write("\n");
    }
};

const wordSearch = (letters, word) => {
    //reverse the string
    const reverseWord = word.split("").reverse().join("");

    if (letters.length === 0) {
        return false;
    }
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (l of horizontalJoin) {
        if (l.includes(word) || l.includes(reverseWord)) return true;
    }
    // Check if the word is in the array vertically
    // rotate the entire matrix
    // exchange the horizontal coordinate and the vertical coordinate of all items in the matrix
    // create a new array

    const verticalArr = transpose(letters);

    const verticalJoin = verticalArr.map(ls => ls.join(''));
    for (l of verticalJoin) {
        if (l.includes(word) || l.includes(reverseWord)) return true;
    }


    //if the word is not present, return false
    return false;
};

module.exports = wordSearch;

