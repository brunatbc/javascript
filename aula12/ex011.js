var idade = 70
console.log(`Você tem ${idade} anos`)
if (idade<16){
    console.log('Não Vota')
} else if (idade >= 16 && idade<18 || idade >65){
        //O comando idade >= 16 é uma repetição do primeiro if, os dois simbolizam a mesma coisa logicamente. 
        console.log('Voto Opcional')
    }else {
        console.log('Voto obrigatório')
    }
    
