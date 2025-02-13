/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    // 5 3 1
    if (numRows === 1) {
        return s;
    }

    let result = "";
    let n= s.length;
    let cycLen = 2 * numRows - 2;
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j + i < n; j += cycLen) {
            result += s[j + i];
            if (i !== 0 && i !== numRows - 1 && j + cycLen - i < n) {
                result += s[j + cycLen - i];
            }
        }
    }
    return result;
};