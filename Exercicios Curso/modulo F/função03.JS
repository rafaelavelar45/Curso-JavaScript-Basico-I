/*let v = function (x) {
   return x * 2
}
console.log(v(5))*/

function num(n1 = 0, n2 = 0) {

    if (n1 * n2 >= 10) {
        console.log('ERRO')
        return n1 * n2
        
    } else {
        console.log('ACEITO')
        return n1 * n2
    }

}
let res = num(3,1)
console.log(res)



