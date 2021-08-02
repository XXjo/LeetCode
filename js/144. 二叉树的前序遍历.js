/*
 * @Description: 
 * @Version: 1.0
 * @Autor: XuXiaoling
 * @Date: 2021-08-03 00:00:33
 * @LastEditors: XuXiaoling
 * @LastEditTime: 2021-08-03 00:13:52
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    var stack = [];
    var res = [];
    let cur = root;


};