function Stack(...initialValues) {
  /**
   * For example, new Stack('first', 'second', 'third') creates an instance of Stack with the 'third' being on top of stack...
   * Call to Stack with empty list creates empty stack.
   * @typedef {Stack} Stack
   * @param  {...any} initialValues - comma separated list of initial stack values
   * @property {number} size - number of elements in stack at the moment
   */

  let _head = null
  let _size = 0

  /**
   * This function adds value specified by parameter val to the top of the stack.
   * @param {any} val 
   * @returns No return value
   */
  this.push = (val) => {
    let item = {val: val}
    if (_head != null) {
      item.prev = _head
    }
    _head = item
    _size++
  }

  /**
   * This function returns top element of the stack and remove it from the stack. If stack is empty the function returns null.
   * @returns {any} the element from the top of the stack if stack is not empty
   * @returns null if stack is empty
   */
  this.pop  = ()    => {
    if (_size === 0) {
      return null
    }
    
    let ret = _head.val
    _head = _head.prev
    _size--
    return ret
  }

  /**
   * This function swaps two top elements in stack. If stack has one element or is empty then function does nothing.
   */
  this.swap = function() {
    if (_size > 1) {
      const tmp = _head.val
      _head.val = _head.prev.val
      _head.prev.val = tmp
    }
  }

  /**
   * This function is same as pop except it does not remove element from the top of the stack.
   * @returns {any} the element from the top of the stack if stack is not empty
   * @returns null if the stack is empty
   */
  this.peek = ()  => _size === 0 ? null: _head.val

  /**
   * Boolean indicating if stack is empty
   * @returns {bool} Boolean indicating if stack is empty
   */
  this.isEmpty = () => _size === 0

  Object.defineProperty(this, 'size', {
    get: function() {return _size}
  })

  // do initialization
  for (const val of initialValues) {
    this.push(val)
  }
}

module.exports = Stack