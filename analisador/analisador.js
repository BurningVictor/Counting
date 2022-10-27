function verificador(){
    var num = window.document.querySelector('input#inum')
    var area = window.document.querySelector('select#analisador')
    var n = Number(num.value)
    
    if (num.value.length == 0) {
        window.alert('[ERRO!] Digitar um valor...')
    } else {
        var msg = document.createElement('option') 
        msg.innerHTML = `Você digitou o valor ${n}`
        area.appendChild(msg)
    }
}

function verificador(){
    var num = window.document.querySelector('input#inum')
    var area = window.document.querySelector('select#analisador')
    var n = Number(num.value)
    
    if (num.value.length == 0 || num.indeOf < 0 ) {
        window.alert('[ERRO!] Digitar um valor...')
    } else {
        var msg = document.createElement('option') 
        msg.innerHTML = `Você digitou o valor ${n}`
        area.appendChild(msg)
    }
}