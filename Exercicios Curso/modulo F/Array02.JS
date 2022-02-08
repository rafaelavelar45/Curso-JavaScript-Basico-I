let valor = [8, 1, 7, 4, 2, 9]
valor.sort()
//console.log(valor)
/*
console.log(valor[0])
console.log(valor[1])
console.log(valor[2])
console.log(valor[3])
console.log(valor[4])
console.log(valor[5])


for(let pos = 0;pos < valor.length; pos++){
    console.log(`A posiçao ${pos} tem o valor ${valor[pos]}`)
}
*/

for( let pos in valor){
    console.log(`A posiçao ${pos} tem o valor ${valor[pos]}`)
}
