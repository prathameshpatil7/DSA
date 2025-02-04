/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let str = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    let start = 0;
    let n = str.length;
    let end = n - 1;
    let result = true;
    while (start <= end) {

        if (str[start] === str[end]) {
            start++;
            end--;
        } else {
            result = false;
            break;
        }

    }
    return result;
};
