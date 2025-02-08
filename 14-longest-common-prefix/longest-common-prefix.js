/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let str = strs.sort();
    let result = "";
    let start = str[0];
    let end = str[str.length - 1];
    let limit = Math.min(start.length, end.length);
    for (let i = 0; i < limit; i++) {
        if (start[i] !== end[i]) break;
        result += start[i];
    }
    return result;
};