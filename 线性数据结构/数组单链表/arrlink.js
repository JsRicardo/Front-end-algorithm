function Node(value) {
    this.value = value;
    this.next = null;
}
var a = new Node(1);
var b = new Node(2);
var c = new Node(3);
a.next = b;
b.next = c;

function bian(root) {
    var temp = root;
    while (true) {
        if (temp != null) {
            console.log(temp.value, 'xunhuan');
        } else {
            break;
        };
        temp = temp.next;
    }

}
// bian(a)

function digui(root) {
    if (root == null) return;
    console.log(root.value, 'digui');
    digui(root.next);
}
// digui(a)

/* 链表的逆置 */
// 1. 先找到链表的最后一个节点
function reverseLink(root) {
    if (root.next.next == null) {
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
// bian(reverse)

// 冒泡排序
const arr = [4,1,2,3,9,5,7,6,8]
// 比较
function compare(a, b) {
    if (a > b) return true
    else return false
}
// 交换
function exchange(arr, idxa, idxb) {
    var temp = arr[idxa]
    arr[idxa] = arr[idxb]
    arr[idxb] = temp
}

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
// sort(arr)
// console.log(arr)

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
// choose(arr)
// console.log(arr)

// 快速排序

// 1. 简单快速排序，牺牲空间 好理解
function quickSort (arr) {
    if(arr == null || arr.length <= 1) return arr
    // 1. 选出一个标准位置
    var location = arr[0]
    // 2. 比较， 比标准位置大的放一边，小的放另一边
    var left = [], right = []
    // 因为 0 已经做标准位置了，所以从 1 开始循环
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < location) left.push(arr[i])
        else right.push(arr[i])
    }
    quickSort(left)
    quickSort(right)
    left.push(location)
    return left.concat(right)
}
// console.log(quickSort(arr))

// 2. 标准快速排序
function realyQuickSort (arr, begin = 0, end = arr.length) {
    if(arr == null || arr.length <= 1) return arr;
    if (begin >= end -1) return;
    // 建立左右指针
    var left = begin, right = end;
    do {
        // 移动指针
        do left++; 
            while(left < right && arr[left] < arr[begin]);
        do right--; 
            while(right > left && arr[right] > arr[begin]);
        if (left < right) exchange(arr, left, right);
    } while (left < right);
    var exchangePoint = left == right ? right - 1 : right;
    exchange(arr, begin, exchangePoint)
    realyQuickSort(arr, begin, exchangePoint)
    realyQuickSort(arr, exchangePoint + 1, end)
}
// var arr1 = [1]
// realyQuickSort(arr1)
// console.log(arr1)