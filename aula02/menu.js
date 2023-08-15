function novo(){ 
    var n = document.dois.nome.value
    var p1 = parseInt(document.dois.nota1.value)
    var p2 = parseInt(document.dois.nota2.value)
    var p3 = parseInt(document.dois.nota3.value)
    var p4 = parseInt(document.dois.nota4.value)

    {var r = (p1 + p2 + p3 + p4) / 2 

   document.write(`${n} sua média é ${r}`)}
    }