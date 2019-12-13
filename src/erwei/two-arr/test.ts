const arr: number[][] = [
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7],
];

function luoxuan(arr: number[][]): number[] {
    // tslint:disable-next-line: curly
    if (arr.length === 0 || !arr) return [];
    const result: number[] = [];
    let left = 0,
            right = arr[0].length - 1,
            top = 0,
            bottom = arr.length - 1,
            direction = "right";
    while (left <= right && top <= bottom) {
            if (direction === "right") {
                for (let i = left; i <= right; i++) {
                    result.push(arr[top][i]);
                }
                top++;
                direction = "bottom";
            }
            if (direction === "bottom") {
                for (let i = top; i <= bottom; i++) {
                    result.push(arr[i][right]);
                }
                right--;
                direction = "left";
            }
            if (direction === "left") {
                for (let i = right; i >= left; i--) {
                    result.push(arr[bottom][i]);
                }
                bottom--;
                direction = "top";
            }
            if (direction === "top") {
                for (let i = bottom; i >= top; i--) {
                    result.push(arr[i][left]);
                }
                left++;
                direction = "right";
            }
        }

    return result;
}
console.log(luoxuan(arr));