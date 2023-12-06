//1. select target HTML object
const submitButton = document.querySelector('button')
// console.log(submitButton)
// 2 register handler function on a target HtML object
//add multiple handler functions on the same event type and HTML object
const doSomething = (e) => {
  console.log(`Good bye, ${e.target.id}`)
}

submitButton.addEventListener('click', (e) => {
  console.log(`hello, ${e.target.id}`)
})
submitButton.addEventListener('click', doSomething)
//remove event listener
submitButton.removeEventListener('click', doSomething)