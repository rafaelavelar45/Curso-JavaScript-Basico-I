let amigo = {nome: 'Jose',
 sexo: 'M',
 peso: 84.8,
 engordar(p = 0){
     
     this.peso += p

 }}
amigo.engordar (2)
console.log(`${amigo.nome} pesa ${amigo.peso} Kg`)