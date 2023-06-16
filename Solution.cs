
using System;
using System.Collections.Generic;

/*
Class TreeNode is in-built in the solution file on leetcode.com. 
When running the code on the website, do not include this class.
 */
public class TreeNode
{
    public int val;
    public TreeNode left;
    public TreeNode right;
    public TreeNode(int val = 0, TreeNode left = null, TreeNode right = null)
    {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

public class Solution
{
    public int MaxLevelSum(TreeNode root)
    {
        Queue<TreeNode> queue = new Queue<TreeNode>();
        queue.Enqueue(root);

        int maxSumOfLevel = int.MinValue;
        int maxLevel = 0;
        int currentLevel = 0;

        while (queue.Count > 0)
        {

            int nodesInCurrentLevel = queue.Count;
            int currentSum = 0;
            ++currentLevel;

            while (nodesInCurrentLevel-- > 0)
            {
                TreeNode node = queue.Dequeue();
                currentSum += node.val;

                if (node.left != null)
                {
                    queue.Enqueue(node.left);
                }
                if (node.right != null)
                {
                    queue.Enqueue(node.right);
                }
            }

            if (currentSum > maxSumOfLevel)
            {
                maxSumOfLevel = currentSum;
                maxLevel = currentLevel;
            }
        }

        return maxLevel;
    }
}
