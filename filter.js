const myNum=[1,2,34,5,6,7]
// const num=myNum.filter((num)=>num>4)
// console.log(num);
// const num=myNum.filter((num)=>{
//   return num>4})
// console.log(num);
const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    age: 30
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    age: 25
  },
  {
    id: 3,
    name: "Sam Johnson",
    email: "sam.johnson@example.com",
    age: 35
  }
];

// const Newuser=users.filter((use)=> use.id>2)
// console.log(Newuser)
// const newCustomer=users.filter((ag)=>{
//  return ag.age=='25' && ag.id==2})
// console.log(newCustomer)
const NewArray=[1,2,3,4,5,6,7]
const Array=NewArray.map((num)=>{
return  num + 10
} )
console.log(Array)