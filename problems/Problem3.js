// Problem 3
const multiplyBy = (arr, multiplier) => {
    // for (let i = 0; i < arr.length; i++) {
    //     arr[i] = arr[i] * multiplier
    // }

    return arr.map((value) => value * multiplier)
};

export default multiplyBy;