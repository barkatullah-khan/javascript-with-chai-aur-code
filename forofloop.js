let Array=[1,2,3,4]
for(let num of Array){
  // console.log(num)

}
let Greeting="barkat"
for(let Greet of Greeting){
  // console.log(Greet);
}
const map =new Map()
map.set("pak","first")
map.set("In","india")
map.set("fr","france")
// console.log(map.get("pak"));
// console.log(map)
for(let key of map){
  // console.log(key)

}
const course={
  c: "c languare",
  js: "javaScript",
  cpp: " c++"
}
for(const key in course){
  // console.log(`${key} is shurtcut for ${course[key]}`)
}
// forEach loop
const myArray=["barkat","khan","wazir"]
myArray.forEach(function (element){
  // console.log(element)
})
const myCoding=[
  {
    languageName: "javaScript",
    languaeFile:"js"
  },
  {
  languageName:"javaScript",
  languaeFile:"py"
  },
]
myCoding.forEach( (val)=>{
console.log(val.languaeFile)

})