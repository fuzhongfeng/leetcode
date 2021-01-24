/**
 * Initialize your data structure here.
 */
var MyStack = function() {
  this.queue = []
};

/**
* Push element x onto stack. 
* @param {number} x
* @return {void}
*/
MyStack.prototype.push = function(x) {
  // 原 queue 长度
  var len = this.queue.length
  this.queue.push(x)

  // 模拟入栈操作，将x放到队列头部，但队列不存在头部插入方法
  // x元素不处理，while结束后x元素在队列的头部
  while(len-- > 0) {
      var head = this.queue.shift()
      this.queue.push(head)
  }
};

/**
* Removes the element on top of the stack and returns that element.
* @return {number}
*/
MyStack.prototype.pop = function() {
  return this.queue.shift()
};

/**
* Get the top element.
* @return {number}
*/
MyStack.prototype.top = function() {
  return this.queue[0]
};

/**
* Returns whether the stack is empty.
* @return {boolean}
*/
MyStack.prototype.empty = function() {
  return this.queue.length === 0
};

/**
* Your MyStack object will be instantiated and called as such:
* var obj = new MyStack()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.empty()
*/