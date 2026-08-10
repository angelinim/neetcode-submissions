class Solution {
    /**
     * @param {number[]} heights
     * @return {number[]}
     */
    findBuildings(heights: number[]): number[] {
        // do the left to right soln
        let stk = [];

        for(let i = 0; i < heights.length; i++){
            if(stk.length === 0){
                stk.push(i);
            } else {
                while(stk.length > 0 && heights[stk[stk.length-1]] <= heights[i]){
                    stk.pop()
                }
                stk.push(i)
            }
        }

        return stk;
    }
}







