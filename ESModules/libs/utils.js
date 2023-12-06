//named export
// function echo(msg) {
//     return msg
// }
// export function sum(...nums) {
//     return nums.reduce((acc,cur)=>cur+acc,0)
// }
// export const MAX_VALUE = 100

//*can use only function that have "export" in front of function
//main.js use import {sum,MAX_VALUE} from './libs/utils'

//export list
// function echo(msg) {
//     return msg
// }
// function sum(...nums) {
//     return nums.reduce((acc,cur)=>cur+acc,0)
// }
// const MAX_VALUE = 100
// export {sum as SumOfNums,echo,MAX_VALUE}
//You can use 'as' to rename the function according to export side needs.
// main.js use import {SumOfNums,echo,MAX_VALUE} from './libs/utils'

//default (only one can export)
// function echo(msg) {
//     return msg
// }
// export default function sum(...nums) {
//     return nums.reduce((acc,cur)=>cur+acc,0)
// }
// const MAX_VALUE = 100
// **or
// function echo(msg) {
//     return msg
// }
// function sum(...nums) {
//     return nums.reduce((acc,cur)=>cur+acc,0)
// }
// const MAX_VALUE = 100
// export {sum as default}
//You can export only 'sum' function but when you import 
//import side can change the name by according your needs.
// main.js use import x from './libs/utils'

// Conclude or Combined
function echo(msg) {
    return msg
}
export default function sum(...nums) {
    return nums.reduce((acc,cur)=>cur+acc,0)
}
const MAX_VALUE = 100
export {sum as default, echo , MAX_VALUE}
// main.js use import sum,{echo,MAX_VALUE} from './libs/utils'






