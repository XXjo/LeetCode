/*
 * @Description:    递归关系：左子树是否相同 与 右子树是否相同的；递归出口：根节点p,q都为null；p，q其中一个为null；
                    p，q的val不同；
                    时间复杂度：O(n)，遍历一次节点
                    空间复杂度: O(n)，递归栈

 * @Version: 1.0
 * @Autor: XuXiaoling
 * @Date: 2021-07-31 17:32:00
 * @LastEditors: XuXiaoling
 * @LastEditTime: 2021-07-31 17:45:45
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 var isSameTree = function(p, q) {
    if(p === null && q === null) return true;
    else if(p === null || q === null) return false;
    else if(p.val !== q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};