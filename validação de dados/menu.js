function validar(){
    var nome = document.teste.nome.value
    var email = document.teste.email.value
    var idade = document.teste.idade.value
    var cidade = document.teste.cidade.value

    if(nome =="" || email =="" || idade == "" || cidade == "") {
            alert("Por favor preencher os campos")
            return false
    }
    if(nome == 'Guilherme' && email == 'guilherme@yahoo' && idade == '33' && cidade == 'sbc'){
            window.open("https://www.youtube.com/")
    }

    else{
            alert('nome email, idade ou cidades incorretos')
            return false
    }
   
}