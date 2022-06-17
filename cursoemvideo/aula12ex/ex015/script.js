function verificar(){
    var data = new Date ()
    var ano = data.getFullYear ()
    var fano = document.getElementById ('txtano')
    var res = document.getElementById('res')

    if(fano.value.length==0 || fano.value > ano){
        window.alert('[ERRO] Por favor verifique os dados inseridos e tente novamente.')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            genero = 'Homem'
            if(idade>=0 && idade<10){
              img.setAttribute('src','fotobb-h.png')  

            }else if (idade<21){
                img.setAttribute('src','fotojovem-h.png')

            }else if (idade<50){
                img.setAttribute('src','fotoadulto-h.png')

            } else{
                img.setAttribute('src','fotoidoso-h.png')

            }


        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade>=0 && idade<10){
            img.setAttribute('src','fotobb-m.png')

            }else if (idade<21){
            img.setAttribute('src','fotojovem-m.png')

            }else if (idade<50){
            img.setAttribute('src','fotoadulto-m.png')

            } else{
            img.setAttribute('src','fotoidoso-m.png')
        }
    }
        res.style.textAlign = 'center' 
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
        res.appendChild(img)
        res.appendChild(img).style.margin ='auto'
        
    }









}