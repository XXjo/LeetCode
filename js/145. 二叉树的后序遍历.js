/*
 * @Description: 
 * @Version: 1.0
 * @Autor: XuXiaoling
 * @Date: 2021-08-03 00:00:49
 * @LastEditors: XuXiaoling
 * @LastEditTime: 2021-08-15 21:22:43
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @description:    迭代，官方题解。节点有左节点就入栈，一直找到最左侧的叶子节点。然后出栈，
 *                  判断是否其是否有右孩子，若有右孩子就加入栈；若不存在右孩子，或者是右孩子已经
 *                  访问过（利用cur.right == prev判断该节点的右孩子是否已经被访问），则输出
 *                  时间复杂度O(n),因为只将树的节点遍历一次
 *                  空间复杂度O(n)
 * @param {*} root
 * @return {*}
 * @author: XuXiaoling
 */
var postorderTraversal = function(root) {
    let stack = [];
    let res = [];
    let cur = root;
    let prev = null;
    while(cur !== null || stack.length > 0) {
        while(cur !== null) {
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack.pop();
        //cur.right == prev表示该节点的右节点已经被访问
        if(cur.right === null || cur.right == prev) {
            res.push(cur.val);
            prev = cur; 
            cur = null; //为了防止死循环
        }
        else {
            stack.push(cur);
            cur = cur.right;
        }
    }
    return res;
}

/**
 * @description:    迭代，使树的节点入栈，当该节点没有左孩子且没有右孩子|| 该节点左孩子或右孩子已经被输出时，
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
var postorderTraversal3 = function(root) {
    let res = [];
    recursion(root, res);
    return res
};





let node3 = new TreeNode(3);
let node2 = new TreeNode(2);
let node1 = new TreeNode(1);
node1.right = node2;
node2.left = node3;
console.log(postorderTraversal(node1));