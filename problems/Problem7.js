// Problem 7

const doubleAge = (obj) => {
    const parsed = JSON.parse(obj) 
    if (parsed.age) {
        parsed.age *= 2 
    } else {
        parsed.age = 0
    }
    return parsed 
};

export default doubleAge;
