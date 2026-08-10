impl Solution {
    pub fn two_sum(numbers: Vec<i32>, target: i32) -> Vec<i32> {
        // two pointer
        // since the numbers vector is sorted from least to greatest
        // I think I can start iterating from the end of it
        // if the number in the vec is greater than the target -> continue
        
        let len = numbers.len();

        for i in (0..len).rev() {
            let diff = target - numbers[i];
            for j in 0..i {
                // println!("{}:{}",numbers[i], numbers[j]);
                if numbers[j] == diff {
                    return vec![(j+1) as i32,(i+1) as i32];
                }
            }
        }

        vec![0,1]
    }
}
