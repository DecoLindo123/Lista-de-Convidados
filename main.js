 nomeDosConvidados = [];

 function submit()
 {
    var GuestName = document.getElementById("nomeDoConvidado1").value;
    nomeDosConvidados.push(GuestName);

    document.getElementById("display").innerHTML = nomeDosConvidados;
 }

 function mostrar()
 {
    document.getElementById("displayName").innerHTML = nomeDosConvidados;
 }

 function organizar()
 {
    var listaOrganizada = nomeDosConvidados.sort();
    document.getElementById("displayN").innerHTML = listaOrganizada;
 }

 function pesquisar()
{
    var p= document.getElementById("pesquisar2").value;
    var found=0;
    var j;
    for(j=0; j<nomeDosConvidados.length; j++)
       {
           if(p==nomeDosConvidados[j]){
           found=found+1;
       }
}

document.getElementById("displayPesquisar").innerHTML="Nome encontrado "+found+" vez(es)";
console.log("Nome encontrado "+found+"vez(es)");
}