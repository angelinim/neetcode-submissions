class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseWords(s: string[]): void {
        // then reverse individual words
        
        let l = 0;
        let r = s.length-1;

        // reverse whole string
        while(l < r){
            let temp = s[l];
            s[l] = s[r];
            s[r] = temp;
            l++;
            r--;
        }
        l = 0;
        r = 0;
        console.log(s);

        while(l<s.length && r < s.length){
            while(s[r+1] != " " && r+1 < s.length){
                r++;
            }
            let nextWord = r+2;
            while(l<r){
                let temp = s[r];
                s[r] = s[l];
                s[l] = temp;
                r--;
                l++;
            }
            l = nextWord;
            r = nextWord;
        }
    }
}
