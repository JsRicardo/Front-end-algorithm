const arr = new Array(10000);

for (let i = 0; i < 10000; i++) {
    arr[i] = Math.floor(Math.random() * 10000);
}

let num = 0;

export function search(arr: number[], target: number) {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < arr.length; i++) {
        num += 1;
        if (arr[i] === target) { return true; }
    }
    return false;
}

interface INodeType {
    value: number;
    left: INodeType | null;
    right: INodeType | null;
}

type INode = INodeType | null;

export class BuildSearchTree {
    public readonly root: INode | null;
    private arr: number[];

    constructor() {
        this.arr = this.createArr();
        this.root = this.init();
    }
    // 初始化数组
    private createArr(): number[] {
        // tslint:disable-next-line: no-shadowed-variable
        const arr: number[] = new Array(10000);

        for (let i = 0; i < 10000; i++) {
            arr[i] = Math.floor(Math.random() * 10000);
        }

        return arr;
    }

    private node(value): INode {
        return {
            value,
            left: null,
            right: null,
        };
    }
    /**
     * 连接节点
     * @param root 根节点
     * @param num 需要连接的数
     */
    // tslint:disable-next-line: no-shadowed-variable
    private addNode(root: INode, num: number): void {
        if (root == null || root.value == num) { return; } // 如果这个数存在，则不作处理
        if (root.value < num) { // 大的数放右边
            if (root.right == null) { root.right = this.node(num); }
            this.addNode(root.right, num);
        } else { // 小的数放左边
            if (root.left == null) { root.left = this.node(num); }
            this.addNode(root.left, num);
        }
    }
    /**
     * 创建二叉搜索树
     */
    private init(): INode | null {
        if (this.arr == null || this.arr.length == 0) { return null; }
        const root: INode = this.node(arr[0]); // 选定数组第0位作为根节点
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.arr.length; i++) {
            this.addNode(root, this.arr[i]);
        }
        return root;
    }
}
const root = new BuildSearchTree().root;

/**
 * 二叉树搜索
 * @param root 根节点
 * @param target 目标数
 */
let num2 = 0;
export function searchByTree(root: INode | null, target: number): boolean {
    if (root == null) { return false; }
    num2 += 1;
    if (root.value == target) { return true; }
    if (root.value < target) { return searchByTree(root.right, target); }
    if (root.value > target) { return searchByTree(root.left, target); }
    return false;
}

console.log(searchByTree(root, 1000)); // false
console.log(num2); // 15
console.log(search(arr, 1000)); // false
console.log(num); // 10000