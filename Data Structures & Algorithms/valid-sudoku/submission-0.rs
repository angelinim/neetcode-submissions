use std::collections::HashSet;

impl Solution {
    pub fn is_valid_sudoku(board: Vec<Vec<char>>) -> bool {
        // we're just checking for duplicates in:
        // 1) a 3x3 square
        // 2) any row (easy)
        // 3) any column (slightly difficult)
        // the trick to this question will be:
            // figuring out which "box" the current number will be in

        let mut rows: [HashSet<char>; 9] = std::array::from_fn(|_| HashSet::new());
        let mut cols: [HashSet<char>; 9] = std::array::from_fn(|_| HashSet::new());
        let mut squares: [HashSet<char>; 9] = std::array::from_fn(|_| HashSet::new());

        for (i,row) in board.iter().enumerate() {
            for (j,&val) in row.iter().enumerate() {
                if val == '.' {
                    continue;
                }
                println!("row:{} | col: {}", i,j);
                println!("val:{}", val);
                if rows[i].contains(&val) {
                    return false;
                } else {rows[i].insert(val); }
                if cols[j].contains(&val) {
                    return false;
                } else { cols[j].insert(val); }

                // logic for squares of the sudoku board
                match (i,j) {
                    (0..=2,0..=2) => {
                        if squares[0].contains(&val){
                            return false;
                        } else {squares[0].insert(val);}
                    }
                    (3..=5,0..=2) => {
                        if squares[1].contains(&val){
                            return false;
                        } else {squares[1].insert(val);}
                    }
                    (6..=8,0..=2) => {
                        if squares[2].contains(&val){
                            return false;
                        } else {squares[2].insert(val);}
                    }
                    (0..=2,3..=5) => {
                        if squares[3].contains(&val){
                            return false;
                        } else {squares[3].insert(val);}
                    }
                    (3..=5,3..=5) => {
                        if squares[4].contains(&val){
                            return false;
                        } else {squares[4].insert(val);}
                    }
                    (6..=8,3..=5) => {
                        if squares[5].contains(&val){
                            return false;
                        } else {squares[5].insert(val);}
                    }
                    (0..=2,6..=8) => {
                        if squares[6].contains(&val){
                            return false;
                        } else {squares[6].insert(val);}
                    }
                    (3..=5,6..=8) => {
                        if squares[7].contains(&val){
                            return false;
                        } else {squares[7].insert(val);}
                    }
                    (6..=8,6..=8) => {
                        if squares[8].contains(&val){
                            return false;
                        } else {squares[8].insert(val);}
                    }
                    _ => {}
                }
            }
        }

        true
    }
}
