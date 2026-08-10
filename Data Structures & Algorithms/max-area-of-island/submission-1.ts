class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid: number[][]): number {
        // another bfs in a grid scenario
        type RowCol = [r:number, c:number];
        const ROWS = grid.length;
        const COLS = grid[0].length;
        let stk: RowCol[] = [];
        let maxArea = 0;
        stk.push([0,0]);

        while(stk.length > 0){
            let [r,c] = stk.pop();
            if(grid[r][c] === 2){
                continue;
            }
            if(grid[r][c] === 0){
                if(r-1 >= 0){
                    stk.push([r-1,c]);
                }
                if(r+1 < ROWS){
                    stk.push([r+1, c])
                }
                if(c-1 >= 0){
                    stk.push([r,c-1]);
                }
                if(c+1 < COLS){
                    stk.push([r, c+1])
                }
                grid[r][c] = 2;
            } else{
                // here we check the area of the island
                // with a separate bfs
                let area = 0;
                let istk: RowCol[] = [];
                istk.push([r,c]);
                while(istk.length > 0){
                    [r,c] = istk.pop();
                    if(grid[r][c] === 2){
                        continue;
                    }
                    area++;
                    if(r-1 >= 0){
                        if(grid[r-1][c] === 1){
                            istk.push([r-1,c]);
                        } else if(grid[r-1][c] === 0) {
                            stk.push([r-1,c]);
                        }
                    } 
                    if(r+1 < ROWS ){
                        if(grid[r+1][c] === 1){
                            istk.push([r+1, c]);
                        } else if(grid[r+1][c] === 0){
                            stk.push([r+1, c]);
                        }
                    }
                    if(c-1 >= 0){
                        if(grid[r][c-1] === 1){
                            istk.push([r,c-1]);
                        } else if(grid[r][c-1] === 0){
                            stk.push([r,c-1]);
                        }
                    }
                    if(c+1 < COLS){
                        if(grid[r][c+1] === 1){
                            istk.push([r, c+1]);
                        }else if(grid[r][c+1] === 1){
                            stk.push([r, c+1]);
                        }
                    }
                    grid[r][c] = 2;
                }
                maxArea = Math.max(area, maxArea);
            }

        }

        return maxArea;
    }
}












