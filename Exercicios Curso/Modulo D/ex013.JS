 var agora = new Date()
 var hora = agora.getHours()
 var data = new Date()
 var dat = data.getDay()
 var minutes = new Date()
 var minu = minutes.getMinutes()
 var segounds = new Date()
 var segs = segounds.getSeconds()
 console.log(`Agora sao exatamente ${hora}:${minu}:${segs} horas, na Data ${data} do dia ${dat}`)
if(hora <= 11 && hora >= 6){
    console.log('Bom Dia!!')
}else if(hora >= 12 && hora <= 18){
console.log('Boa Tarde!!')
}else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite!!')
}else {
    console.log('Boa Madrugada!!')
}

