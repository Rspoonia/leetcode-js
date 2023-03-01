var zigzagLevelOrder = function(root) {
    let arr = []
    const traverse = (root, level) => {
        if(!root) return 
        if(arr[level]) arr[level].push(root.val)
        else arr[level] = [root.val]
        traverse(root.left, level+1)
        traverse(root.right, level+1)
    }
    traverse(root, 0)
    return arr.map((item, index) => index % 2 === 0 ? item : item.reverse())
};
const root = [3,9,20,null,null,15,7]

const out = zigzagLevelOrder(root)
console.log('======', out)
