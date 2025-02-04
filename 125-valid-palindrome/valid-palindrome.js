/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let start = 0;
    let n = s.length;
    let end = n - 1;
    let result = true;
    while (start <= end) {
        if (!isAlphaNumeric(s[start])) {
            start++;
            continue;
        }
        if (!isAlphaNumeric(s[end])) {
            end--;
            continue;
        }
        if (s[start].toLowerCase() === s[end].toLowerCase()) {
            start++;
            end--;
        } else {
            result = false;
            break;
        }

    }
    return result;
};
function isAlphaNumeric(char) {
    return /^[a-zA-Z0-9]$/.test(char);
}