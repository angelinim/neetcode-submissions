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
        type RowCol = [r: number,c: number];
        let stk: RowCol[] = [];
        let sColor = image[sr][sc];
        let cur: [r: number,c: number] = [sr,sc];

        stk.push(cur);
        while(stk.length > 0){
            let [r,c] = stk.pop();
            image[r][c] = color;
            if(r-1 >= 0 && image[r-1][c] === sColor){
                stk.push([r-1,c]);
            }
            if(r+1 < image.length && image[r+1][c] === sColor){
                stk.push([r+1,c]);
            }
            if(c-1 >= 0 && image[r][c-1] === sColor){
                stk.push([r,c-1])
            }
            if(c+1 < image[0].length && image[r][c+1] === sColor){
                stk.push([r,c+1])
            }
        }
        return image;
    }
}








