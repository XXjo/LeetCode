/*
 * @Description: 
 * @Version: 1.0
 * @Autor: XuXiaoling
 * @Date: 2021-08-03 00:01:31
 * @LastEditors: XuXiaoling
 * @LastEditTime: 2021-08-15 18:29:18
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function recursion(root, res) {
    if(root === null) {
        return res;
    }
    else {
        recursion(root.left, res);
        res.push(root.val);
        recursion(root.right, res);
    }
}
/**
 * @description: 递归
 * @param {TreeNode} root
 * @return {number[]}
 * @author: XuXiaoling
 */
var inorderTraversal = function(root) {
    let res = [];
    recursion(root, res);
    return res;
};



/**
 * @description:    迭代，官方题解。节点有左节点就入栈，一直找到最左侧的叶子节点。然后出栈，
 *                  判断是否其是否有右孩子，若有右孩子就加入栈，然后重复上述操作
 *                  时间复杂度O(n),因为只将树的节点遍历一次
 *                  空间复杂度O(n)
 * @param {TreeNode} root
 * @return {number[]}
 * @author: XuXiaoling
 */
var inorderTraversal1 = function(root) {
    let stack = [];
    let res = [];
    let cur = root;
    while(cur !== null || stack.length > 0) {
        while(cur !== null) {
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack.pop();
        res.push(cur.val);
        cur = cur.right;
    }
    return res;
}


let node5 = new TreeNode(5);
let node4 = new TreeNode(4);
let node3 = new TreeNode(3);
let node2 = new TreeNode(2);
let node1 = new TreeNode(1);
let node0 = new TreeNode(0);
node0.left = node1;
node0.right = node2;
node1.left = node3;
node1.right = node4;
node2.right = node5;
console.log(inorderTraversal1(node0));