function verificar() {
  let data = new Date()
  let ano = data.getFullYear()
  let fano = document.getElementById('txtano')
  let res = document.querySelector('div#res')

  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!!')
  } else {
    let fsex = document.getElementsByName('radsex')
    let idade = ano - Number(fano.value)
    res.innerHTML = `Idade calculada: ${idade}`
    let genero = ''
    let img = document.createElement('img') // criei um elemento img
    img.setAttribute('id', 'foto')//atribuir id foto em img
    if (fsex[0].checked) {

      genero = 'HOMEM'

      if (idade >= 0 && idade <= 16) {
        //criança
        img.setAttribute('src', 'homemcriança.png')
      } else if (idade >= 17 && idade <= 22) {
        //jovem
        img.setAttribute('src', 'homemadulto.png')
      } else if (idade > 22 && idade <= 65) {
        img.setAttribute('src', 'homemcoroa.png')
        //adulto
      } else {
        //idoso
        img.setAttribute('src', 'homemidoso.png')
      }

    } else if (fsex[1].checked) {

      genero = 'MULHER'

      if (idade > 0 && idade <= 16) {
        //criança 
        img.setAttribute('src', 'mulhercriança.png')
      } else if (idade >= 17 && idade <= 22) {
        //jovem
        img.setAttribute('src', 'mulherjovem.png')
      } else if (idade > 22 && idade <= 65) {
        //adulto
        img.setAttribute('src', 'mulhercoroa.png')
      } else {
        //idoso
        img.setAttribute('src', 'mulheridosa.png')
      }

    }
    res.innerHTML = `Dectamos que você é um(a) ${genero} de aproximadamente ${idade} anos!!`
    res.appendChild(img) // adicionar elemento
  }

}

