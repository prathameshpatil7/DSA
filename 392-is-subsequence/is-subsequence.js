/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    // let i = 0, j = 0;
    // while (i < s.length && j < t.length) {
    //     if (s[i] === t[j]) {
    //         i++;
    //     }
    //     j++;
    // }
    // return i === s.length;
     let n = s.length;
    let m = t.length;
    let k = 0;
    let str = "";
    for(let i = 0; i<n; i++)
    {
        for(let j = k; j<m; j++)
        {
            if(s[i] == t[j])
            {
                k = j+1;
                str += s[i];
                break;
            }
        }
    }
    return s === str;
};