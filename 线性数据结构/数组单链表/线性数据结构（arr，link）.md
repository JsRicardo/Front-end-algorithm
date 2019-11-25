# 数据结构

## 一维数据结构 数组和链表

### 数组

数组的特性
1. 存储在物理空间上是连续的
2. 底层的数组长度是不可变的
3. 数组的变量，指向了数组第一个元素的位置

> 操作系统：通过偏移查询数据性能好

* 优点：查询性能好，指定查询某个位置；
* 缺点：
1. 因为数组的空间必须是连续的，所以数组比较大的情况，当系统的空间碎片较多的时候，容易存不下；
2. 因为数组的长度是固定的，所以数组的内容难以被添加和删除；

### 链表
想要传递一个链表，必须传递链表的根节点
**每一个节点都认为自己的根节点**
> 单链表
1. 上一个对象  存着下一个对象的**引用**

``` javascript
var b = {
    value: 1,
    next: null,
}
var a = {
    value: 2,
    next: b
}
console.log(a.next === b) // true
```

2. 链表的特点
1). 空间上不是连续的
2). 每存放一个值，都需要多开销一个引用空间

* 优点：
1. 只要内存足够大，就能存的下，不用担心空间碎片的问题；
2. 链表的添加和删除非常的容易；
* 缺点：
1. 查询速度慢（查询某个位置）
2. 链表每一个节点都需要创建一个指向next的引用，浪费了一定内存空间，当存储的数据越多时，这部分开销的内存影响越小。

``` javascript
function Node (value) {
    this.value = value;
    this.next = null;
}
var a = new Node(1);
var b = new Node(2);
var c = new Node(3);
a.next = b;
b.next = c;
console.log(a.next.value); // 2
```

* 遍历链表
1. 循环遍历
``` javascript
function bian(root) {
    var temp = root;
    while (true) {
        if (temp != null) {
            console.log(temp.value);
        } else {
            break;
        };
        temp = temp.next;
    }
}
```
2. 递归遍历
``` javascript
function digui (root) {
    if (root == null) return;
    console.log(root.value);
    digui(root.next);
}
```

## 链表的逆置
``` javascript
function reverseLink(root) {
    if (root.next.next == null){
        root.next.next = root;
        return root.next;
    } else {
        var res = reverseLink(root.next)
        root.next.next = root
        root.next = null
        return res
    }
}
const reverse = reverseLink(a)
```

# 排序
* 排序的本质是比较 和 交换
``` javascript
> function compare(a, b) {
    if (a > b) return true
    else return false
}
// 交换
function exchange(arr, idxa, idxb) {
    var temp = arr[idxa]
    arr[idxa] = arr[idxb]
    arr[idxb] = temp
}
```

## 冒泡排序
``` javascript
// 循环
function sort(arr) {
    if (arr == null || arr.length <= 1) return arr
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (compare(arr[j], arr[j + 1])) {
                exchange(arr, j, j + 1)
            }
        }
    }
}
```

## 选择排序
``` javascript
// 选择排序
function choose(arr) {
    for (var i = 0; i < arr.length; i++) {
        var maxIndex = 0;
        for(var j = 0; j < arr.length - i; j++) {
            if (compare(arr[j], arr[j + 1])){
                maxIndex = j
            }
        }
        exchange(arr[maxIndex], arr[arr.length - i])
    }
}
```

## 快速排序

1. 简单快速排序，牺牲空间 好理解
``` javascript
function quickSort (arr) {
    if(arr == null || arr.length <= 1) return arr;
    // 1. 选出一个标准位置
    var location = arr[0];
    // 2. 比较，比标准位置大的放一边，小的放另一边
    var left = [], right = [];
    // 因为 0 已经做标准位置了，所以从 1 开始循环
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < location) left.push(arr[i]);
        else right.push(arr[i]);
    };
    quickSort(left);
    quickSort(right);
    left.push(location);
    return left.concat(right);
}
```

2. 标准写法快速排序

不创建新的数组，用数组的index作为指针，对原数组进行操作

``` javascript
// 2. 标准快速排序
function realyQuickSort (arr, begin = 0, end = arr.length) {
    if(arr == null || arr.length <= 1) return arr;
    if (begin = end -1) return;
    // 建立左右指针
    var left = begin, right = end;
    do {
        // 移动指针 当遇到做指针对应的数大于标准位置时，暂时停止一次
        // 当遇到右指针小于标准位置时，暂时停止一次
        // 交换两个指针对应的数组值
        do left++; 
            while(left < right && arr[left] < arr[begin]);
        do right--; 
            while(right > left && arr[right] > arr[begin]);
        if (left < right) exchange(arr, left, right);
    } while (left < right);
    var exchangePoint = left == right ? right - 1 : right;
    exchange(arr, begin, exchangePoint)
    // 交换完一次后得到标准位置在中间的结果数组，递归操作
    realyQuickSort(arr, begin, exchangePoint)
    realyQuickSort(arr, exchangePoint + 1, end)
}
```