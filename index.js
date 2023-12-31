/**
* 
* Look-and-Say Sequence
* Find the n’th term in Look-and-say (Or Count and Say) Sequence. The look-and-say sequence is the sequence of the below integers:
* 1, 11, 21, 1211, 111221, 312211, 13112221, 1113213211, …
* The first term is "1"
* Second term is "11", generated by reading first term as "One 1"
* (There is one 1 in previous term)
* Third term is "21", generated by reading second term as "Two 1"
* Fourth term is "1211", generated by reading third term as "One 2 One 1"
* and so on										
* How to find n’th term?
* Example:										
* Input: n = 3
* Output: 21										
* Input: n = 5
* Output: 111221
*/


/**
* @name nextTerm
* @description Generate the next term in the sequence
* @param   seq => Is the value in the seq that will be transformed
* @returns next :  String
*/
const nextTerm = (seq) => {
    let next = "";
    let counter = 1;
    
    for (let i = 0; i < seq.length; i++) {
        if (seq[i] === seq[i + 1]) {
            counter++;
        } else {
            next += counter.toString() + seq[i];
            counter = 1;
        }
    }
    
    return next;
};

/**
* @name    lookANDSay
* @description generates the look and say sequence using next term function
* @param   nValue  is the value that will be used for the iteration to generate the look and say sequence
* @returns seq : String
* 
* */ 
const lookANDSay = (nValue) => {
    let seq = "1";
    for (let i = 1; i < nValue; i++) {
        seq = nextTerm(seq);
    }
    return seq;
};


console.log(lookANDSay(3)); // Output: "21"
console.log(lookANDSay(5)); // Output: "111221"
console.log(lookANDSay(4)); // Output: "11221"

