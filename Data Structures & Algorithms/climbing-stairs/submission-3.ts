class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        // dynamic programming

        let curr = 1;
        let prev = 1;

        for(let i = 0; i < n-1; i++){
            let next = curr + prev;
            if(prev >= curr){
                curr = next;
            } else {
                prev = next;
            }
        }

        return Math.max(curr,prev)
    }
}
