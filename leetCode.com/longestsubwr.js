// https://leetcode.com/problems/longest-substring-without-repeating-characters/
/**
 * @param {string} s
 * @return {number}
 */

function updateLetters(letters, letter){
    const stPos = letters[letter];
    for (let j in letters){
        if (letters[j]<stPos) delete letters[j];
    }
}

var lengthOfLongestSubstring = function(s) {
   const letters = {};
   let i, j, letter, len, maxL = 0, stPos;
   for (i=0; i < s.length; i++){
       letter = s[i];
        if (letters[letter]){
            stPos = letters[letter];
            for (j in letters){
                if (letters[j]<stPos) delete letters[j];
            }
            // updateLetters(letters, letter);
            letters[letter] = i;
        }else{
            letters[letter] = i;
        }
        len = Object.keys(letters).length;
        if (len > maxL) maxL = len;
   }
   if (maxL == 0) maxL = s.length;
   return maxL;
};


console.log(lengthOfLongestSubstring('hello world'));
console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('aab'));
console.log(lengthOfLongestSubstring('abba'));
console.log(lengthOfLongestSubstring('abcb'));
console.log(lengthOfLongestSubstring('qweabacb'));