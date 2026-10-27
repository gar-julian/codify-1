// Problem 2
const largestMystery = (arr, mysteryFunc) => {
    // let largest = -99999999
    // let somePass = false

    // for (let i = 0; i < arr.length; i++) {
    //     if (mysteryFunc(arr[i]) && arr[i] > largest) {
    //         largest = arr[i]
    //         somePass = true
    //     }
    // }
    // if (!somePass) { 
    //     return 'No number passes the function!'
    // }

    // return largest 
    const alltrue = arr.filter((value) => mysteryFunc(value) == true) 

    if (!alltrue[0]) {
        return 'No number passes the function!'
    }

    return Math.max(...alltrue)


};

export default largestMystery;
