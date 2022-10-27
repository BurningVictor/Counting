var num = window.document.querySelector('input#inum')
var area = window.document.querySelector('select#analisador')
var res = document.querySelector('div#contas')
var botaoad = document.getElementsByClassName ('botaoenvio')
var botaoan = document.getElementsByClassName ('botaoenvio')
var vetores = []

function isNumero(n) {
    if (Number(n)>=1 && Number(n)<=100) {
        return true
    } 
    else {
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

function adicionar(){ // Verificar se Tal Número pode Ser Adicionado
    if (isNumero(num.value) && !inLista(num.value, vetores)) {
        res.innerHTML = ''
        vetores.push(Number(num.value))
        
        let msg = document.createElement('option')
        msg.innerHTML = `${num.value} foi adicionado`
        area.appendChild(msg)
    } else {
        if (num.value.length == 0)
            window.alert('[ERRO!] Digite um valor...')
        else {
            window.alert('[ERRO!] Digite um valor diferente...')
        }
    }
    num.value = ""
    num.focus()
}

function analisar(){ 
    let total = vetores.length
    let maior = vetores[0] // sempre que eu digitar um novo número, ele sempre será o zero
    let menor = vetores[0]
    let soma = 0
    let media = 0

    for (c in vetores) {
        soma += vetores[c]
        if (vetores[c] > maior) {
            maior = vetores[c]
        } 

        if(vetores[c] < maior) {
            menor = vetores[c]
        }

        media = soma / total
    }
    res.innerHTML = ""
    res.innerHTML += `<p>Temos <strong>ao todo</strong> ${total} números armazenados</p>`
    res.innerHTML += `<p>${menor} é o <strong>menor</strong> de todos</p>`
    res.innerHTML += `<p>${maior} é o <strong>maior</strong> de todos</p>`
    res.innerHTML += `<p>${soma} é a <strong>soma</strong></p>`
    res.innerHTML += `<p>${media} é a <strong>média</strong></p>`
    area.innerHTML = ''
}