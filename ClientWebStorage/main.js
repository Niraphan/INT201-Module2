// localStorage
let counter1 = localStorage.getItem('count')
if (counter === null) {
  counter = 1
  localStorage.setItem('count', counter)
} else localStorage.setItem('count', ++counter)
alert(`counter=${counter}`)
localStorage.removeItem('count')
localStorage.clear()

// //sessionStorage
let counter2 = sessionStorage.getItem('count')
if (counter === null) {
  counter = 1
  sessionStorage.setItem('count', counter)
} else sessionStorage.setItem('count', ++counter)
alert(`counter=${counter}`)
sessionStorage.removeItem('count')
sessionStorage.clear() //all items removed