class Solution {
    /**
     * @param {number[]} heights
     * @return {number[]}
     */
    findBuildings(heights: number[]): number[] {
        let stk = [];
        let ans = [];

        for(let i = heights.length-1; i >=0; i--){
            while(stk.length>0 && heights[stk[stk.length-1]] < heights[i]){
                let n = stk.pop();
                if(stk.length === 0){
                    ans.push(n);
                }
            }
            stk.push(i);
        }
        if(stk.length > 0){
            ans.push(stk[0]);
        }

        return ans.reverse();
    }
}
