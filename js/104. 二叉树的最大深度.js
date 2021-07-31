/*
 * @Description:    使用递归。对于节点n，深度等于max(左子树深度+1, 右子树深度+1)
                    然后取左右孩子遍历后深度结果的最大值
                    时间复杂度:O(n)，相当于遍历一次二叉树节点
                    空间复杂度:O(n)，递归栈的空间
 * @Version: 1.0
 * @Autor: XuXiaoling
 * @Date: 2021-07-27 23:08:49
 * @LastEditors: XuXiaoling
 * @LastEditTime: 2021-07-31 17:29:55
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @description: 
 * @param {TreeNode} root
 * @return {number}
 * @author: XuXiaoling
 */
var maxDepth = function(root) {
    if(root === null) {
        return 0;
    }
    else {
        return Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1);
    }
};