// in array have 0 based existing..
//shalow copy (same reference copy)
//Deep copy (not the same reference copy)

const arr = new Array(1,3,4,2,4,4)
// console.log(arr[1]);

//array methods 

// arr.push(7);
// arr.unshift(9);
// arr.shift(5)
// console.log(arr)

// console.log(arr.includes(9));
// console.log(arr.indexOf(4));

const marvel_heroes = ["spiderman","Ironman", "thor" ]
const dc_heroes = ["superman","flash" , "batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)

// const all_heroes= marvel_heroes.concat(dc_heroes)
// console.log(all_heroes)

// const all_hero = [...marvel_heroes,...dc_heroes]
// console.log(all_hero)

// const another_arr = [1,2,3,[4,3,9],2,4,[2,3,4,[3,2]]]
// const new_arr = another_arr.flat(Infinity).toString();
// console.log(new_arr)

console.log(Array.isArray("nehasingh"));
console.log(Array.from("nehasingh")) //convert string to array..
console.log(Array.from({name:"nehasingh"})) //interesting

let s1=100
let s2=200
let s3=300
console.log(Array.of(s1,s2,s3))

//from of is methods....