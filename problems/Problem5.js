// Problem 5
const uppercaseStringsContainingWaldo = (arr) => {
    let waldos = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes("waldo")) {
            console.log("true")
            waldos.push(arr[i].toUpperCase())
        }
    }
    return waldos
};

// console.log(uppercaseStringsContainingWaldo([
//   "Who is waldo?",
//   "where is he?",
//   "what is waldo doing?",
//   "WalDo is already here",
// ]))

export default uppercaseStringsContainingWaldo;
