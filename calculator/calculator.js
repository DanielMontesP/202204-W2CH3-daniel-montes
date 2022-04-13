let iNeedToDebug = false;
let isCancelled = false;
let value1 = 0;
let value2 = 0;

exeCalculator();
console.log("Bye Bye.");

function exeCalculator(){
	if (iNeedToDebug) {debugger};	
	askForValue();

	if (isCancelled){
		window.alert("Proceso cancelado...");
	}else{
		if (value2 == ""){
			calcMathOperations(value1,value2,"RaizCuadrada");
		}else{		
			calcMathOperations(value1,value2,"AllOperations");	
		};
	};		
};

function askForValue(){
	if (iNeedToDebug) {debugger};
	let userInput = "";

	if (value1 == 0){
		textMens = "Vamos a realizar operaciones aritméticas. Introduzca un valor numérico: ";
	}else{
		textMens = "Si presiona la tecla Enter se calculará la raiz cuadrada de: " + value1 + ".\nSi introduce un número se calculará la suma, resta, multiplicación y división de: " + value1 + " con el número indicado.";	
	};

	userInput = window.prompt(textMens);

	switch(userInput){
		case "":
			if (value1 == 0){
				window.alert("Debe introducir un valor numérico, intentelo de nuevo...");
				exeCalculator();
			}else{
				value2 = "";
				return true;
				};						
			break;
		case null:			
			isCancelled = true;
			return false;
			break;
		default:
			if (value1 == 0){
				value1 = parseInt(userInput);				
				if (isNumber(value1)) {
				 askForValue(); 
				}else{ 
					return false;
				};
			}else{
				if (iNeedToDebug) {debugger};
				value2 = parseInt(userInput);
					if (isNumber(value2)) {
						return true;
					}else{
						return false;
					};				
			};
			break;
	};
};

function isNumber(numValue){
	if (iNeedToDebug) {debugger};

	if (isNaN(numValue)){	
		window.alert("El valor introducido no es numérico, intentelo de nuevo...");
		return false;
	} else{
		return true;
	};
};	

function formatResult(number){
	if (iNeedToDebug) {debugger};

	let numToReturn = 0;
	let numInt = parseInt(number);

	let numToProcess = number.slice(number.length - 3,number.length);

	if (parseInt(numToProcess) > 0) {
		if (numToProcess.slice(2,numToProcess.length) == 0){			
			numToReturn = numToProcess.slice(0,numToProcess.length-1);
			if (numToReturn.slice(2,numToReturn.length) == 0){
				numToReturn = parseFloat(numInt + "." + numToReturn.slice(0,numToReturn.length-1));
			};					
		}else{
			numToReturn = parseFloat(numInt + "." + numToProcess);
		};
	}else{
		numToReturn = number.slice(0,number.length-4);	
	};	
	return numToReturn;	
};
function calcMathOperations (value1,value2,typeOfCalc){
		let textoMensaje = "";
		if (iNeedToDebug) {debugger};

		switch(typeOfCalc){
			case "AllOperations":
				let totales = [];
				totales.push(formatResult((value1 + value2).toFixed(3)));
				totales.push(formatResult((value1 - value2).toFixed(3)));
				totales.push(formatResult((value1 * value2).toFixed(3)));
				totales.push(formatResult((value1 / value2).toFixed(3)));
				textoMensaje = "La suma de " + value1 + " más " + value2 + " es igual a: " + totales[0] + ".\nLa resta de " + value1 + " menos " + value2 + " es igual a: " + totales[1] + ".\nLa multipicación de " + value1 + " por " + value2 + " es igual a: " + totales[2] + ".\nLa división de " + value1 + " entre " + value2 + " es igual a: " + totales[3]+".\n\n¡Gracias por utilizar la calculadora!";
			break;
			case "RaizCuadrada":
				let raizCuadrada = Math.sqrt(value1);
				textoMensaje = "La raiz cuadrada de: " + value1 + " es = " + formatResult(raizCuadrada.toFixed(3)) +".\n\n¡Gracias por utilizar la calculadora!";
			break;
		};
		return window.alert(textoMensaje);

	
		
		
	};

