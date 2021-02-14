/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  // 1. 冒泡排序法，O(n*k)，冒泡排序的原理为相邻两个元素比较，每次循环后最大的元素都在最后或最前，这里只需要处理k次即可。
  // for (let i = 0; i < k; i++) {
  //   // 保证 j + 1 存在，没循环一次则排序好一个元素
  //   for (let j = 0; j < nums.length - 1 - i; j++) {
  //     if (nums[j] > nums[j + 1]) {
  //       [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
  //     }
  //   }
  // }
  // return nums[nums.length - k]


  // 2. 快速排序，O(n*logn)
  // const quick = function(array, left, right) {
  //   if (array.length <= 1) return;
  //   // 循环一次后确定一个元素的位置
  //   let index = partition(array, left, right);
  //   if (left < index - 1) {
  //     quick(array, left, index - 1);
  //   }
  //   if (index < right) {
  //     quick(array, index, right);
  //   }
  // };

  // // 分区
  // const partition = function(array, left, right) {
  //   const pivot = array[Math.floor((left + right) / 2)];
  //   while (left <= right) {
  //     while (array[left] < pivot) {
  //       left++;
  //     }
  //     while (array[right] > pivot) {
  //       right--;
  //     }
  //     if (left <= right) {
  //       swap(array, left, right);
  //       left++;
  //       right--;
  //     }
  //   }
  //   return left;
  // };
  // const swap = (arr, i, j) => {
  //   [arr[i], arr[j]] = [arr[j], arr[i]];
  // }
  // quick(nums, 0, nums.length - 1)

  // return nums[nums.length - k]

  // 堆排序, O(nlogk)
  /**
  * 排序
  * @param {*} array 
  * @param {*} k 排序 k 个元素，k >= 1 && k <= array.length。可解决 topK 问题。
  */
  function heapSort(array, k) {
    var heapSize = array.length;
    var limit = k !== undefined ? heapSize - k : 1

    // 构建堆
    buildHeap(array);
    while (heapSize > limit) {
      heapSize--;
      // 将堆顶的根节点与末尾元素进行交换，剩余的元素反复执行便得到一个有序数组
      swap(array, 0, heapSize);
      heapify(array, heapSize, 0);
    }
  };

  /**
  * 将数组构建成堆。
  */
  function buildHeap(array) {
    var heapSize = array.length;
    for (var i = Math.floor(array.length / 2); i >= 0; i--) {
      heapify(array, heapSize, i);
    }
  };

  /**
  * 构建堆需要满足的条件：
  * 大顶堆：array[i] >= array[2i+1] && array[i] >= array[2i+2]  
  * 小顶堆：array[i] <= array[2i+1] && array[i] <= arr[2i+2]
  */
  function heapify(array, heapSize, i) {
    var left = i * 2 + 1,
      right = i * 2 + 2,
      largest = i;
    if (left < heapSize && array[left] > array[largest]) {
      largest = left;
    }
    if (right < heapSize && array[right] > array[largest]) {
      largest = right;
    }
    if (largest !== i) {
      swap(array, i, largest);
      heapify(array, heapSize, largest);
    }
  }

  function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  heapSort(nums, k)

  return nums[nums.length - k]
};
// @lc code=end

// 参考：https://mp.weixin.qq.com/s/FFsvWXiaZK96PtUg-mmtEw