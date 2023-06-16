
import java.util.LinkedList;
import java.util.Queue;

public class Solution {

    public int maxLevelSum(TreeNode root) {

        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);

        int maxSumOfLevel = Integer.MIN_VALUE;
        int maxLevel = 0;
        int currentLevel = 0;

        while (!queue.isEmpty()) {

            int nodesInCurrentLevel = queue.size();
            int currentSum = 0;
            ++currentLevel;

            while (nodesInCurrentLevel-- > 0) {
                TreeNode node = queue.poll();
                currentSum += node.val;

                if (node.left != null) {
                    queue.add(node.left);
                }
                if (node.right != null) {
                    queue.add(node.right);
                }
            }

            if (currentSum > maxSumOfLevel) {
                maxSumOfLevel = currentSum;
                maxLevel = currentLevel;
            }
        }

        return maxLevel;
    }
}

/*
Class TreeNode is in-built in the solution file on leetcode.com. 
When running the code on the website, do not include this class.
 */
class TreeNode {

    int val;
    TreeNode left;
    TreeNode right;

    TreeNode() {}

    TreeNode(int val) {
        this.val = val;
    }

    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
