class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    shortestPathBinaryMatrix(grid: number[][]): number {
        if(grid[0][0] === 1){
            return -1;
        }
        const ROWS = grid.length;
        const COLS = grid[0].length;
        let queue = [];
        queue.push([0,0]);
        let ans = 1;

        while(queue.length > 0){
            let len = queue.length;
            for(let i = 0; i < len; i++){
                let [r,c] = queue.shift();
                if(r === ROWS-1 && c === COLS-1){
                    return ans;
                }

                // directions we can move in
                // down -> r+1, c
                if(r+1 < ROWS && grid[r+1][c] !== 1){
                    queue.push([r+1,c]);
                }
                // up -> r-1,c
                if(r-1 >= 0 && grid[r-1][c] !== 1){
                    queue.push([r-1,c]);
                }
                // left -> r, c-1
                if(c-1 >= 0 && grid[r][c-1] !== 1){
                    queue.push([r,c-1]);
                }
                // right -> r,c+1
                if(c+1 < COLS && grid[r][c+1] !== 1){
                    queue.push([r,c+1]);
                }
                // upRight -> r-1,c+1
                if(r-1 >= 0 && c+1 < COLS && grid[r-1][c+1] !== 1){
                    queue.push([r-1,c+1]);
                }
                // downRight -> r+1,c+1
                if(r+1 < ROWS && c+1 < COLS && grid[r+1][c+1] !== 1){
                    queue.push([r+1,c+1]);
                }
                // downLeft -> r+1,c-1
                if(r+1 < ROWS && c-1 >= 0 && grid[r+1][c-1] !== 1){
                    queue.push([r+1,c-1]);
                }
                // upLeft -> r-1,c-1
                if(r-1 >= 0 && c-1 >= 0 && grid[r-1][c-1] !== 1){
                    queue.push([r-1,c-1]);
                }
                grid[r][c] = 1;
            }
            ans++;
        }
        return -1;
    }
}









