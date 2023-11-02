const arr = [1,2,3,4,5];
const result = arr.reduce((acc,cur,idx)=>{
    return acc+=cur}, 0);
console.log(result);