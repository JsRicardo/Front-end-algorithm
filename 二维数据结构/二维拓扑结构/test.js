// 拓扑结构
function Node(value) {
    this.value = value
    this.neighbor = []
}

var node1 = new Node(1)
var node2 = new Node(2)
var node3 = new Node(3)
var node4 = new Node(4)

node1.neighbor.push(node2, node3)
node2.neighbor.push(node1, node4)
node3.neighbor.push(node1, node4)
node4.neighbor.push(node2, node3)

// 构建二叉树
function TwoNode(val) {
    this.val = val
    this.left = null
    this.right = null
}

var a = new TwoNode('a')
var b = new TwoNode('b')
var c = new TwoNode('c')
var d = new TwoNode('d')
var e = new TwoNode('e')
var f = new TwoNode('f')
var g = new TwoNode('g')

a.left = b
a.right = c
b.left = e
b.right = f
c.left = g

// 前序遍历
function qianxu(node) {
    if (node === null) return
    console.log(node.val)
    qianxu(node.left)
    qianxu(node.right)
}
// 中序遍历
function zhongxu(node) {
    if (node === null) return
    qianxu(node.left)
    console.log(node.val)
    qianxu(node.right)
}

// 后序遍历
function houxu(node) {
    if (node === null) return
    qianxu(node.left)
    qianxu(node.right)
    console.log(node.val)
}

// 根据前序后序 还原二叉树
var qian = ['a', 'b', 'e', 'f', 'c', 'g', ]
var zhong = ['b', 'e', 'f', 'a', 'c', 'g', ]
var num = 0
function huanyuan(qian, zhong) {
    if (qian == null || zhong == null || qian.length == 0 || zhong.length == 0 || qian.length != zhong.length) return null;
    var root = new TwoNode(qian[0]) // 创建二叉树 根据前序找到根节点
    var zhongIdx = zhong.indexOf(root.val) // 在中序中找到根节点位置
    var qLeft = qian.slice(1, zhongIdx + 1) // 前序左子树
    var qRight = qian.slice(zhongIdx + 1, qian.length) // 前序右子树
    var zLeft = zhong.slice(0, zhongIdx) // 中序左子树
    var zRight = zhong.slice(zhongIdx + 1, zhong.length) // 中序右子树
    root.right = huanyuan(qLeft, zLeft)
    root.left = huanyuan(qRight, zRight)
    return root
}
var root = huanyuan(qian, zhong)