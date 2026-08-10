class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        // distance between 2 of the bars
        // and the height of the lowest of those 2 bars
        // diff of distance and diff of height?
        let max_area: number = 0;

        for (let i = 0; i < heights.length; i++) {
            for (let j = heights.length-1; j > i; j--){
                let diff = Math.abs(i - j);
                // the difference will be multiplied by the
                // min of heights[i]/heights[j]
                let min = Math.min(heights[i], heights[j]);
                let area = diff * min;

                if (area > max_area){
                    max_area = area;
                }
            }
        }

        return max_area;
    }
}
