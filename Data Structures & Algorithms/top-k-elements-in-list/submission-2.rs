use std::collections::HashMap;

impl Solution {
    pub fn top_k_frequent(nums: Vec<i32>, k: i32) -> Vec<i32> {
        let mut ans = vec![-1i32;k as usize];
        let mut map: HashMap<i32,i32> = HashMap::new();
        let mut has_space: i32 = k;

        for num in nums {
            let count = map.entry(num).or_insert(0);
            *count += 1;
        }

        let mut pairs: Vec<(&i32, &i32)> = map.iter().collect();
        pairs.sort_by(|a, b| b.1.cmp(a.1));

        for i in 0..k {
            ans[i as usize] = *pairs[i as usize].0;
        }

        ans
    }
}
