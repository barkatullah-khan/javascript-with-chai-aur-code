// const Array=[1,2,3]
// const Total=Array.reduce((acc,currval)=>{
//   console.log(`acc: ${acc} and ${currval}`);
//   return acc +currval;

// },0)
// console.log(Total)

const courses = [
  { name: 'Web Development Bootcamp',
     price: 999 },
  { name: 'Data Science Masterclass',
     price: 1299 },
  { name: 'Machine Learning for Beginners', 
    price: 799 },
  { name: 'Digital Marketing Pro', 
    price: 899 },
  { name: 'UI/UX Design Course', 
    price: 699 },
  { name: 'Python Programming Essentials',
     price: 499 },
  { name: 'JavaScript Deep Dive', 
    price: 599 }
];
const customer=courses.reduce((acc,currval)=>{
  return acc +currval.price
},0)
console.log(customer)