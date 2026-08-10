class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n: number): number {
        let ones = 0;
        while(n>0){
            console.log(n)
            if(n & 1){
                ones++;
            }
            n = n>>1;
        }

        return ones;
    }
}
