
var wordBreak = function(s, wordDict) {
    const dp = new Array(s.length + 1).fill(false);
     dp[0] = true; 
     for (let i = 0; i < s.length; i++) {
       let substr = s.substr(0, i+1);
       for (let word of wordDict) {
         if (substr.endsWith(word) && dp[i+1 - word.length]) {
           dp[i+1] = true;
           break;
         }
       }
     }
 return dp[s.length];
};