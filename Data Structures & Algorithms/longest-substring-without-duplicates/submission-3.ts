class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        // sliding window
        // if s[r] exists in hashset
        let ans = 0;
        let l = 0;
        let set = new Set<string>();

        for (let r = 0; r < s.length; r++){
            while (set.has(s[r])) {
                set.delete(s[l]);
                l++;
            }
            set.add(s[r]);
            ans = Math.max(set.size, ans);
        }

        return ans;
    }
}
