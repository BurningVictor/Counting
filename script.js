function justCounting(){
    var i = window.document.querySelector('input#iinicio') // Início
    var f = window.document.querySelector('input#ifim') // Fim
    var p = window.document.querySelector('input#ipasso') // Passo
    var b = window.document.querySelector('input#botaoenvio') // Botão
    var con = window.document.querySelector('div#contas') // Contando
    var c = i
    var p = 1

    if (i.value = null){
        window.alert ('[Erro] Tente Novamente!')
        con.innerHTML('Impossível contar... Tente outra numeração.')

    } else if (p.value = 0) {
        window.alert ('[Erro] Tente Novamente!')
        while (c<=f) {
            i++
        }
    }
    //--------------------------------------------------------------
    
    else {
        if (i.value > 0 && f>0){
            while (c<=f) {
                i++
                con.innerHTML = `${i}`
            } 
        } 

        else {
            while (c>=f) {
                i--
                con.innerHTML = `${i}`
            }
        }
    } 

    con.innerHTML = `${i}`
}