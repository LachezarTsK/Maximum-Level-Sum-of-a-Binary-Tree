
#include <queue>
using namespace std;

/*
Struct TreeNode is in-built in the solution file on leetcode.com. 
When running the code on the website, do not include this struct.
 */
struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;

    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode* left, TreeNode* right) : val(x), left(left), right(right) {}
};

class Solution {
    
public:
    int maxLevelSum(TreeNode* root) const {
        queue<TreeNode*> queue;
        queue.push(root);

        int maxSumOfLevel = INT_MIN;
        int maxLevel = 0;
        int currentLevel = 0;

        while (!queue.empty()) {

            int nodesInCurrentLevel = queue.size();
            int currentSum = 0;
            ++currentLevel;

            while (nodesInCurrentLevel-- > 0) {
                TreeNode* node = queue.front();
                queue.pop();
                currentSum += node->val;

                if (node->left != nullptr) {
                    queue.push(node->left);
                }
                if (node->right != nullptr) {
                    queue.push(node->right);
                }
            }

            if (currentSum > maxSumOfLevel) {
                maxSumOfLevel = currentSum;
                maxLevel = currentLevel;
            }
        }

        return maxLevel;
    }
};
