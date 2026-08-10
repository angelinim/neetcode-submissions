class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        let observingRow: number[] = null;

        for(let i = 0; i < matrix.length; i++){
            let currRow = matrix[i];
            if(target <= currRow[currRow.length-1]){
                observingRow = currRow;
                break;
            }
        }

        if(observingRow){
            for(let i = 0; i < observingRow.length; i++){
                if(observingRow[i] === target){
                    return true;
                }
            }
        }

        return false;
    }
}
