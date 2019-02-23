let n1,n2,resultado;
let nivel=10;

function sorteando(){
	n1=Math.floor(Math.random() * nivel); 
	n2=Math.floor(Math.random() * nivel); 
	resultado=n1*n2;
	//imprimindo na tela os numeros sorteados
	let texto= "<p>"+n1+" * "+n2+"= </p>";
	$("#sort").html(texto);
	$("#sort").addClass("tamfonte");
}

//conferindo resultado
$("#conferir").click(function(){


	let resp=$("#resposta").val();

	if(resp==resultado)
		alert("Resposta Correta");
	else
		alert("Resposta Errada\nA resposta correta seria "+resultado);

	//sorteando um novo numero
	$("#resposta").val(" ")
	sorteando();

});

//escolhendo dificuldades

$("#facil").click(function(){
	nivel=10;
	sorteando();
});

$("#medio").click(function(){
	nivel=100;
	sorteando();
});

$("#dificil").click(function(){
	nivel=1000;
	sorteando();
});


//Iniciando 
sorteando();

