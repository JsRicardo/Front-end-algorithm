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
    this.value = val
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

// 二叉树的搜索
// 树的搜索 图的搜索 爬虫逻辑 搜索引擎爬虫逻辑

/**
 * 深度优先搜索
 * 广度优先搜索
 */

// 搜索 f 在不在这个二叉树中
function deepSearch(node, target) {
    if (node == null) return false
    if (node.value == target) return true
    var left = deepSearch(node.left, target)
    var right = deepSearch(node.right, target)
    return left || right
}

/**
 * 二叉树的广度优先
 */
function widthSearch(nodeList, target) {
    if (nodeList == null || nodeList.length == 0) return false
    var childList = []
    for (var i = 0; i < nodeList.length; i++) {
        if (nodeList[i] != null && nodeList[i].value == target) {
            return true
        } else {
            childList.push(nodeList[i].left)
            childList.push(nodeList[i].right)
        }
    }
    return widthSearch(childList, target)
}

/**
 * 二叉树的比较
 */
var a1 = new TwoNode('a')
var b1 = new TwoNode('b')
var c1 = new TwoNode('c')
var d1 = new TwoNode('d')
var e1 = new TwoNode('e')
var f1 = new TwoNode('f')
var g1 = new TwoNode('g')

a1.left = b1
a1.right = c1
b1.left = e1
b1.right = f1
c1.left = g1

function compareTree(tree1, tree2) {
    if (tree1 == tree2) return true
    if (tree1.value == tree2.value) {
        var left = compareTree(tree1.left, tree2.left)
        var right = compareTree(tree1.right, tree2.right)
        return left && right
    }
    return false
}
console.log(compareTree(a, a1))

function diffList(tree1, tree2, diffList = []) {
    if (tree1 == tree2) return diffList
    // 修改 删除 新增 三种情况
    if (tree1.value != tree2.value) {
        diffList.push({
            type: 'update',
            origin: tree1,
            now: tree2
        })
        // 修改需要继续向下递归，有可能子节点没有修改
        diffList(tree1.left, tree2.left)
        diffList(tree1.right, tree2.right)
    } else if (tree1 != null && tree2 == null) {
        diffList.push({
            type: 'delete',
            origin: tree1,
            now: null
        })
    } else if (tree1 == null && tree2 != null) {
        diffList.push({
            type: 'add',
            origin: null,
            now: tree2
        })
    } else {
        diffList(tree1.left, tree2.left)
        diffList(tree1.right, tree2.right)
    }
    return diffList
}

var domTree1 = [{
        name: 'dom1',
        value: 'div',
        children: [{
                name: 'dom2',
                value: 'div',
                children: [],
            },
            {
                name: 'dom3',
                value: 'p',
                children: [],
            }
        ]
    },
    {
        name: 'dom4',
        value: 'div',
        children: [{
                name: 'dom5',
                value: 'div',
                children: [],
            },
            {
                name: 'dom6',
                value: 'p',
                children: [],
            }
        ]
    },
]

// function diffDom(tree1, tree2, diffDom = []) {
//     if (tree1 == tree2) return difDom
//     var len1 = tree1.length,
//         len2 = tree2.length;
//     for (var i = 0; i < len1; i++) {
//         if (tree1[i])
//     }
// }
var root = huanyuan(qian, zhong)


// 最小生成树

// 普利姆算法(加点法)
