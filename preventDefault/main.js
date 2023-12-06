const submitButton = document.querySelector('button')
// console.log(submitButton)
submitButton.addEventListener('click', (e) => {
  e.preventDefault()
  const allInputElements = document.querySelectorAll('input')
  console.log(allInputElements)
  const isComplete = Array.from(allInputElements).every(
    (input) => input.value.length > 0
  )
  const pElement = document.querySelector('p:nth-child(1)')
  if (isComplete) {
    pElement.textContent = 'Your input are complete'
  } else {
    pElement.innerHTML =
      '<span style="color:red"> Missing some value, plese enter</span>'
  }
})