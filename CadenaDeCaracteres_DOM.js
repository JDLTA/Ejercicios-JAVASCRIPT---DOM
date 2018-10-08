function realizarAnalizis() {
	var pal = document.getElementById('caja_palabra').value;
//caja_resultado.value=vocakes(caja_palabra.value);
caja_resultado.value=ContadorDeVocales(caja_palabra.value);
caja_resultado_Constantes.value=ContadorDeConstantes(caja_palabra.value);
caja_letra_resultado.value=ContadorDeletra(caja_palabra.value, caja_letra.value);
caja_palabra_cambio.value=palabraLoca(caja_palabra.value);


 function ContadorDeVocales(Palabra){ 
	var count = 0;
for(var i = 0; i < Palabra.length; i++){
 if(Palabra[i].toLowerCase() == 'a' || Palabra[i].toLowerCase() == 'i' || Palabra[i].toLowerCase() == 'o' ||Palabra[i].toLowerCase() == 'e' ||
 	Palabra[i].toLowerCase() == 'u'){
	   count+=1; 
	}
	 } return count;
	  } 


function ContadorDeConstantes(Palabra, countC ){ 
	var countC = 0;

for(var i = 0; i < Palabra.length; i++){

 if(Palabra[i].toLowerCase()== 'b' || Palabra[i].toLowerCase() == 'c' || Palabra[i].toLowerCase() == 'd' || Palabra[i].toLowerCase() == 'f' || Palabra[i].toLowerCase() == 'g'
 	|| Palabra[i].toLowerCase() == 'h'|| Palabra[i].toLowerCase() == 'j'|| Palabra[i].toLowerCase() == 'k' || Palabra[i].toLowerCase() == 'l'|| Palabra[i].toLowerCase() == 'm'
 	|| Palabra[i].toLowerCase() == 'n'|| Palabra[i].toLowerCase() == 'p'|| Palabra[i].toLowerCase() == 'q'|| Palabra[i].toLowerCase() == 'r'|| Palabra[i].toLowerCase() == 's'
 	|| Palabra[i].toLowerCase() == 't'|| Palabra[i].toLowerCase() == 'v'|| Palabra[i].toLowerCase() == 'w'|| Palabra[i].toLowerCase() == 'x'|| Palabra[i].toLowerCase() == 'y'
 	|| Palabra[i].toLowerCase() == 'z'){
	   countC+=1; 
	}
	 } return countC;
	  } 

function ContadorDeletra(palabraIntroducida, letraIntroducida, contadorLetra){
	var contadorLetra=0;
	var posicion;
posicion=palabraIntroducida.indexOf(letraIntroducida);
while (posicion != -1) { 
        contadorLetra+=1;          
 posicion = palabraIntroducida.indexOf(letraIntroducida, posicion + 1); 

} return contadorLetra;

} 

function palabraLoca(Palabra){
	return Palabra.toUpperCase();

} 


}

