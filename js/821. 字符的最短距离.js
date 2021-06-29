/*
 * @Description: 
 * @Version: 1.0
 * @Autor: XuXiaoling
 * @Date: 2021-06-04 10:21:36
 * @LastEditors: XuXiaoling
 * @LastEditTime: 2021-06-29 17:45:34
 */


/**
 * @description: 记录上一个c出现的位置，分别向左向右扫描，得到s中每个元素距离左侧、右侧最近c的距离，求最小值就是答案
 *               时间复杂度O(n), 空间复杂度O(1)
 * @param {*} s
 * @param {*} c
 * @return {*}
 * @author: XuXiaoling
 */
var shortestToChar = function(s, c) {
    let res = [];
    let pre = -Infinity;
    for(let i = 0; i < s.length; i++) {
        if(s[i] === c) {
            pre = i;
        }
        res.push(i - pre);
    }
    pre = Infinity;
    for(let i = s.length - 1; i > -1; i--) {
        if(s[i] === c) {
            pre = i;
        }
        res[i] = Math.min(res[i], pre - i);
    }
    return res;
};

/**
 * @description: 通过不定长的滑动窗口，窗口的边界是字符c，使用left、right进行维护
 *               时间复杂度O(n)，空间复杂度O(1)
 * @param {*} s
 * @param {*} c
 * @return {*}
 * @author: XuXiaoling
 */
var shortestToChar1 = function(s, c) {
    let res = [];
    let left = s[0] === c ? 0 : -Infinity;
    let right = s.indexOf(c, 1) !== -1 ? s.indexOf(c, 1) : Infinity;
    for(let i = 0; i < s.length; i++) {
        res.push(Math.min(i - left, right - i));
        if(i === right) {
            left = right;
            right = s.indexOf(c, i + 1) !== -1 ? s.indexOf(c, i + 1) : Infinity;
        }
    }
    return res;
}
