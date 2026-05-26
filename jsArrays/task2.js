// Task 2: Copying with mutation using map

const initialArray = [1, 2, 3, 4, 5];

// Multiply each element by its index
// 1*0=0, 2*1=2, 3*2=6, 4*3=12, 5*4=20
const mutatedArray = initialArray.map((value, index) => value * index);

console.log(mutatedArray);
