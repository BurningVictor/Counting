function justCounting(){
    var inicio = window.document.querySelector('input#iinicio') // ...
    var i =  Number(inicio.value)// Início
    //
    var fim = window.document.querySelector('input#ifim') // ...
    var f =  Number(fim.value)// Fim
    //
    var passo = window.document.querySelector('input#ipasso') // ...
    var p =  Number(passo.value)// Passo
    //
    var b = window.document.querySelector('input#botaoenvio') // Botão
    var con = window.document.querySelector('div#contas') // Contando
    var c = i // Contador (Início)

    if (inicio.value.length == 0 || fim.value.length == 0){
        window.alert ('[Erro] Tente Novamente!')
        con.innerHTML('Impossível contar... Tente outra numeração.')

    } else if (passo.value.length == 0 || Number(passo.value)==0 || p<=0) {
        window.alert ('[Erro] Considamos o passo como 1!')
        if (f>c){
            while (c<=f) {
                con.innerHTML += `${c}... `
                p=1
                c+=p
            }
        } 

        else {
            while (c>=f) {
                con.innerHTML += `${c}... `
                p=1
                c-=p
            }
        }
    }

    //--------------------------------------------------------------
    
    else {
        con.innerHTML = `<strong>Contados!<strong><br>`
        
        if (f>c){
            while (c<=f) {
               con.innerHTML += `${c}... ` 
               c+=p
            } 
        } 

        else {
            while (c>=f) {
                con.innerHTML += `${c}... `
                c-=p 
            }
        }
    }  
}

/*
function justCounting(){
    var inicio = window.document.querySelector('input#iinicio') // Início
    
    //
    var fim = window.document.querySelector('input#ifim') // Fim
    
    //
    var passo = window.document.querySelector('input#ipasso') // Passo
    
    //
    var b = window.document.querySelector('input#botaoenvio') // Botão
    var con = window.document.querySelector('div#contas') // Contando
    var c = i // Contador (Início)

    if (inicio.value.length == 0 || fim.value.length == 0){
        window.alert ('[Erro] Tente Novamente!')
        con.innerHTML('Impossível contar... Tente outra numeração.')

    } else if (passo.value.length == 0 || Number(passo.value)==0) {
        window.alert ('[Erro] Considamos o passo como 1!')

        let i =  Number(inicio.value)// Início
        let f =  Number(fim.value)// Fim
        let p =  Number(passo.value)// Passo

        while (c<=f) {
            con.innerHTML += `${c}`
            p=1
            c+=p
            
        }
    }

    //--------------------------------------------------------------
    
    else {
        let i =  Number(inicio.value)// Início
        let f =  Number(fim.value)// Fim
        let p =  Number(passo.value)// Passo

        if (f>0){
            while (c<=f) {
                con.innerHTML += `${c}` 
                c+=p
            } 
        } 

        else {
            while (c>=f) {
                con.innerHTML += `${c}`
                c-=p 
            }
        }
    }  
}
*/