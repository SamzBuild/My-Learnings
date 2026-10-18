let allStudents = [
  { studentName: "Ali", age: 16, "roll no": 1, class: "10th" },
  { studentName: "Ahmed", age: 15, "roll no": 2, class: "9th" },
  { studentName: "Sara", age: 14, "roll no": 3, class: "8th" },
  { studentName: "Ayesha", age: 17, "roll no": 4, class: "11th" },
  { studentName: "Usman", age: 16, "roll no": 5, class: "10th" },
  { studentName: "Fatima", age: 15, "roll no": 6, class: "9th" },
  { studentName: "Hassan", age: 14, "roll no": 7, class: "8th" },
  { studentName: "Zainab", age: 17, "roll no": 8, class: "11th" },
  { studentName: "Bilal", age: 16, "roll no": 9, class: "10th" },
  { studentName: "Maryam", age: 15, "roll no": 10, class: "9th" },
  { studentName: "Hamza", age: 14, "roll no": 11, class: "8th" },
  { studentName: "Hira", age: 17, "roll no": 12, class: "11th" },
  { studentName: "Saad", age: 16, "roll no": 13, class: "10th" },
  { studentName: "Noor", age: 15, "roll no": 14, class: "9th" },
  { studentName: "Danish", age: 14, "roll no": 15, class: "8th" },
  { studentName: "Iqra", age: 17, "roll no": 16, class: "11th" },
  { studentName: "Usama", age: 16, "roll no": 17, class: "10th" },
  { studentName: "Zoya", age: 15, "roll no": 18, class: "9th" },
  { studentName: "Talha", age: 14, "roll no": 19, class: "8th" },
  { studentName: "Amna", age: 17, "roll no": 20, class: "11th" }
];

let studentNames = allStudents.map( (val) => {
    return val.age
} )
let students = allStudents.filter( (val) => {
    return val.age > 15
} )
let totalAge = studentNames.reduce( (acc, curr) => acc+curr , 0 )