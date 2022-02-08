let msg = window.document.getElementById("msg")
let img = window.document.getElementById("imagem")
let data = new Date()
let hora = data.getHours()

msg.innerHTML = (`<strong>Agora são ${hora} horas.</strong></br></br> `)

function carregar() {

  if (hora >= 0 && hora < 12) {

    document.body.style.background = '#BDB76B'

    img.src = 'fotomanha.png'

    msg.innerHTML += "<strong>Bom Dia!!</strong>"

  } else if (hora >= 12 && hora < 18) {

    document.body.style.background = '#FF8C00'

    img.src = 'fototarde.png'

    msg.innerHTML += "<strong>Boa Tarde!!</strong>"

  } else {

    img.src = 'fotonoite.png'

    document.body.style.background = '#191970'

    msg.innerHTML += "<strong>Boa Noite!!</strong>"
  }

}
