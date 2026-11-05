const data = ["red", "blue", "green"];
const [first, ...datas] = data
// console.log(datas);

const numbers = [10, 20];

let [one, second, third = 30] = numbers;
console.log(numberOne);


one = 50
// console.log(one);
// console.log(second);
// console.log(third);
// console.log(numbers);

const arr1 = [20, 30, 40, 50]
arr1[1]=10;
// console.log(arr1);

let arr2 = [...arr1]
arr2[1]=20
// console.log(arr2);

const user = {
  name: "Sam",
  age: 27,
  profession: "Developer"
};

user.profession = "graphic"

const { profession } = user;

// console.log(profession);
// console.log(user);

const users = {
  name: "Sam",
  country: undefined
};

const { countries = "Pakistan" } = users;

// console.log(users);
// console.log(countries);

const userValue = {
  name: "Sam",
  age: 27,
  address: {
    city: "Lahore",
    country: "Pakistan"
  }
};

const {name, address:{country}} = userValue
console.log(name);
console.log(country);
