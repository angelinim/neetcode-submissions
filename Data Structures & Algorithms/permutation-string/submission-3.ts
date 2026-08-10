class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        // try the sorting brute force solution...
        if (s1.length > s2.length){
            return false;
        }
        s1 = s1.split("").sort().join("");
        

        let l = 0;
        let j = s1.length;

        while(j <= s2.length){
            let sub = s2.slice(l,j).split("").sort().join("");
            if (sub === s1){
                return true;
            }
            console.log(sub);
            l++;
            j++;
        }

        return false;
    }
}
