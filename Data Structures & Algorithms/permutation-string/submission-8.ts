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
        let s2Arr: number[] = new Array(26).fill(0);
        let A = 'a'.charCodeAt(0);

        for(let c of s1){
            s1Arr[c.charCodeAt(0) - A]++;
        }

        for(let i = 0; i < s2.length; i++) {
            if(i < s1.length){
                s2Arr[s2[i].charCodeAt(0) - A]++;
            } else {
                let j = i-s1.length;
                s2Arr[s2[j].charCodeAt(0) - A]--;
                s2Arr[s2[i].charCodeAt(0) - A]++;

            }
            if(s1Arr.every((v,k) => v === s2Arr[k])){
                return true;
            }
        }
        
        return false;
    }
}
