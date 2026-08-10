class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        // start by getting to all nodes
        type RowCol = [r:number,c:number];
        const totalWidth = grid[0].length;
        const totalHeight = grid.length;
        let ans = 0
        let visited = new Set();
        let stk: RowCol[] = [];
        stk.push([0,0]);

        while(stk.length > 0){
            let [r,c] = stk.pop();
            if(visited.has(`${r},${c}`)){
                continue;
            }
            if(grid[r][c] === "0"){
                if(r-1 >= 0){
                    stk.push([r-1,c]);            
                }
                if(r+1 < totalHeight){
                    stk.push([r+1,c]);            
                }
                if(c-1 >= 0){
                    stk.push([r,c-1]);            
                }
                if(c+1 < totalWidth){
                    stk.push([r,c+1]);            
                }
                visited.add(`${r},${c}`);
            } else {
                // increment island count
                ans++
                // find all adjacent 1s
                // add to visited
                // if adjacent is 0 add to stk
                let istk: RowCol[] = [];
                istk.push([r,c]);
                while(istk.length > 0){
                    [r,c] = istk.pop();
                    if(visited.has(`${r},${c}`)){
                        continue;
                    }
                    if(r-1 >= 0){
                        if(grid[r-1][c] === "0"){
                            stk.push([r-1,c]);
                        }else {
                            istk.push([r-1,c]);
                        }
                    }
                    if(r+1 < totalHeight){
                        if(grid[r+1][c] === "0"){
                            stk.push([r+1,c]);
                        }else {
                            istk.push([r+1,c]);
                        }
                    }
                    if(c-1 >= 0){
                        if(grid[r][c-1] === "0"){
                            stk.push([r,c-1]);
                        }else {
                            istk.push([r,c-1]);
                        }          
                    }
                    if(c+1 < totalWidth){
                        if(grid[r][c+1] === "0"){
                            stk.push([r,c+1]);
                        }else {
                            istk.push([r,c+1]);
                        }       
                    }
                    visited.add(`${r},${c}`);
                }
            }
        }

        return ans;
    }
}
