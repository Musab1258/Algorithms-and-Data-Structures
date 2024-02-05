/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let anagram = [];
    let sArray = s.split("");
    let tArray = t.split("");
    
    for (let i = 0; i < sArray.length; i++) {
        if (tArray.includes(sArray[i])) {
            anagram.push(sArray[i]);
            tArray.
        }
    }
    
    if (sArray.length !== tArray.length) {
        return false;
    } else if (anagram.length !== tArray.length) {
        return false;
    } else {
        return true;
    }
};
