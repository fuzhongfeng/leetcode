/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 * 思路：排序后遍历数组，数组的每一项分别从当前位置向后、两端向中间匹配。相同元素需去重
 */
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  // nums = [-1, 0, 1, 2, -1, -4]
  const result = [];
  const len = nums.length;
  if(!nums || len < 3) return result;
  nums.sort((a, b) => a - b); // 升序排序 [-4, -1, -1, 0, 1, 2]

  for (let i = 0; i < len ; i++) {
      if(nums[i] > 0) break; // 排序后如果当前数字大于0，则三数之和一定大于0，所以结束循环
      if(i > 0 && nums[i] == nums[i-1]) continue; // 去重

      let L = i+1; // 从当前位置开始向右
      let R = len-1; // 结尾位置开始向左

      while(L < R){
          const sum = nums[i] + nums[L] + nums[R];

          if(sum == 0){
              result.push([nums[i],nums[L],nums[R]]);
              while (L<R && nums[L] == nums[L+1]) L++; // 去重
              while (L<R && nums[R] == nums[R-1]) R--; // 去重
              L++;
              R--;
          } else if (sum < 0) { 
            L++;
          } else if (sum > 0) {
            R--;
          }
      }
  }        
  return result;
};
// @lc code=end

