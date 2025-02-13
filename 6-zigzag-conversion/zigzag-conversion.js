/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    // 5 3 1
    // if (numRows === 1) {
    //     return s;
    // }

    // let result = "";
    // let n= s.length;
    // let cycLen = 2 * numRows - 2;
    // for (let i = 0; i < numRows; i++) {
    //     for (let j = 0; j + i < n; j += cycLen) {
    //         result += s[j + i];
    //         if (i !== 0 && i !== numRows - 1 && j + cycLen - i < n) {
    //             result += s[j + cycLen - i];
    //         }
    //     }
    // }
    // return result;

    if (numRows === 1) return s; // No zigzag needed

    let rows = new Array(Math.min(numRows, s.length)).fill("").map(() => ""); 
    let currRow = 0;
    let goingDown = false;

    // Traverse the string
    for (let c of s) {
        rows[currRow] += c;
        if (currRow === 0 || currRow === numRows - 1) {
            goingDown = !goingDown; // Change direction
        }
        currRow += goingDown ? 1 : -1;
    }

    // Concatenate rows to form final output
    return rows.join("");
};