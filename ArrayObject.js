const jsUser={
  name: "barkat",
  "full name": "barkat-wazir",

  email:"barkat@wazir",

  passowrd: "123",
  city:"pak"
}
// console.log(jsUser.city);
// console.log(jsUser["city"]);
// console.log(jsUser["full name"]);
jsUser.Greetings=function(){
  console.log(`hello world my name is ${this.name}`);
};
 console.log(jsUser.Greetings());