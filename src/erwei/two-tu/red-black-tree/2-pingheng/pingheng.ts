
export interface INodeType {
    value: number;
    left: INodeType | null;
    right: INodeType | null;
}

export type INode = INodeType | null;

class Pingheng {
    // 获取二叉树深度
    public static getDeep(root: INode): number {
        if (root == null) { return 0; }
        const leftDeep = this.getDeep(root.left),
            rightDeep = this.getDeep(root.right);
        return Math.max(leftDeep, rightDeep) + 1; // 当前还有一层， 所以要 + 1
    }

    // 判断是否是平衡二叉树
    public static isBlance(root: INode): boolean {
        if (root == null) { return true; }
        const leftDeep = this.getDeep(root.left),
            rightDeep = this.getDeep(root.right);
        if (Math.abs(leftDeep - rightDeep) > 1) {
            // 差值大于1 不平衡
            return false;
        } else {
            return this.isBlance(root.right) && this.isBlance(root.left);
        }
    }
}
export class Change extends Pingheng {
    // 旋转二叉树
    public static change(root: INode): INode {
        if (!root) { return null; }

        if (this.isBlance(root)) { return root; }

        if (root.left != null) { root.left = this.change(root.left); }

        if (root.right != null) { root.right = this.change(root.right); }

        const leftDeep = this.getDeep(root.left);
        const rightDeep = this.getDeep(root.right);

        if (Math.abs(leftDeep - rightDeep) < 2) {
            return root;
        } else if (leftDeep > rightDeep) { // 左边深， 右单旋
            return this.rightRotate(root);
        } else { // 右边深， 左单旋
            return this.leftRotate(root);
        }
    }
    // 左单旋
    protected static leftRotate(root: INodeType): INode {
        // 找到新根
        const newRoot = root.right;
        // 找到变化分支
        const changeTree = root.right && root.right.left;
        // 当前旋转节点的右孩子为变化分支
        root.right = changeTree;
        // 新根的左孩子为旋转节点
        if (newRoot) { newRoot.left = root; }
        // 返回新根
        return newRoot;
    }
    // 右单旋
    protected static rightRotate(root: INodeType): INode {
        // 找到新根
        const newRoot = root.left;
        // 找到变化分支
        const changeTree = root.left && root.left.right;
        // 当前旋转节点的左孩子为变化分支
        root.left = changeTree;
        // 新根的右孩子为旋转节点
        if (newRoot) { newRoot.right = root; }
        // 返回新根
        return newRoot;
    }
}
