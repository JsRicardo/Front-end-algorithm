
export class TreeNode {
    public childs: TreeNode[] = [];

    constructor(
        public readonly value: string,
    ) {
        this.value = value;
    }
}

export class TreeSearch {
    /**
     * 树的深搜
     * @param node 树节点
     * @param target 目标节点的值
     */
    public static deepSearch(node: TreeNode, target: string): boolean {
        if (node.value === target) { return true; }
        let result = false;
        for (let i = 0; i < node.childs.length; i++) {
            if (node.childs.length > 0) {
                result = result || this.deepSearch(node.childs[i], target);
            }
        }
        return result;
    }
    /**
     * 树的广搜
     * @param nodes 树节点数组
     * @param target 目标节点的值
     */
    public static bfs(nodes: TreeNode[], target: string): boolean {
        if (nodes.length === 0) { return false; }
        let childs: TreeNode[] = [];
        for (let i = 0; i < nodes.length; i++) {
            if (nodes[i].value === target) { return true; }
            childs = nodes[i].childs.concat(childs);
        }
        return this.bfs(childs, target);
    }
}
