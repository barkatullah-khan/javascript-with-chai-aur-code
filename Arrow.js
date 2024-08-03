// const user={
//   username:"barkat",
//   price:99,
// welcomemMessage: function(){
//   console.log(`${this.username}, welcome to website`);
  // console.log(this)
// }
// }
// user.welcomemMessage()
// user.username="sam"
// user.welcomemMessage()
// console.log(this);
// function chai(){
//   let user="barkat"
//   console.log(this.user)
// }
// chai()

// const chai=()=>{

//   let username="barkat"
//   console.log(this.username)
// }
// chai();
// const AddTwo=(num1,num2)=> num1+num2; 
// const AddTwo=(num1,num2)=>( num1+num2)
const AddTwo=(num1,num2)=>( {username:"barkat"})

console.log(AddTwo(3,4))