/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
 var findWords = function(board, words) {
    let res = []
    let root = buildTrie(words)
    console.log(root)
};
const buildTrie = (words) => {
    let root = {}
    for(let word in words) {
        let currentNode = root
        for(let char in word) {
            if(!currentNode[char]) currentNode[char] = {}
            currentNode = currentNode[char]
        }
        currentNode[word] = word
    }
    return root
}

const board = [["a","b"],["c","d"]], words = ["abcb"]
console.log(findWords(board, words))