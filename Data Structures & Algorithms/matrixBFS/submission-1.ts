class Solution {
    /**
     * @param {number[][]}
     * @returns {number}
     */
    shortestPath(grid: number[][]): number {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        type RowCol = [r:number, c:number];
        let ans = 0;
        let queue: RowCol[] = [];
        let visited: Set<string> = new Set();
        queue.push([0,0]);

        while (queue.length > 0){
            let len = queue.length;
            for(let i = 0; i < len; i++){
                let [r,c] = queue.shift();
                if(r === ROWS-1 && c === COLS-1){
                    return ans;
                }
                if(visited.has(`${r},${c}`)){
                    continue;
                }
                // check each direction to see if we can go there
                // up r-1,c
                if(r-1 >= 0 && grid[r-1][c] !== 1){
                    queue.push([r-1,c]);
                }
                // down r+1,c
                if(r+1 < ROWS && grid[r+1][c] !== 1){
                    queue.push([r+1,c]);
                }
                // right r,c+1
                if(c-1 >= 0 && grid[r][c-1] !== 1){
                    queue.push([r,c-1]);
                }
                // left r, c-1
                if(c+1 < COLS&& grid[r][c+1] !== 1){
                    queue.push([r,c+1]);
                }
                visited.add(`${r},${c}`);
            }
            ans++;
        }
        return -1;
    }
}














