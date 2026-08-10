class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n: number): number[] {
        let ans = [];
        for(let i = 0; i <= n; i++){
            let a = i;
            let count = 0;
            while(a>0){
                if(a&1){
                    count++;
                }
                a = a>>1;
            }
            ans.push(count);
        }
        return ans;
    }
}
