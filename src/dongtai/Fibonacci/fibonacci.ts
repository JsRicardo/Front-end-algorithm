// 给出第n位，问第n位的值为多少

class Solution {
    /**
     * 传统斐波那切数列解法
     * @param n 第几位
     * @returns { Number } 第几位的值
     */
    public static classicFib(n: number): number {
        if (n <= 1) { return n; }

        let a = 1, b = 1, c;

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
        if (n <= 1) { return n; }
        return this.newFib(n - 1) + this.newFib(n - 2);
    }
}

class Memoize {
    // 缓存已经计算的斐波那切数
    private static cache: number[] = [0, 1]

    /**
     * 自顶向下的 动态规划 解 斐波那切数
     * @param n 第几位数
     */
    public static memoize(n: number) {
        if (n < 1) return n;
        // 如果已经缓存就取缓存
        if (this.cache[n] !== undefined) return this.cache[n];
        // 没有缓存就计算出来缓存进去
        this.cache[n] = this.memoize(n - 1) + this.memoize(n - 2);

        return this.cache[n]
    }
}