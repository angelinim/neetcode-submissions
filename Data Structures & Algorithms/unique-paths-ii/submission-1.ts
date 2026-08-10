class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    uniquePathsWithObstacles(grid: number[][]): number {
        // track visited nodes in a map
        // set [rows-1,cols-1] = 1
        // if a position has a 1 it's value is 0
        // else add together the value to the right and below
        const rows = grid.length;
        const cols = grid[0].length;
        if(grid[rows-1][cols-1] === 1){
            return 0;
        }
        let prevRow = new Int32Array(cols);

        prevRow[cols-1] = 1;
        for(let r = rows-1; r >= 0; r--){
            let curRow = new Int32Array(cols);
            for(let c = cols-1; c >= 0; c--){
                if(grid[r][c] === 1){
                    curRow[c] = 0;
                    continue;
                }
                if(c+1 < cols){
                    curRow[c] += curRow[c+1];
                }
                curRow[c] += prevRow[c];
            }
            prevRow = curRow;
        }
        return prevRow[0];
    }
}





