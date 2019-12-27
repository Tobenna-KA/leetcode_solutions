
/**
3. Longest Substring Without Repeating Characters
Medium

Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 

Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let new_sub_string = [];
    let old_sub_string = [];
    
    for(let j = 0; j < s.length; j++) {
        if (new_sub_string.indexOf(s[j]) == -1) {
            new_sub_string.push(s[j])
        } else {
            //find the last place with a s[j] and start get all chracraters before there
            let ix = new_sub_string.indexOf(s[j]) + 1;

            if(old_sub_string.length < new_sub_string.length) { // make sure not to create a new array if old arr is bigger
                old_sub_string = new_sub_string
                new_sub_string = new_sub_string.slice(ix, new_sub_string.length)
                new_sub_string.push(s[j])
            } else {
                new_sub_string = new_sub_string.slice(ix, new_sub_string.length)
                new_sub_string.push(s[j])
            }
        }
    }
    
    new_sub_string = (old_sub_string.length < new_sub_string.length)? new_sub_string : old_sub_string;
    return new_sub_string.length
};
