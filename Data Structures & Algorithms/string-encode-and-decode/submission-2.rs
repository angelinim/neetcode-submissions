impl Solution {
    pub fn encode(strs: Vec<String>) -> String {
        let mut encoded_string: String = String::new();
        if strs.is_empty() {
            return encoded_string;
        }

        for s in strs {
            let mut encoded_slice: String = String::new();

            for c in s.chars() {
                let char_num = c as u32;
                let str_num = char_num.to_string();

                encoded_slice.push_str(&str_num);
                encoded_slice.push_str("_");
            }
            // remove trailing _
            if let Some(comma) = encoded_slice.pop() {
                // push the str and add a , to separate words in the vec
                encoded_string.push_str(&encoded_slice);
            } else {
                // using a "/" to denote an empty string
                encoded_string.push_str("/");
            }
            encoded_string.push_str(",");            
        }

        // remove trailing ,
        encoded_string.pop();
        // println!("{}", encoded_string);

        encoded_string
    }

    pub fn decode(s: String) -> Vec<String> {
        let mut decoded_strs: Vec<String> = Vec::new();
        if s.is_empty() {
            return decoded_strs;
        }
        let words = s.split(',');

        for w in words {
            let word = w.split('_');
            let mut decoded_slice: String = String::new();
            for c in word {
                if c == "/" {
                    break;
                }
                let code: u32 = c.parse().unwrap();
                let decoded_char = char::from_u32(code).unwrap();
                decoded_slice.push(decoded_char);
            }
            // println!("{}",decoded_slice);
            decoded_strs.push(decoded_slice);
        }

        decoded_strs
    }
}
