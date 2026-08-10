class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points: number[][], k: number): number[][] {
        // naieve sorting soln
        points.sort((a,b) => {
            return Math.sqrt(Math.pow(a[0],2)+Math.pow(a[1],2)) - 
                Math.sqrt(Math.pow(b[0],2)+Math.pow(b[1],2));
        });

        return points.slice(0,k);
    }
}
