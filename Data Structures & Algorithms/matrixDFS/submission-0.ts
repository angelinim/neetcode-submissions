class Solution {
    res: number = 0;
    /**
     * @param {number[][]} grid
     * @returns {number}
     */
    countPaths(grid: number[][]): number {
        let visited = new Set();
        this.dfs(grid,0,0,visited);
        return this.res;
    }

    dfs(grid, r, c, visited){
        // when do we want to stop?
        // 1. if we have no path forward
        // 2. if we are at our destination
        if(Math.min(r,c) < 0 || 
            visited.has(`${r},${c}`) || 
            c>=grid[0].length || 
            r>=grid.length || 
            grid[r][c] === 1){
                return;
        } else if(r === grid.length-1 && 
                    c === grid[grid.length-1].length-1){
            this.res++;
            return;
        }

        visited.add(`${r},${c}`);
        // up -> r+1, c
        this.dfs(grid, r+1, c, visited);
        // down -> r-1, c
        this.dfs(grid, r-1, c, visited);
        // left -> r, c-1
        this.dfs(grid, r, c-1, visited);
        // right -> r, c+1
        this.dfs(grid, r, c+1, visited);

        visited.delete(`${r},${c}`);
    }
}
