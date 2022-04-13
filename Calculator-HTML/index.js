let iNeedDebugger = false;
let isNewNumber = false;
let isFirstOperator = true;
let lastOperatorUsed = "";
let isStartAgain = false;

function userPush(id){
	if (isNaN(id)){		
		switch (id){
			case ".":
				document.getElementById("resultTotal").innerHTML = parseFloat(document.getElementById("resultTotal").innerHTML) + id;
				document.getElementById("resultTotalMini").innerHTML = document.getElementById("resultTotalMini").innerHTML + id;
			break;
			case "ac":
				document.getElementById("resultTotal").innerHTML = "0";
				document.getElementById("resultTotalMini").innerHTML = "";
				document.getElementById("Total").innerHTML = "0";
				isNewNumber = false;
				isFirstOperator = true;
			break;
			case "c":
				let valor = document.getElementById("resultTotal").innerHTML;
				if (!isStartAgain){
					valor = document.getElementById("resultTotalMini").innerHTML.substring(0,document.getElementById("resultTotalMini").innerHTML.length-1);
				}else{
					valor = "";
					document.getElementById("Total").innerHTML = 0;
				};	
				document.getElementById("resultTotalMini").innerHTML = valor;
				document.getElementById("resultTotal").innerHTML = "0";								
				isNewNumber = false;				
			break;
			case "=":						
				switch (lastOperatorUsed){
					case "+":
						document.getElementById("resultTotal").innerHTML = parseFloat(document.getElementById("Total").innerHTML) + parseFloat(document.getElementById("resultTotal").innerHTML);						
						break;
					case "-":
						document.getElementById("resultTotal").innerHTML =  parseFloat(document.getElementById("Total").innerHTML) - parseFloat(document.getElementById("resultTotal").innerHTML);
						break;
					case "x":
						document.getElementById("resultTotal").innerHTML = parseFloat(document.getElementById("resultTotal").innerHTML) *  parseFloat(document.getElementById("Total").innerHTML);
						break;
					case "/":
						document.getElementById("resultTotal").innerHTML = parseFloat(document.getElementById("Total").innerHTML) / parseFloat(document.getElementById("resultTotal").innerHTML) ;
						break;
				};
				isStartAgain = true;
				isFirstOperator = true;
				document.getElementById("Total").innerHTML = document.getElementById("resultTotal").innerHTML;				
				lastOperatorUsed = "";
				isNewNumber = true;
			break;
			default:
				if (iNeedDebugger){debugger};
								
				let totalActual = parseFloat(document.getElementById("Total").innerHTML);
				if (document.getElementById("resultTotalMini").innerHTML === ""){
					document.getElementById("resultTotalMini").innerHTML = document.getElementById("Total").innerHTML;
					
				}else{
					isStartAgain = false;
					if (!isFirstOperator){						
						switch (lastOperatorUsed){
							case "+":
								document.getElementById("Total").innerHTML = parseFloat(document.getElementById("resultTotal").innerHTML) + parseFloat(document.getElementById("Total").innerHTML);
								break;
							case "-":
								document.getElementById("Total").innerHTML =  parseFloat(document.getElementById("Total").innerHTML) - parseFloat(document.getElementById("resultTotal").innerHTML);
								break;
							case "x":
								document.getElementById("Total").innerHTML = parseFloat(document.getElementById("resultTotal").innerHTML) *  parseFloat(document.getElementById("Total").innerHTML);
								break;
							case "/":
								document.getElementById("Total").innerHTML = parseFloat(document.getElementById("Total").innerHTML) / parseFloat(document.getElementById("resultTotal").innerHTML) ;
								break;
						}
						lastOperatorUsed = id;
						isNewNumber = true;
					}else{
						isFirstOperator = false;
						lastOperatorUsed = id;
						isNewNumber = true;
						switch (id){
							case "+":
								document.getElementById("Total").innerHTML = parseFloat(document.getElementById("resultTotal").innerHTML);
								break;
							case "-":
								document.getElementById("Total").innerHTML =  parseFloat(document.getElementById("resultTotal").innerHTML);
								break;
							case "x":
								document.getElementById("Total").innerHTML = parseFloat(document.getElementById("resultTotal").innerHTML) ;
								break;
							case "/":
								document.getElementById("Total").innerHTML = parseFloat(document.getElementById("resultTotal").innerHTML) ;
								break;
						}						
					}	
				}						
				document.getElementById("resultTotalMini").innerHTML = document.getElementById("resultTotalMini").innerHTML + id;							
		}		
	}else{
		if(isStartAgain){
			document.getElementById("resultTotalMini").innerHTML = "";
			document.getElementById("Total").innerHTML = 0;
			isStartAgain = false;
		}

		if (isNewNumber){
			document.getElementById("resultTotal").innerHTML = "";			
			document.getElementById("resultTotal").innerHTML =  parseFloat(document.getElementById("resultTotal").innerHTML + id);
			document.getElementById("resultTotalMini").innerHTML = document.getElementById("resultTotalMini").innerHTML + id;			
			isNewNumber = false;
		}else{			
			document.getElementById("resultTotal").innerHTML = parseFloat(document.getElementById("resultTotal").innerHTML + id);
			document.getElementById("resultTotalMini").innerHTML = document.getElementById("resultTotalMini").innerHTML + id;			
		}
	};
};

