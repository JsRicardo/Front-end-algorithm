export class Tu {
    public neighbor: Tu[] = [];
    constructor(
        public readonly value: string,
    ) {
        this.value = value;
    }
}

export class TuSearch {
    /**
     * 图的深度优先搜索
     * @param node 传入一个图的节点
     * @param target 需要搜索的节点的值
     * @param path 可选参数 默认为空， 搜索走过的路径
     */
    public static deepSearch(node: Tu, target: string, path: Tu[] = []): boolean {
        if (path.indexOf(node) !== -1) { return false; } // 如果路劲里面存在搜索的节点，则代表已经搜索过
        if (node.value === target) { return true; }
        path.push(node);
        let result = false;
        for (let i = 0, len = node.neighbor.length; i < len; i++) {
            result = result || this.deepSearch(node.neighbor[i], target, path);
        }
        return result;
    }
    /**
     * 图的广度优先搜索
     * @param nodes 传入图的节点数组
     * @param target 需要搜索的节点的值
     * @param path 可选参数 默认为空， 搜索走过的路径
     */
    public static bfs(nodes: Tu[], target: string, path: Tu[] = []): boolean {
        if (nodes.length === 0) { return false; }
        let nextNodes: Tu[] = [];
        for (let i = 0, len = nodes.length; i < len; i++) {
            if (path.indexOf(nodes[i]) !== -1) { continue; } // 如果走过这条路径，不做处理，继续

            path.push(nodes[i]); // 记录路径

            if (nodes[i].value === target) {
                return true;
            } else {
                nextNodes = nextNodes.concat(nodes[i].neighbor); // 如果没找到，就把下一层的neighbor全放入下一次循环
            }
        }
        return this.bfs(nextNodes, target, path);
    }
}