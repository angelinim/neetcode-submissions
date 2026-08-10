class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid: number[][]): number {
        // iterate through the grid
        // put all 1s in a set
        // put all 2 pos in a queue
        // bfs, etc etc.
        let ROWS = grid.length;
        let COLS = grid[0].length;
        let fruitPos = new Set();
        let rotq = [];

        for(let [r,row] of grid.entries()){
            for(let [c, col] of row.entries()){
                if(col === 1){
                    fruitPos.add(`${r}${c}`);
                } else if(col === 2){
                    rotq.push([r,c]);
                }
            }
        }

        if(fruitPos.size === 0){
            return 0;
        }
        
        let ans = -1;

        while(rotq.length > 0){
            const len = rotq.length;
            for(let i = 0; i < len; i++){
                let [r,c] = rotq.shift();
                // up -> r-1,c
                if(r-1>=0 && grid[r-1][c] === 1){
                    rotq.push([r-1,c])
                    grid[r-1][c] = 2;
                }
                // down -> r+1,c
                if(r+1<ROWS && grid[r+1][c] === 1){
                    rotq.push([r+1,c])
                    grid[r+1][c] = 2;
                }
                // left -> r,c-1
                if(c-1>=0 && grid[r][c-1] === 1){
                    rotq.push([r,c-1])
                    grid[r][c-1] = 2;
                }
                // right -> r,c+1
                if(c+1<COLS && grid[r][c+1] === 1){
                    rotq.push([r,c+1])
                    grid[r][c+1] = 2;
                }
                grid[r][c] = 2;
                fruitPos.delete(`${r}${c}`);
            }
            ans++;
        }

        if(fruitPos.size > 0){
            return -1;
        }
        
        return ans;
    }
}





