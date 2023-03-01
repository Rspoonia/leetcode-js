var groupAnagrams = function(strs) {
    let hash = {}
    strs.forEach(element => {
        let ltr = element.split('').sort()
        hash[ltr] ? hash[ltr].push(element) : hash[ltr] = [element] 
    });
    const keys = Object.keys(hash)
    return keys.map(item => hash[item])
};

const strs = ["eat","tea","tan","ate","nat","bat"]
console.log(groupAnagrams(strs));