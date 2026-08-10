use std::collections::HashMap;

impl Solution {
    pub fn group_anagrams(strs: Vec<String>) -> Vec<Vec<String>> {
        let mut ans: Vec<Vec<String>> = Vec::new();
        let mut map: HashMap<Vec<u32>, Vec<String>> = HashMap::new();

        for s in strs {
            let mut chars = vec![0u32;26];

            for c in s.chars() {
                chars[(c as u32 - 'a' as u32) as usize] += 1;
            }

            if let Some(val_vec) = map.get_mut(&chars) {
                val_vec.push(s);
            } else {
                map.insert(chars, vec![s]);
            }
        }

        for (key, val) in map.iter() {
            ans.push(val.clone());
        }

        ans
    }
}
