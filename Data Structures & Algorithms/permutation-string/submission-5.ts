class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        if (s1.length > s2.length) {
            return false;
        }

        let s1Arr: number[] = new Array(26).fill(0);
        let l = 0;
        let r = s1.length;
        let A = 'a'.charCodeAt(0);

        for(let c of s1){
            s1Arr[c.charCodeAt(0) - A]++
        }
        console.log(s1Arr);

        while(r <= s2.length) {
            let s2Arr: number[] = new Array(26).fill(0);
            let sub = s2.slice(l,r);
            
            for(let c of sub){
                s2Arr[c.charCodeAt(0)-A]++
            }

            if (s1Arr.every((v, i) => v === s2Arr[i])){
                return true;
            }
            l++;
            r++;
        }
        
        return false;
    }
}
