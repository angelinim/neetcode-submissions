class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseWords(s: string[]): void {
        s.join("").split(" ").reverse().join(" ").split("").forEach((c,i) => {
            s[i] = c
        });
    }
}
