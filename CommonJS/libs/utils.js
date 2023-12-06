function echo(msg) {
    return msg
}
function sum(...nums) {
    return nums.reduce((acc,cur)=>cur+acc,0)
}
const MAX_VALUE = 100
//Common JS
//module.exports = {echo1:echo,sum:sum,MAX_VALUE:MAX_VALUE}
// export that can change name of variable by key
//module.exports = {echo,sum,MAX_VALUE}
// cause we use name of key same name of function (echo=echo)
//console.log(sum(1,3,4,5)) test sum