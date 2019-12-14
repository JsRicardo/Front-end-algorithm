// 青蛙跳台阶问题
function jump(n: number): number {
    if (n <= 0) return -1;
    if (n === 1) return 1;
    if (n === 2) return 2;
    return jump(n - 1) + jump(n - 2);
}

// 青蛙跳台阶的变态版
// fn = f(n -1) + f(n - 2).....+ f(1) + f(0)
function jump2(n: number): number {
    if (n <= 0) return -1;
    if (n === 1) return 1;
    if (n === 2) return 2;

    let result = 0;

    for (let i = 1; i < n; i++) { // 跳的时候至少要跳一级台阶，所以从 1 开始
        result += jump(n - i);
    }
    return result + 1; // 从0级直接跳到n级 所以+1
}