use std::collections::HashMap;

impl Solution {
    pub fn is_anagram(s: String, t: String) -> bool {
        let mut map1: HashMap<char, i32> = HashMap::new();
        let mut map2: HashMap<char, i32> = HashMap::new();
        let chars1: Vec<char> = s.chars().collect();
        let chars2: Vec<char> = t.chars().collect();

        if chars1.len() != chars2.len() {
            return false;
        }

        for (c1, c2) in chars1.iter().zip(chars2.iter()) {
            *map1.entry(*c1).or_insert(0) += 1;
            *map2.entry(*c2).or_insert(0) += 1;
        }

        for (key, val) in map1.iter() {
            if let Some(val2) = map2.get(key) {
                if val != val2 {
                    return false;
                }
            } else {
                return false;
            }
        }

        true
    }
}
