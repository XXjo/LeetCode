/*
 * @Description: 
 * @Version: 1.0
 * @Autor: XuXiaoling
 * @Date: 2021-06-29 17:43:43
 * @LastEditors: XuXiaoling
 * @LastEditTime: 2021-06-29 17:59:24
 */
/**
 * @description: 使用非"]"的字符入栈，遇到"]"时，字符出栈，在遇到"["之前出栈的字符拼接得repeatString，随后数字字符出栈拼接转化成对应数字就是repeatNum，根据
 *               上述两个变量，得到重复的完整字符串，随后压入栈重复上述操作。
 *               时间复杂度未O(n)，空间复杂度为O(n)
 * @param {*} s
 * @return {*}
 * @author: XuXiaoling
 */
var decodeString = function(s) {
    let stack = [];
    for(let ele of s) {
        if(ele !== "]") {
            stack.push(ele);
            continue;
        }
        let repeatString = "";
        let repeatNum = "";
        //弹出repeatString，无法使用索引-1获取到数组的最后一个值
        while(stack && stack[stack.length - 1] != "[") {
            repeatString = stack.pop() + repeatString;
        }
        //弹出"["
        stack.pop();
        //弹出repeatNum
        while(stack && !isNaN(stack[stack.length - 1])) {
            repeatNum = stack.pop() + repeatNum;
        }
        stack.push(repeatString.repeat(Number(repeatNum)));
    }
    return stack.join("");
}