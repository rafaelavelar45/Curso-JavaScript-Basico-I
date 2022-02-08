function buscar() {
  let ini = document.getElementById('txti')
  let fim = document.getElementById('txtf')
  let passo = document.getElementById('txtp')
  let res = document.getElementById('res')

  if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {

    window.alert('Digite um número para continuar!!')

  } else {
    res.innerHTML = 'Contando:</br>'
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if (p <= 0) {

      window.alert('Passo 0 invalido Considerando Passo 1')
      p = 1
    }
    if (i < f) {
      for (let c = i; c <= f; c += p)
        res.innerHTML += `${c}\u{1F449}`
    } else {
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += `${c}\u{1f449}`
      }
    }
    res.innerHTML += `\u{1F3C1}`
  }

}