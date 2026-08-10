class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        let observingRow: number[] = null;

        for(let i = 0; i < matrix.length; i++){
            if(target <= matrix[i][matrix[i].length-1]){
                observingRow = matrix[i];
                break;
            }
        }

        if(observingRow){
            // for(let i = 0; i < observingRow.length; i++){
            //     if(observingRow[i] === target){
            //         return true;
            //     }
            // }
            let l = 0;
            let r = observingRow.length-1;
            while(l <= r){
                let half = Math.floor((l+r)/2);
                if(target > observingRow[half]){
                    l = half+1;
                } else if(target < observingRow[half]){
                    r = half-1;
                } else {
                    return true;
                }
            }
        }

        return false;
    }
}
