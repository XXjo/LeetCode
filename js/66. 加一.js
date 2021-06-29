/*
 * @Description: 
 * @Version: 1.0
 * @Autor: XuXiaoling
 * @Date: 2021-05-21 14:36:42
 * @LastEditors: XuXiaoling
 * @LastEditTime: 2021-06-04 15:51:15
 */
/**
 * @description: 利用余数判断当前位是否加一，时间复杂度O(n), 空间复杂度O(1)
 * @param {*} digits
 * @return {*}
 * @author: XuXiaoling
 */
var plusOne = function(digits) {
    let res = [];
    let carry = 1;
    for(let i = digits.length - 1; i >= 0; i--) {
        let cur = (digits[i] + carry) % 10;
        carry = (digits[i] + carry) > 9 ? 1 : 0;
        res.unshift(cur);
    }
    if(carry > 0) {
        res.unshift(carry);
    }
    return res;
};

var res = plusOne([1,2,3]);
console.log(res);