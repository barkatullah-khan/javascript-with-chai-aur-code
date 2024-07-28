let marval_heros=["barkat","kahn","javed"];
let dc_hero=["adnan","hamad","zahir"];
let combine=marval_heros.concat(dc_hero);
// console.log(combine);
// const allNewHero=[...marval_heros,...dc_hero];//spread operator
// console.log(allNewHero);
const myArr=[1,2,3,[2,3],[5,6,[7,7]],]
let makeOne=myArr.flat(0);
// console.log(makeOne)
console.log(Array.from({name:"barkat"}));