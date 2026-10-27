// Problem 4
const indexAndConcat = (arr) => {
    for (let i = 0; i < arr.length; i++) { 
        arr[i] = i + arr[i]
    }
    return arr
};

export default indexAndConcat;
