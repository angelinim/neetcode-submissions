class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points: number[][], k: number): number[][] {
        let karr: number[][] = [];

        // initiallize an array with k#of tuples
        // karr[0][0] = distance to origin
        // karr[0][1] = index of points arr
        for(let i = 0; i < k; i++){
            karr.push([101,101]);
        }

        for(let i = 0; i < points.length; i++){
            let dis = Math.sqrt(Math.pow(points[i][0],2) + Math.pow(points[i][1],2));
            for(let j = 0; j < karr.length; j++){
                if(karr[j][0]>dis){
                    karr[j][0]= dis;
                    karr[j][1]= i;
                    break;
                }
            }
            karr.sort((a,b) => b[0]-a[0]);
        }

        let ans: number[][] = [];
        for(let pair of karr){
            let val = points[pair[1]]
            ans.push(val)
        }
        return ans;
    }
}







