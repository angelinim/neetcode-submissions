class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        let ans = [];

        for(let i = 0; i < temperatures.length; i++){
            let j = i+1
            for(; j < temperatures.length; j++){
                if(temperatures[j] > temperatures[i]){
                    ans[i] = j-i;
                    break;
                }
            }
            if (j === temperatures.length){
                ans[i] = 0;
            }
        }

        return ans;
    }
}
