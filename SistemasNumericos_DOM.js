function realizarConvercion() {
	
	var num = document.getElementById('caja_decimal').value;
caja_resultado_Binario.value=Decimal_Binario(caja_decimal.value);
caja_resultado_Octal.value=Decimal_Octal(caja_decimal.value);
caja_resultado_Hexadecimal.value=Decimal_Hexadecimal(caja_decimal.value);


function Decimal_Binario(i){ 
	if (i=="") {
		return "";
	}else{
	return parseFloat(i).toString(2);
}
	
}
function Decimal_Hexadecimal(i){ 
	if (i=="") {
		return "";
	}else{
	return parseFloat(i).toString(16);
}	
}
function Decimal_Octal(i){ 
	if (i=="") {
		return "";
	}else{
	return parseFloat(i).toString(8);}
}}