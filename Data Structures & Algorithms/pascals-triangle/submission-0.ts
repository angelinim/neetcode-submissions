class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generate(numRows: number): number[][] {
        let ans = [];
        ans.push([1]);
        if(numRows == 1){
            return ans;
        }
        ans.push([1,1]);

        for(let i = 2; i < numRows; i++){
            let prevArr = ans[i-1];
            let currArr = [1];
            for(let j = 0, k = 1; k < prevArr.length; j++, k++){
                currArr.push(prevArr[j]+prevArr[k]);
            }
            currArr.push(1)
            ans.push(currArr);
        }

        return ans;
    }
}
