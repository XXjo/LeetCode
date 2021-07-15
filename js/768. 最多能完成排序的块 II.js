/*
 * @Description: 
         思路1： 利用单调栈，找到局部最大值（只要遇到比栈顶元素小的元素a，记录当前栈顶元素top，并不断弹出；直到后续的栈顶元素小于top或者单调栈为空，则压入top）。
                单调栈的长度就最多能分块的个数
                时间复杂度：不知道；空间复杂度O(n)
 * @Version: 1.0
 * @Autor: XuXiaoling
 * @Date: 2021-07-15 17:30:13
 * @LastEditors: XuXiaoling
 * @LastEditTime: 2021-07-15 17:32:14
 */
var maxChunksToSorted = function(arr) {
    const stack = [];
    for(let i = 0; i < arr.length; i++) {
        if(stack.length > 0 && stack[stack.length - 1] > arr[i]) {
            let top = stack.pop();
            while(stack.length > 0 &&  stack[stack.length - 1] > arr[i]) {
                stack.pop();
            }
            stack.push(top);
        }
        else {
            stack.push(arr[i]);
        }
    }
    return stack.length;
};

let arr = [1, 0, 2, 3, 4];
let res = maxChunksToSorted(arr);
console.log(res);