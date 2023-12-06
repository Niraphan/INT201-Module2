const userElement = document.getElementById('input-user')

userElement.addEventListener('focus', () => {
  console.log('Your focus is on username')
})
userElement.addEventListener('blur', () => {
  console.log('Your username input textbox is blured')
})