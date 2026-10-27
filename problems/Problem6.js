// Problem 6
const namesAndAges = (names, ages) => {
    return names.map((name, i) => ({name, age: ages[i]})) 
};

export default namesAndAges;
