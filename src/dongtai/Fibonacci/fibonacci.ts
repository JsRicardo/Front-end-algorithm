// 给出第n位，问第n位的值为多少

class Solution {
    /**
     * 传统斐波那切数列解法
     * @param n 第几位
     * @returns { Number } 第几位的值
     */
    public static classicFib(n: number): number {
        if (n <= 0) { return -1; }
        if (n === 1) { return 0; }
        if (n === 2) { return 1; }

        let a = 0, b = 1, c;

        for (let i = 3; i <= n; i++) {
            c = a + b;
            a = b;
            b = c;
        }
        return c;
    }
    /**
     * 利用斐波那切数列的规则，第n位的值 = 第n-1位 + 第n-2位
     * @param n 第几位
     */
    public static newFib(n: number): number {
        if (n <= 0) { return -1; }
        if (n === 1) { return 0; }
        if (n === 2) { return 1; }
        return this.newFib(n - 1) + this.newFib(n - 2);
    }
}