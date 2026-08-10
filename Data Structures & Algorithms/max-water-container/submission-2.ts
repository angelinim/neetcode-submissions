class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let i = 0;
        let j = heights.length-1;
        let max_area = 0;

        while (i < j) {
            let distance = j - i;
            let highest = Math.min(heights[i],heights[j]);
            let area = distance * highest;

            if (area > max_area) {
                max_area = area;
            }

            if (heights[i]>heights[j]){
                j--;
            } else {
                i++;
            }
        }


        return max_area;
    }
}
