class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        if(n == 1){
            return 1;
        } else if (n == 2){
            return 2;
        }

        let a = 1
        let b = 1;

        for(let i = 0; i < n-2; i++){
            let next = a+b;
            if(a<=b){
                a = next;
            } else if(b<a){
                b = next;
            }
        }

        return a+b;
    }
}
