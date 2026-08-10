use std::collections::HashSet;

impl Solution {
    pub fn product_except_self(nums: Vec<i32>) -> Vec<i32> {
        let mut total_prod: i32 = 1;
        let mut ans: Vec<i32> = vec![0i32;nums.len()];
        let mut zero_pos: HashSet<usize> = HashSet::new();

        // if nums.contains(0) we won't be able to do things this way.
        // any pos that doesn't contain a 0 will be 0
        // go through the array and selectively run this algorithm where the number isn't 0

        for (i, n) in nums.iter().enumerate() {
            if *n == 0 {
                zero_pos.insert(i);
            } else {
                total_prod *= n;
            }
        }

        if zero_pos.len() > 1 {
            return ans;
        } else if zero_pos.is_empty() {
            for (i,n) in nums.iter().enumerate() {
                ans[i] = total_prod/nums[i];
            }
        } else {
            for (i, n) in nums.iter().enumerate() {
                if zero_pos.contains(&i){
                    ans[i] = total_prod;
                }
            }
        }


        ans
    }
}
