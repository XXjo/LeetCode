"""
1、二叉搜索树中序遍历即可得到排好序的数组
2、计算数组相邻元素的差值
"""

class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def InOrderR(self, root, res):
        if root:
            self.InOrderR(root.left, res)
            res.append(root.val)
            self.InOrderR(root.right, res)

    def getMinimumDifference(self, root: TreeNode) -> int:
        min_cha = 65535
        res = []
        self.InOrderR(root, res)
        for i in range(0, len(res) - 1):
            cha = abs(res[i] - res[i + 1])
            min_cha = min(cha, min_cha)
        return min_cha

if __name__ == '__main__':
    node1 = TreeNode(1)
    node2 = TreeNode(3)
    node3 = TreeNode(2)
    node1.right = node2
    node2.left = node3
    min_cha = Solution().getMinimumDifference(node1)
    print(min_cha)