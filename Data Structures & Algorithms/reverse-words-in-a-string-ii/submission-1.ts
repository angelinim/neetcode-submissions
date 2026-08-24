class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseWords(s: string[]): void {
        let arr = s.join("").split(" ").reverse().join(" ").split("")
        for(let i = 0; i < s.length; i++){
            s[i] = arr[i];
        }
    }
}
