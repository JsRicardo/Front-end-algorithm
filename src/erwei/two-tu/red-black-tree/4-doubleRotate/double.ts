import { Change, INode, INodeType } from "../2-pingheng/pingheng";

export class DoubleRotate extends Change {
    public static change(root: INode): INode {
        if (!root) { return null; }

        if (this.isBlance(root) || (root.right == null && root.left == null)) {
            return root;
        }
        if (root.left != null) {
            root.left = this.change(root.left);
        }

        if (root.right != null) {
            root.right = this.change(root.right);
        }

        const leftDeep = this.getDeep(root.left);
        const rightDeep = this.getDeep(root.right);

        if (Math.abs(leftDeep - rightDeep) < 2) {
            return root;
        } else if (leftDeep > rightDeep) { // 左边深， 右单旋
            const changeTreeDeep = this.getDeep(root.right && root.right.left),
                noChangeTreeDeep = this.getDeep(root.right && root.right.right);
            if (changeTreeDeep > noChangeTreeDeep) {
                root.left = this.rightRotate(root.left as INodeType);
            }
            let newRoot = this.rightRotate(root);

            if (newRoot) {
                newRoot.right = this.change(newRoot.right);
            }
            newRoot = this.change(newRoot);
            return newRoot;
        } else { // 右边深， 左单旋
            const changeTreeDeep = this.getDeep(root.right && root.right.left),
                noChangeTreeDeep = this.getDeep(root.right && root.right.right);
            if (changeTreeDeep > noChangeTreeDeep) {
                root.right = this.rightRotate(root.right as INodeType);
            }
            let newRoot = this.leftRotate(root);
            if (newRoot) {
                newRoot.left = this.change(newRoot.left);
            }
            newRoot = this.change(newRoot);
            return newRoot;
        }
    }
}