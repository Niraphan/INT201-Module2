//select the first node with its id
const ulStudents1 = document.getElementById("students")
console.log(ulStudents1)

//select the first node with CSS selector
const ulStudents2 = document.querySelector("#students") //id selector
console.log(ulStudents2)

const programmingLect = document.querySelector(".programming") //class selector
console.log(programmingLect)

const ulStudents3 = document.querySelector('ul[id="students"]') //tag with attribute selector
console.log(ulStudents3)

const ulEle = document.querySelector("ul") //tag name
console.log(ulEle)

const divUl = document.querySelector("div>ul")
console.log(divUl)


//correct, give one string selector
const firstNode1 = document.querySelector('#int101, .courses, #p-01')
console.log(firstNode1)
//incorrect, give more than one string selector
const firstNode2 = document.querySelector('#int101', '.courses', '#p-01')
console.log(firstNode2)
