
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function (root) {
    //const {Queue} = require('@datastructures-js/queue');
    //Queue<TreeNode>
    const queue = new Queue();
    queue.enqueue(root);

    let maxSumOfLevel = Number.MIN_SAFE_INTEGER;
    let maxLevel = 0;
    let currentLevel = 0;

    while (!queue.isEmpty()) {

        let nodesInCurrentLevel = queue.size();
        let currentSum = 0;
        ++currentLevel;

        while (nodesInCurrentLevel-- > 0) {
            const node = queue.dequeue();
            currentSum += node.val;

            if (node.left !== null) {
                queue.enqueue(node.left);
            }
            if (node.right !== null) {
                queue.enqueue(node.right);
            }
        }

        if (currentSum > maxSumOfLevel) {
            maxSumOfLevel = currentSum;
            maxLevel = currentLevel;
        }
    }
    return maxLevel;
};


/*
 Function TreeNode is in-built in the solution file on leetcode.com. 
 When running the code on the website, do not include this function.
 */
/**
 * @param {number} val
 * @param {TreeNode} left
 * @param {TreeNode} right
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}
