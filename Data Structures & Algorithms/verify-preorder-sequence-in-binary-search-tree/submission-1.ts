
class Solution {
    /**
     * @param {number[]} preorder
     * @return {boolean}
     */
    verifyPreorder(preorder: number[]): boolean {
        let stk = [];
        let minLimit = 0;

        for(let p of preorder){
            if(stk.length === 0){
                stk.push(p);
            } else {
                while(stk.length > 0 && stk[stk.length-1] < p){
                    minLimit = stk.pop();
                }
                stk.push(p);
            }
            if(minLimit > p){
                return false;
            }
        }

        return true;
    }
}







