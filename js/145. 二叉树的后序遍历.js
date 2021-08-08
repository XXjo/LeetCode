/*
 * @Description: 
 * @Version: 1.0
 * @Autor: XuXiaoling
 * @Date: 2021-08-03 00:00:49
 * @LastEditors: XuXiaoling
 * @LastEditTime: 2021-08-08 18:20:43
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var recursion = function(root, res) {
    if(root === null) {
        return res;
    }
    else {
        recursion(root.left, res);
        recursion(root.right, res);
        res.push(root.val);
    }
}
/**
 * @description: 使用递归
 * @param {TreeNode} root
 * @return {number[]} res
 * @author: XuXiaoling
 */
var postorderTraversal = function(root) {
    let res = [];
    recursion(root, res);
    return res
};


/**
 * @description:    使树的节点入栈，当该节点没有左孩子且没有有孩子|| 该节点左孩子或右孩子已经被输出时，
 *                  出栈，并且将出栈的节点值放入res中
 *                  时间复杂度O(n),空间复杂度O(n)
 * @param {*} root
 * @return {number[]}
 * @author: XuXiaoling
 */
var postorderTraversal2 = function(root) {
    let res = [];
    let stack = [];
    if(root !== null) {
        let cur = root;
        stack.push(root);
        while(stack.length > 0) {
            let top = stack[stack.length - 1];
            if((top.left === null && top.right === null) || top.left === cur || top.right === cur) {
                cur = stack.pop();
                res.push(cur.val);
            }
            else {
                if(top.right) {
                    stack.push(top.right);
                }
                if(top.left) {
                    stack.push(top.left);
                }
            }
        }
    }
    return res;
}



let node3 = new TreeNode(3);
let node2 = new TreeNode(2);
let node1 = new TreeNode(1);
node1.right = node2;
node2.left = node3;
console.log(postorderTraversal2(node1));