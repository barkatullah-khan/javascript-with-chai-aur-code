const myarr=[1,2,34,5];
myarr.push(4);
myarr.unshift(0);
myarr.shift();
// console.log(myarr);
// const Newarr=myarr.join();
// console.log(Newarr);
// console.log(myarr);
const NewArr=myarr.slice(1,2);
console.log("slice:" + NewArr);
console.log("orignal:" + myarr);
const NewArr1=myarr.splice(1,2)
console.log("splice:"+ NewArr1);
console.log("ori:"+myarr);
                                 
