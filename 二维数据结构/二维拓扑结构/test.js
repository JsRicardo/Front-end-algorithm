// 拓扑结构
function Node (value) {
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
node4.neighbor.push(nod2, node3)