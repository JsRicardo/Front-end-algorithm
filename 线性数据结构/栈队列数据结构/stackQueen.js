var arr = []

// 栈 先入后出
class MyStack {
    arr = []
    // 入栈
    push(val){
        this.arr.push(val)
        return this.arr
    }
    // 出栈
    pop(){
        return this.arr.pop()
    }
}

const stack = new MyStack()

stack.push(1)
stack.push(12)
stack.push(14)
stack.push(15)

console.log(stack.pop())
console.log(stack.pop())
console.log(stack.push(19))
console.log(stack.pop())

// 队列 先入先出
class Queue {
    arr = []
    // 入队
    push (val) {
        this.arr.push(val)
        return this.arr
    }
    // 出队
    pop () {
        return this.arr.shift()
    }
}

const queue = new Queue()

queue.push(1)
queue.push(12)
queue.push(14)
queue.push(15)

console.log(queue.pop())
console.log(queue.pop())
console.log(queue.push(19))
console.log(queue.pop())