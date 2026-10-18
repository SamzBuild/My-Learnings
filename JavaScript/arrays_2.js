const users = [
  { id: 1, name: "Ali", age: 24, city: "Karachi", active: true, skills: ["js", "react"] },
  { id: 2, name: "Sara", age: 31, city: "Lahore", active: false, skills: ["css", "html"] },
  { id: 3, name: "Hamza", age: 19, city: "Karachi", active: true, skills: ["js", "node"] },
  { id: 4, name: "Ayesha", age: 28, city: "Islamabad", active: true, skills: ["react", "css", "js"] },
  { id: 5, name: "Usman", age: 35, city: "Lahore", active: false, skills: ["node", "mongodb"] },
  { id: 6, name: "Zara", age: 22, city: "Karachi", active: true, skills: ["html"] },
];

const user = users.map(function(value){
    return value.name
});
// console.log(user);

const activeUsers = users.filter(function(value){
    return value.active === true
})
// console.log(activeUsers);

const findUser = users.find((value)=> value.id === 4)
const findNonUser = users.find((value)=> value.id === 99)
console.log(findNonUser);
// console.log(findUser);

const check = users.map( (value)=>{
    if (value.age>30) {
        return `${value.name} is greater than 30 `
    }
    else{
        return `${value.name} is lower than 30`
    }
} )
// console.log(check);

let checkAge = users.some((value)=>value.age > 30)
let checkAges = users.every((value)=>value.age > 18
)
// console.log(checkAge);
// console.log(checkAges);

let newUsers = [...users, { id: 7, name: "Yousaf", age: 20, city: "Multan", active: true, skills: ["html", "AI"] }]
// console.log(newUsers);
let userFirst = newUsers.shift(newUsers[0])
let remainingUser = [...newUsers]
// console.log(remainingUser);

