function verificar(){
    var ano = document.getElementById("ano").value
    var msg = document.getElementById("msg")
    var data=new Date()
    var anoatual = data.getFullYear()
   
    
    
    
    

    if(ano.length == 0){
        alert("[ERRO] Insira um dado no campo 'Ano de nascimento'")
    }
    else{
        
    var resultado = anoatual-ano
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    
    
    var fsex = document.getElementsByName("radsex")

    }
    

    if(fsex[0].checked){
    genero='Mulher'
    if(resultado >=0 && resultado <=10){
        img.setAttribute('src', 'images/criancamulher.png')
        
        //criança
        }
        else if(resultado <21){
            img.setAttribute('src', 'images/adolecentemulher.png')
        //jovem
        
        }
        else if (resultado <50){
            img.setAttribute('src', 'images/mulheradulto.png')
            //adulto
        
        }
        else{
            img.setAttribute('src', 'images/mulheridosa.png')
            //idoso
        }
}
else if(fsex[1].checked){
    genero='Homem'
    if(resultado >=0 && resultado <=10){
        img.setAttribute('src', 'images/crianca.png')
        
        //criança
        }
        else if(resultado <21){
            img.setAttribute('src', 'images/jovemhomem.png')
        //jovem
        
        }
        else if (resultado <50){
            img.setAttribute('src', 'images/adultohomem.png')
            //adulto
        
        }
        else{
            img.setAttribute('src', 'images/idosohomem.png')
            //idoso
        }
}


msg.innerHTML = `Detectamos ${genero} com ${resultado} Anos`
msg.appendChild(img)

    
  
}