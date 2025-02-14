/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    // let n = s.length;
    // if (n < 1) return "";
    // let step = 2 * numRows - 2;
    // let resArr = new Array(numRows).fill("");
    // for (let i = 0; i < numRows; i++) {
    //     for (let j = i; j + step < n; j += step) {
    //         resArr[i] += s[j];

    //     }
    //     step -= 1;
    // }

    // return resArr.join();
       if (numRows === 1 || s.length <= numRows) return s;

    let rows = Array.from({ length: numRows }, () => "");
    let index = 0, step = 1;

    for (let char of s) {
        rows[index] += char;

        // Change direction at the first or last row
        if (index === 0) step = 1;
        if (index === numRows - 1) step = -1;

        index += step;
    }

    return rows.join("");
};