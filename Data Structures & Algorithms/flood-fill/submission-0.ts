class Solution {
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */
    floodFill(
        image: number[][],
        sr: number,
        sc: number,
        color: number,
    ): number[][] {
        if(image[sr][sc] === color){
            return image;
        }
        this.dfs(image, image[sr][sc], sr,sc, color);
        return image;
    }

    dfs(image, sColor, r, c, fColor){
        // at what point do we want to break out?
        // 1. if there are no adjecent pixels with sColor
        //      or the r,c goes out of bounds
        if(Math.min(r,c) < 0 || 
            r >= image.length || 
            c >= image[0].length || 
            image[r][c] != sColor){
            return;
        }
        // make the color the fColor if it is sColor
        image[r][c] = fColor;
        // console.log(r,c)

        // we have 4 options for moving
        // up -> r+1,c
        this.dfs(image, sColor, r+1, c, fColor);
        // down -> r-1,c
        this.dfs(image, sColor, r-1, c, fColor);
        // left -> r,c-1
        this.dfs(image, sColor, r, c-1, fColor);
        // right -> r,c+1
        this.dfs(image, sColor, r, c+1, fColor);
    }
}










