let num = document.getElementById('fnum')

let lista = document.getElementById('flista')

let resp = document.getElementById('res')

let valores = []

function isNumero(n) {

    if (Number(n) >= 1 && Number(n) <= 100) {

        return true
    } else {
        return false
    }


}

function inLista(n, l) {

    if (l.indexOf(Number(n)) != -1) {

        return true

    } else {
        return false
    }

}

function adicionar() {

    if (isNumero(num.value) && !inLista(num.value, valores)) {

        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} foi adicionado`
        lista.appendChild(item)
        resp.innerHTML = ''

    } else {

        window.alert('Valor invalido ou adicionado!!')


    }
    num.value = ''
    num.focus() // voltar a piscar o cursor

}

function finalizar() {

    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!!')
    } else {

        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let posi in valores) {
            soma += valores[posi]

            if (valores[posi] > maior)
                maior = valores[posi]

            if (valores[posi] < menor)
                menor = valores[posi]
        }
        media = soma / tot
        resp.innerHTML = ''
        resp.innerHTML += `<p>Ao todo temos ${tot} numeros cadastrados</p>`
        resp.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        resp.innerHTML += `<p>O menor valor informado é ${menor}</p>`
        resp.innerHTML += `<p>Somando todos os valores teremos ${soma}</p>`
        resp.innerHTML += `<p>A media dos valores sao ${media}</p>`

    }
}
