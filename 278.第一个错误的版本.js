/*
 * @lc app=leetcode.cn id=278 lang=javascript
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
// var solution = function(isBadVersion) {
//     /**
//      * @param {integer} n Total versions
//      * @return {integer} The first bad version
//      */
//     return function(n) {
//         var left = 1;
//         if (isBadVersion(left)) {
//             return left
//         }

//         while(left < n) {
//             var mid = Math.floor((left + n) / 2)

//             if (!isBadVersion(mid) && isBadVersion(mid + 1)) {
//                 return mid + 1
//             } else if(!isBadVersion(mid) && !isBadVersion(mid + 1)) {
//                 left = mid + 1
//             } else if(isBadVersion(mid) && isBadVersion(mid + 1)) {
//                 n = mid // 保证mid右侧有值
//             }
//         }
//     };
// };
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        var left = 1, right = n;
        while (left < right) { // 左右在同一位置跳出
            var mid = Math.floor((left + right) / 2);
            if (isBadVersion(mid)) {
                right = mid; // right 一直停留在 bad 上
            } else {
                left = mid + 1; // left 会一直向右移动，最多到第一个 bad 上。
            }
        }
        return left; // left === right, 这都题的精华所在
    };
};

// @lc code=end

