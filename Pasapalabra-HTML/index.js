let questions = [
	{letter: "a", answer: "abducir", status: 0, question: ("CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien")},
	{letter: "a", answer: "atinar", status: 0, question: ("CON LA A. Acertar, dar en el blanco")},		
	{letter: "b", answer: "bingo", status: 0, question: ("CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso")},
	{letter: "b", answer: "bota", status: 0, question: ("CON LA B. Calzado que resguarda el pie y parte de la pierna")},
	{letter: "c", answer: "churumbel", status: 0, question: ("CON LA C. Niño, crío, bebé")},
	{letter: "c", answer: "cama", status: 0, question: ("Con la C. Mueble donde las personas duermen o descansan")},		
	{letter: "d", answer: "diarrea", status: 0, question: ("CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida")},
	{letter: "d", answer: "disputa", status: 0, question: ("Con la D. Enfrentamiento entre dos personas")},
	{letter: "e", answer: "ectoplasma", status: 0, question: ("CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación")},
	{letter: "e", answer: "enero", status: 0, question: ("Con la E. Primer mes del año")},
	{letter: "f", answer: "fácil", status: 0, question: ("CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad")},
	{letter: "f", answer: "facil", status: 0, question: ("Con la F. Contrario a difícil")},
	{letter: "g", answer: "galaxia", status: 0, question: ("CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas")},
	{letter: "g", answer: "golpe", status: 0, question: ("Con la G. Encuentro brusco y violento de un cuerpo contra otro")},
	{letter: "h", answer: "harakiri", status: 0, question: ("CON LA H. Suicidio ritual japonés por desentrañamiento")},
	{letter: "h", answer: "hielo", status: 0, question: ("CON LA H. Agua en estado sólido")},
	{letter: "i", answer: "iglesia", status: 0, question: ("CON LA I. Templo cristiano")},
	{letter: "i", answer: "iglesia", status: 0, question: ("Con la I. Edificio destinado al culto cristiano")},
	{letter: "j", answer: "jabalí", status: 0, question: ("CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba")},
	{letter: "j", answer: "jarrón", status: 0, question: ("CON LA J. Jarra grande")},
	{letter: "k", answer: "kamikaze", status: 0, question: ("CON LA K. Persona que se juega la vida realizando una acción temeraria")},
	{letter: "k", answer: "kiosko", status: 0, question: ("CON LA K. Donde se venden periodicos")},
	{letter: "l", answer: "licantropo", status: 0, question: ("CON LA L. Hombre lobo")},
	{letter: "l", answer: "lima", status: 0, question: ("CON LA L. Fruta con nombre de cuidad")},
	{letter: "m", answer: "misántropo", status: 0, question: ("CO N LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas")},
	{letter: "m", answer: "mesa", status: 0, question: ("CON LA M. Mueble donde se come")},
	{letter: "n", answer: "necedad", status: 0, question: ("CON LA N. Demostración de poca inteligencia")},
	{letter: "n", answer: "nada", status: 0, question: ("CON LA N. Contrario todo")},
	{letter: "ñ", answer: "niño", status: 0, question: ("CON LA Ñ. crio")},
	{letter: "ñ", answer: "niño", status: 0, question: ("CON LA Ñ. crio")},
	{letter: "o", answer: "orco", status: 0, question: ("CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien")},
	{letter: "o", answer: "oso", status: 0, question: ("CON LA O. Macho de osa")},
	{letter: "p", answer: "protos", status: 0, question: ("CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft")},
	{letter: "p", answer: "puerta", status: 0, question: ("CON LA P. Separacion entre habitaciones")},
	{letter: "q", answer: "queso", status: 0, question: ("CON LA Q. Producto obtenido por la maduración de la cuajada de la leche")},
	{letter: "q", answer: "quemar", status: 0, question: ("CON LA Q. Abrasar o consumir algo con fuego")},
	{letter: "r", answer: "raton", status: 0, question: ("CON LA R. Roedor")},
	{letter: "r", answer: "risa", status: 0, question: ("CON LA R. Movimiento de la boca que demuestra alegría")},
	{letter: "s", answer: "stackoverflow", status: 0, question: ("CON LA S. Comunidad salvadora de todo desarrollador informático")},
	{letter: "s", answer: "señal", status: 0, question: ("CON LA S. Indicio o señal de algo")},
	{letter: "t", answer: "terminator", status: 0, question: ("CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984")},
	{letter: "t", answer: "tokio", status: 0, question: ("CON LA T. Capital de Japón")},		
	{letter: "u", answer: "unamuno", status: 0, question: ("CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914")},
	{letter: "u", answer: "uva", status: 0, question: ("CON LA U. Fruto de la vid")},
	{letter: "v", answer: "vikingos", status: 0, question: ("CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa")},
	{letter: "v", answer: "vaso", status: 0, question: ("CON LA V. Recipiente que se utiliza para beber")},
	{letter: "w", answer: "waterpolo", status: 0, question: ("CON LA W. Deporte parecido al fútbol, pero que se juega en la piscina")},
	{letter: "w", answer: "sandwich", status: 0, question: ("CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso")},
	{letter: "x", answer: "botox", status: 0, question: ("CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética")},
	{letter: "x", answer: "xenofobia", status: 0, question: ("CONTIENE LA X. Odio, hostilidad o antipatía hacia los extranjeros")},
	{letter: "y", answer: "peyote", status: 0, question: ("CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos")},
	{letter: "y", answer: "yate", status: 0, question: ("CONTIENE LA Y. Embarcación de recreo, generalmente lujosa")},
	{letter: "z", answer: "zen", status: 0, question: ("CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional")},
	{letter: "z", answer: "zapato", status: 0, question: ("CON LA Z. Calzado que cubre solamente el pie")},
];

let iNeedDebugger = false;
let isNewNumber = false;
let isNewQuestion = false;
let isNewGame = "1";
let isFirstOperator = true;
let lastOperatorUsed = "";
let isStartAgain = false;
let userName = "";
let isFirstRun = true;
let ranking = [{usuario: "Player2", puntos: 2},{usuario: "Player3", puntos: 4},{usuario: "Player4", puntos: 5}];
let rosco = [];
let letraActual = "";
let letraAnterior = "";
let indexActualQuestion = 0;
let numPregPorLetra = 2;
let numAciertos = 0;
let numErrores = 0;
let numPregRealizadas = 0;
let showResponse = false;
let numPasapalabras = 0;
let listaLetras =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","x","y","z"];
var timerCountDown = 0;
var lightActiveLetter = 0;
var timerRotateTimer = 0;
var timerSecondsToAdd = 0;
var timerMaxTime = 3;
let verifiedAnswer = "";
let isGameOver = false;
let questionIsAnswered = false;
let letterLastPos = "";
let isVolEnabled = true;
let soundCabecera = "";

function askForUserName(id){		
	document.getElementById("welcome-obs-container").style.textAlign = "center";
	document.getElementById("welcome-title").style.visibility = "hidden";
	document.getElementById("welcome-obs").style.top = "132px";
	document.getElementById("welcome-obs").style.left = "45px";
	document.getElementById("welcome-obs").style.fontSize = "20px";
	document.getElementById("welcome-obs").innerHTML = "Por favor indique su nombre: ";
	document.getElementById("input").style.visibility = "visible";
	document.getElementById("input").value = "Player1";
	document.getElementById("empezar").style.visibility = "hidden";
	document.getElementById("jugar").style.visibility = "hidden";
	document.getElementById("return").style.visibility = "visible";
	document.getElementById("return").style.top = "196px";	
	document.getElementById("username").style.visibility = "hidden";
	document.getElementById("input_ModoAdmin").style.visibility = "visible";
	document.getElementById("label_ModoAdmin").style.visibility = "visible";
	document.getElementById("input_ModoAuto").style.visibility = "visible";
	document.getElementById("label_ModoAuto").style.visibility = "visible";
	document.getElementById("input_ModoSound").style.visibility = "visible";
	document.getElementById("label_ModoSound").style.visibility = "visible";
	document.getElementById("input").style.visibility = "visible";	
	document.getElementById("cerrar").style.visibility = "visible";	
	document.getElementById("input").focus();
	document.querySelector('#input').addEventListener('keypress', function (e) {
		if (e.key === 'Enter') {			
			sendInput();
			document.getElementById("input").focus();
		  }
	});
	document.querySelector('#input').addEventListener('mouseup',function (e) {		
		if(document.getElementById("input").value ==="Responde aqui..."){
				document.getElementById("input").value = "";
		}		  
	});
};

function colorEngine(id){	
	let z = 0;
	for (let i=0; i < listaLetras.length; i++){
		let nameId = "letter" + listaLetras[i].toUpperCase() ;		
		setTimeout(function(){document.getElementById(nameId).style.background = id; ;},70+z);
			z = z +25;
	}		
};

function resizeLetterContainer(size){	
	setTimeout(function(){document.getElementById("letter"+letraActual.toUpperCase()+"-container").style.width = size;
		document.getElementById("letter"+letraActual.toUpperCase()).style.width = size;		
		document.getElementById("letter"+letraActual.toUpperCase()+"-container").style.height = size;
		document.getElementById("letter"+letraActual.toUpperCase()).style.height = size;			
	},400);
};

function btJugar(){	
	document.getElementById("input_ModoAdmin").style.visibility = "hidden";
	document.getElementById("label_ModoAdmin").style.visibility = "hidden";	
	document.getElementById("input_ModoAuto").style.visibility = "hidden";
	document.getElementById("label_ModoAuto").style.visibility = "hidden";
	document.getElementById("input_ModoSound").style.visibility = "hidden";
	document.getElementById("label_ModoSound").style.visibility = "hidden";	
	document.getElementById("main").style.visibility = "visible";
	colorEngine("rgb(26, 197, 63)");
	setTimeout(function(){colorEngine("rgba(23, 86, 247, 0.514)")},600);
	setTimeout(function(){document.getElementById("score-content").style.visibility = "visible";
		document.getElementById("timer").style.visibility = "visible";	
		document.getElementById("welcome-content").style.visibility = "visible";
		document.getElementById("cerrar").style.visibility = "visible";
		document.getElementById("return").style.visibility = "visible";
		document.getElementById("input").style.visibility = "visible";		
		document.getElementById("pasapalabra").style.visibility = "visible";	
		let inputUserName = document.getElementById("input").value;
		isFirstRun = false;	
		userName = inputUserName;	
		pasapalabra();
	},1800);	
	document.getElementById("input").focus();
};

function cerrar(id){	
	document.getElementById("welcome").style.visibility = "visible";	
	document.getElementById("cerrar").style.visibility = "hidden";	
	document.getElementById("welcome-title").style.top = "32px";
	document.getElementById("welcome-title").innerHTML = "FINALIZAR JUEGO";
	document.getElementById("welcome-title").style.visibility = "visible";
	document.getElementById("welcome-obs-container").style.textAlign = "center";	
	document.getElementById("welcome-obs").innerHTML = "¿Esta seguro?";	
	document.getElementById("btSalir").style.visibility = "visible";
	document.getElementById("btvolver").style.visibility = "visible";
	document.getElementById("jugar").style.visibility = "hidden";
	document.getElementById("empezar").style.visibility = "hidden";
	if(!isFirstRun){
		mostrarPuntuacion(ranking);
		document.getElementById("ranking").style.visibility = "visible";
		document.getElementById("userScore").style.visibility = "visible";
		document.getElementById("welcome-obs").style.top = "34px";
		document.querySelector(".bt-ChangeVolStatus").style.visibility = "visible";
	}
	document.getElementById("welcome-content").style.visibility = "visible";
	setUserUI("hidden");
	document.getElementById("userScore").style.top = "-97px";
	document.getElementById("ranking").style.top = "46px";	
	document.getElementById("empezar").style.visibility = "hidden";	
	clearInterval(timerCountDown);
	clearInterval(lightActiveLetter);	
};

function salir(id){
	clearInterval(timerCountDown);
	clearInterval(lightActiveLetter);	
	window.location.reload();	
};

function volver(id){
	if(!isFirstRun){
		if(isGameOver){
			sendInput();
		}else{
			hacerPregunta();
		}		
		document.getElementById("score-content").style.visibility = "visible";
		document.getElementById("timer").style.visibility = "visible";
		document.getElementById("main").style.visibility = "visible";
		document.getElementById("btSalir").style.visibility = "hidden";	
		document.getElementById("welcome").style.visibility = "hidden";
		document.getElementById("welcome-content").style.visibility = "visible";
		document.getElementById("welcome-title").style.visibility = "visible";
		document.getElementById("welcome-obs").style.visibility = "visible";			
		document.getElementById("btvolver").style.visibility = "hidden";
		document.getElementById("jugar").style.visibility = "hidden";
		document.getElementById("cerrar").style.visibility = "visible";
		document.getElementById("prompt").style.visibility = "hidden";
		document.getElementById("prompt-obs").style.visibility = "hidden";
		document.getElementById("prompt-title").style.visibility = "hidden";
		document.getElementById("input").style.visibility = "visible";
		document.getElementById("input").focus();
		document.getElementById("return").style.visibility = "visible";
		document.getElementById("return").style.left = "263px";
		document.getElementById("pasapalabra").style.visibility = "visible";
		document.getElementById("welcome-content").style.borderWidth = "0px";					
	}else{
		document.getElementById("btvolver").style.visibility = "hidden";
		document.getElementById("btSalir").style.visibility = "hidden";
		askForUserName();
	}
};

function soundIsEnabled(){	
	if(document.querySelector('.modoSound:checked') && isVolEnabled){
		document.querySelector('.iconSoundDisabled').style.visibility = "hidden";		
		return true;
	}
	document.querySelector('.iconSoundDisabled').style.visibility = "visible";
	return false;
}

function sendInput(id){	
	isGameOver = false;
	isNewGame = document.getElementById("isNewGame").innerHTML;	
	document.getElementById("userScore-obs").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + userName.toUpperCase() + "<br><br>Aciertos: " + numAciertos + "/" + numPregRealizadas + "<br>Errores: " + numErrores + "<br>Pasapalabras: " + numPasapalabras  ;
	if (isNewGame==="1"){	
		isFirstRun = true;
		document.getElementById("textTimer").innerHTML = "180";
		document.getElementById("textScore").innerHTML = "0";		
		document.getElementById("ranking").style.visibility = "hidden";
		document.getElementById("userScore").style.visibility = "hidden";
		document.getElementById("welcome-title").style.visibility = "hidden";
		document.getElementById("welcome-obs").style.visibility = "hidden";
		document.getElementById("welcome-content").style.visibility = "hidden";
		document.getElementById("welcome-content").style.boxShadow = "none";		
		document.getElementById("input").style.visibility = "hidden";
		document.getElementById("return").style.visibility = "hidden";
		btJugar();
		document.getElementById("jugar").style.visibility = "hidden";
		document.getElementById("empezar").style.visibility = "hidden";
		document.getElementById("isNewGame").innerHTML = "0";
		document.getElementById("username").innerHTML = userName;				
		document.getElementById("welcome-content").style.borderWidth = "0px";			
		document.getElementById("input").style.top = "334px";		
		document.getElementById("return").style.top = "334px";		
		clearInterval(timerCountDown);
		clearInterval(lightActiveLetter);		
	}else{
		clearInterval(timerCountDown);
		clearInterval(lightActiveLetter);		
		document.getElementById("return").style.left = "263px";
		questionIsAnswered = true;		
		if (!isNewQuestion){
			continueAsking();
			isNewQuestion = true;			
		}else{		
			if(quedanPreguntas()){
				hacerPregunta();				
			}			
		}
	}
	document.getElementById("input").focus();
};

function showMessageToUser(title,obs){
	document.getElementById("welcome-title").style.fontSize = "20px";	
	document.getElementById("welcome-title").innerHTML = title;		
	let inputMessage = "";	
	inputMessage = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + userName.toUpperCase() + "<br><br>Aciertos: " + numAciertos + "/" + numPregRealizadas + "<br>Errores: " + numErrores +  "<br>Pasapalabras: " + numPasapalabras;	
	document.getElementById("userScore-obs").innerHTML = inputMessage;
	if(obs.length <= 30){
		document.getElementById("welcome-obs").style.textAlign = "center";		
	}
};

function setUserUI(newStatus){
	if(newStatus === "hidden"){
		document.getElementById("welcome-content").style.borderWidth = "2px";			
	}else{
		document.getElementById("welcome-content").style.borderWidth = "0px";		
		document.getElementById("empezar").style.visibility = "hidden";
	}
	document.getElementById("welcome-title").visibility = "visible";
	document.getElementById("welcome-obs").visibility = "visible";
	document.getElementById("input").style.visibility = newStatus;
	document.getElementById("return").style.visibility = newStatus;
	document.getElementById("score-content").style.visibility = newStatus;
	document.getElementById("timer").style.visibility = newStatus;	
	document.getElementById("pasapalabra-container").style.visibility = newStatus;
	document.getElementById("pasapalabra").style.visibility = newStatus;
	document.getElementById("username").style.visibility = newStatus;		
	document.getElementById("main").style.visibility = newStatus;	
	document.getElementById("input_ModoAdmin").style.visibility = newStatus;
	document.getElementById("label_ModoAdmin").style.visibility = newStatus;
	document.getElementById("input_ModoAuto").style.visibility = newStatus;
	document.getElementById("label_ModoAuto").style.visibility = newStatus;
	document.getElementById("input_ModoSound").style.visibility = newStatus;
	document.getElementById("label_ModoSound").style.visibility = newStatus;
	document.getElementById("label_ModoSound").style.visibility = newStatus;
	if(!isFirstRun){
		document.getElementById("iconSound").style.visibility = "visible";
		document.querySelector(".bt-ChangeVolStatus").style.visibility = "visible";
	}	
};

function incrementSeconds() {	
	var el = document.getElementById('textTimer');
	timerMaxTime = 180;
    timerSecondsToAdd += 1;
	let newTime = timerMaxTime - timerSecondsToAdd;		
	if (document.getElementById('textTimer').innerHTML=="0"){		
		clearInterval(timerCountDown);
		clearInterval(lightActiveLetter);
		clearInterval(timerRotateTimer);
		document.getElementById("welcome-title").style.visibility = "hidden";
		document.getElementById("welcome-obs").style.visibility = "hidden";
		document.getElementById("return").style.visibility = "hidden";
		document.getElementById("pasapalabra").style.visibility = "hidden";
		document.getElementById("input").style.visibility = "hidden";
		colorEngine("rgb(26, 197, 63)");
		setTimeout(function(){colorEngine("rgba(23, 86, 247, 0.514)")},600);
		setTimeout(function(){
			showMessageToUser ("JUEGO FINALIZADO","&nbsp;&nbsp;&nbsp;&nbsp;¡" + userName.toUpperCase() + " el tiempo se ha acabado!<br><br><br><br>Aciertos: " + numAciertos + "<br>Errores: " + numErrores +  "<br>Pasapalabras: " + numPasapalabras + "</span>");
			document.getElementById("welcome-obs-container").style.textAlign = "center";
			document.getElementById("welcome-title").style.top = "24px";
			document.getElementById("welcome-title").style.visibility = "visible";
			document.getElementById("welcome-obs").style.top = "32px";
			document.getElementById("welcome-obs").style.visibility = "visible";
			document.getElementById("welcome-obs").style.fontSize = "20px";
			document.getElementById("ranking").style.top = "52px";
			document.getElementById("userScore").style.top = "-90px";
			document.getElementById("welcome-obs").innerHTML = "¡Se acabó el tiempo!<br><br><br><br><br><br><br><br>¿Jugamos de nuevo?";	
			isNewGame = "1";
			timerSecondsToAdd = 0;
			numErrores = 0;
			setUserUI("hidden");
			document.getElementById("empezar").style.visibility = "visible";
			document.getElementById("empezar").focus();
			document.getElementById("input").value = userName;
			document.getElementById("isNewGame").innerHTML = "1";
			mostrarPuntuacion(ranking); 	
		},1800);	
	}else{
		el.innerText = newTime;	
	};	
};

function lightLetter() {	
	if(questionIsAnswered){
		clearInterval(lightActiveLetter);
		clearInterval(timerCountDown);				
	}else{
		setTimeout(function(){
			if (parseInt(document.getElementById("textTimer").innerHTML) <=10){
				document.getElementById("textTimer").style.fontSize = "44px";				
				document.getElementById("textTimer").style.width = "92px";
				document.getElementById("textTimer").style.top = "18px";
				document.getElementById("textTimer").style.height = "92px";				
				document.getElementsByClassName("timer-content")[0].style.background = "rgb(247, 31, 12)";
				document.getElementById("letter"+letraActual.toUpperCase()).style.height = "57px";
			}		
			document.getElementById("letter"+letraActual.toUpperCase()).style.background = "rgb(0 133 243)";
			document.getElementById("letter"+letraActual.toUpperCase()).style.fontSize = "40px";
			document.getElementById("letter"+letraActual.toUpperCase()).style.width = "57px";
			document.getElementById("letter"+letraActual.toUpperCase()).style.height = "57px";			
			letterLastPos = document.getElementById("letter"+letraActual.toUpperCase()+"-container").style.top;
			document.getElementById("letter"+letraActual.toUpperCase()+"-container").style.top = letterLastPos - 2;			
			document.getElementById("letter"+letraActual.toUpperCase()+"-container").style.width = "57px";
			document.getElementById("letter"+letraActual.toUpperCase()+"-container").style.borderWidth = "3px";
			document.getElementById("letter"+letraActual.toUpperCase()+"-container").style.height = "57px";			
		},100);
		if (parseInt(document.getElementById("textTimer").innerHTML) <= 10){
			document.getElementById("textTimer").style.fontSize = "38px";
			document.getElementById("textTimer").style.width = "90px";
			document.getElementById("textTimer").style.height = "90px";			
			document.getElementsByClassName("timer-content")[0].style.background  = "rgb(243, 167, 4)";
		}		
		if(letraActual !="" && !isGameOver){			
			setTimeout(function(){document.getElementById("letter"+letraActual.toUpperCase()).style.fontSize = "35px";
			document.getElementById("letter"+letraActual.toUpperCase()).style.background = "rgba(23, 86, 247, 0.514)";
			document.getElementById("letter"+letraActual.toUpperCase()).style.width = "55px";
			document.getElementById("letter"+letraActual.toUpperCase()).style.height = "55px";
			
			document.getElementById("letter"+letraActual.toUpperCase()+"-container").style.top = letterLastPos + 2;
			document.getElementById("letter"+letraActual.toUpperCase()+"-container").style.width = "55px";
			document.getElementById("letter"+letraActual.toUpperCase()+"-container").style.height = "55px";
			document.getElementById("letter"+letraActual.toUpperCase()+"-container").style.borderWidth = "2px";		
			},400);
		}
	};
	if(isGameOver){
		colorEngine("rgb(26, 197, 63)");
		setTimeout(function(){colorEngine("linear-gradient(90deg, rgb(0 69 168) 0%, rgb(0 98 210) 42%, rgb(0 83 183) 100%)")},600);
		setTimeout(function(){
		},1800);		
		}
};

function pasapalabra(){		
    if (isFirstRun){       
    	resetQuestions(); 
    };
    if (isNewGame==="1"){                        
        jugar();
    };
};

function jugar(){
	iniVariables();		
		if(soundIsEnabled()){						
			soundCabecera.play();
		}		
	hacerPregunta(letraActual);
	document.getElementById("input").focus();
};

function quedanPreguntas(){
	if (rosco == null || letraActual === "" || numPregRealizadas >= 26){		
		isGameOver = true;
		clearInterval(timerCountDown);
		clearInterval(lightActiveLetter);
		clearInterval(timerRotateTimer);
		document.getElementById("welcome-title").style.visibility = "hidden";
		document.getElementById("welcome-obs").style.visibility = "hidden";
		document.getElementById("return").style.visibility = "hidden";
		document.getElementById("pasapalabra").style.visibility = "hidden";
		document.getElementById("input").style.visibility = "hidden";
		colorEngine("rgb(26, 197, 63)");
		setTimeout(function(){colorEngine("rgba(23, 86, 247, 0.514)")},600);
		setTimeout(function(){
			showMessageToUser ("JUEGO FINALIZADO","¡Enhorabuena!<br><br>Aciertos: " + numAciertos + " de " + numPregRealizadas + "<br>Errores: " + numErrores +  "<br>Pasapalabras: " + numPasapalabras + "<br><br><br><br>¿Quiere jugar otra vez?");
			document.getElementById("userScore-obs").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + userName.toUpperCase() + "<br><br>Aciertos: " + numAciertos + "/" + numPregRealizadas + "<br>Errores: " + numErrores +  "<br>Pasapalabras: " + numPasapalabras;
			document.getElementById("ranking").style.top = "54px";
			document.getElementById("userScore").style.top = "-88px";
			document.getElementById("welcome-obs").style.top = "36px";
			document.getElementById("welcome-content").style.visibility = "visible";
			document.getElementById("welcome-obs").style.visibility = "visible";
			mostrarPuntuacion(ranking);
			document.getElementById("ranking").style.visibility = "visible";
			document.getElementById("userScore").style.visibility = "visible";
			document.getElementById("welcome-obs").innerHTML =  "¡Enhorabuena!<br><br><br><br><br><br><br>¿Jugamos de nuevo?";
			document.getElementById("welcome-title").style.top = "22px";			
			document.getElementById("welcome-obs").style.fontSize = "22px";		
			setUserUI("hidden");		
			letraActual = "";
			timerSecondsToAdd = 0;
			numErrores = 0;		
			document.getElementById("empezar").style.visibility = "visible";
			document.getElementById("isNewGame").innerHTML = "1";		
			document.getElementById("input").value = userName;
			document.getElementById("input").style.visibility = "hidden";
			document.getElementById("welcome-title").style.visibility = "visible";	
			return false;
		},1800);
	}else{
		return true;
	};	
};

function hacerPregunta(){
	document.getElementById("input").focus();
	document.getElementById("userScore").style.visibility = "hidden";
	document.getElementById("ranking").style.visibility = "hidden";
	document.getElementById("userScore-obs").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + userName.toUpperCase() + "<br><br>Aciertos: " + numAciertos + "/" + numPregRealizadas + "<br>Errores: " + numErrores +  "<br>Pasapalabras: " + numPasapalabras  ;
	if (quedanPreguntas()){		
		if(document.querySelector('.modoAdmin:checked')){			
			showResponse = true;		
		}				
		verifiedAnswer = getCorrectAnswer(letraActual);
		if (showResponse){
			document.getElementById("input").value = verifiedAnswer;
			document.getElementById("return").focus();
		}else{
			document.getElementById("input").value = "Responde aqui...";
		};
		questionIsAnswered = false;
		isNewQuestion = false;
		document.getElementById("welcome-content").style.background = "NONE";
		document.getElementById("input").style.visibility = "visible";		
		document.getElementById("welcome-title").style.top = "102px";
		document.getElementById("welcome-title").style.visibility = "visible";
		document.getElementById("welcome-title").style.fontSize = "24px";
		var qVal1 = getQuestion(letraActual);		
		document.getElementById("welcome-obs").style.fontSize = "20px";		
		document.getElementById("welcome-obs").innerHTML = qVal1.split(".")[1];
		document.getElementById("welcome-obs").style.top = "135px";		
		document.getElementById("welcome-obs").style.visibility = "visible";				
		if(document.getElementById("welcome-obs").innerHTML.length <= 50){
			document.getElementById("welcome-obs-container").style.textAlign = "center";
		}else{
			document.getElementById("welcome-obs-container").style.textAlign = "justify";
		}		
		document.getElementById("welcome-title").innerHTML = qVal1.split(".")[0];
		document.getElementById("letter"+letraActual.toUpperCase()).style.background = "rgb(23, 87, 247)";		
		document.getElementById("pasapalabra-container").style.visibility = "visible";		
		document.getElementById("return").style.visibility = "visible";		
		document.getElementById("pasapalabra").style.visibility = "visible";				
		timerCountDown = setInterval(incrementSeconds, 1000);
		lightActiveLetter = setInterval(lightLetter, 1000);			
	}	
};

function setLetterCorrectSize(){
	document.getElementById("letter"+letraActual.toUpperCase()+"-container").style.top = letterLastPos;
	document.getElementById("letter"+letraActual.toUpperCase()).style.fontSize = "35px";
	document.getElementById("letter"+letraActual.toUpperCase()).style.background = "rgba(23, 86, 247, 0.514)";
	document.getElementById("letter"+letraActual.toUpperCase()).style.width = "55px";
	document.getElementById("letter"+letraActual.toUpperCase()).style.height = "55px";	
	document.getElementById("letter"+letraActual.toUpperCase()+"-container").style.width = "55px";
	document.getElementById("letter"+letraActual.toUpperCase()+"-container").style.height = "55px";
	document.getElementById("letter"+letraActual.toUpperCase()+"-container").style.borderWidth = "2px";	
}

function pressPasapalabra(){
	setLetterCorrectSize();
	document.getElementById("input").value = "pasapalabra";	
	isNewQuestion = true;
	document.getElementById("letter"+letraActual.toUpperCase()).style.background = "rgba(23, 86, 247, 0.514)";
	continueAsking();
	clearInterval(timerCountDown);
	clearInterval(lightActiveLetter);
	clearInterval(timerRotateTimer);
	hacerPregunta();
	document.getElementById("input").focus();
}
function changeSoundStatus(){	
	let newValue = "";
	let status = isVolEnabled;
	isVolEnabled = !status;
	if(isVolEnabled){
		soundCabecera.play();
		newValue = "hidden";
		document.getElementById('input_ModoSound').checked = true;
	}else{
		soundCabecera.pause();
		soundCabecera.currentTime = 0;
		newValue = "visible";		
	}
	document.querySelector(".iconSoundDisabled").style.visibility = newValue;
}

function continueAsking(){	
	document.getElementById("userScore-obs").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + userName.toUpperCase() + "<br><br>Aciertos: " + numAciertos + "/" + numPregRealizadas + "<br>Errores: " + numErrores +  "<br>Pasapalabras: " + numPasapalabras  ;
	userAnswer = document.getElementById("input").value;	
	if (userAnswer != null){
			userAnswer = userAnswer.toLowerCase();
	};
		switch (userAnswer){
			case null:
				letraActual = "";
				document.getElementById("welcome-title").innerHTML = "Partida cancelada";				
				return false;								
			break;
			case "pasapalabra":
				numPasapalabras += 1;				
				nextQuestion();
			break;
			case "end":
				document.getElementById("welcome-title").innerHTML = "Partida cancelada";				
				return false;
			break;
			default:				
				numPregRealizadas += 1;	
				changeQuestionStatus();	
				let soundToPlay =  "";								
				if (userAnswer == verifiedAnswer){					
					puntuar(userName,1);
					document.getElementById("welcome-title").innerHTML = "¡¡CORRECTO!!";									
					document.getElementById("letter"+letraActual.toUpperCase()).style.background = "rgb(26, 197, 63)";
					document.querySelector("#soundCorrect");										
					soundToPlay = document.querySelector("#soundCorrect");
				}else{				
					document.getElementById("welcome-title").innerHTML = "¡¡NO ES CORRECTO!!";					
					document.getElementById("letter"+letraActual.toUpperCase()).style.background = "rgb(226, 24, 24)";
					numErrores += 1;
					soundToPlay = document.querySelector("#soundError");									
				};
				if(isVolEnabled){					
					soundToPlay.play();
				}				
				document.getElementById("ranking").style.top = "108px";
				document.getElementById("userScore").style.top = "-37px";
				document.getElementById("letter"+letraActual.toUpperCase()).style.fontSize = "35px";
				document.getElementById("userScore-obs").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + userName.toUpperCase() + "<br><br>Aciertos: " + numAciertos + "/" + numPregRealizadas + "<br>Errores: " + numErrores +  "<br>Pasapalabras: " + numPasapalabras  ;
				document.getElementById("welcome-obs-container").style.textAlign = "center";
				document.getElementById("welcome-obs").style.top = "230px";
				//document.getElementById("return").style.top = "396px";
				document.getElementById("welcome-obs").style.visibility = "visible";								
				document.getElementById("input").style.visibility = "hidden";
				document.getElementById("pasapalabra").style.visibility = "hidden";
				document.getElementById("return").style.left = "145px";	
				if(document.querySelector('.modoAuto:checked')){
					document.getElementById("welcome-title").style.top = "220px";
					document.getElementById("welcome-title").style.fontSize = "40px";
					document.getElementById("return").style.visibility = "hidden";
					document.getElementById("welcome-obs").style.visibility = "hidden";
					document.getElementById("ranking").style.visibility = "hidden";
					document.getElementById("userScore").style.visibility = "hidden";				
				}else{
					document.getElementById("welcome-obs").innerHTML = "<br><br><br>¿Siguiente Pregunta?";
					document.getElementById("return").focus();
					mostrarPuntuacion(ranking);
				}						 
				nextQuestion();
				setTimeout(function(){
				if(document.querySelector('.modoAuto:checked')){
					sendInput();
					if(!isGameOver){
						setLetterCorrectSize();
					}										
				}
				},500);						
		};	
};	

function changeQuestionStatus(){
	rosco[indexActualQuestion].asked = true;
};

function reiniciarRosco(){			
	let roscoTemp = [];		
	for (let i = 0; i < rosco.length; i++){
		if (rosco[i].asked == false ){
			roscoTemp.push({letter: rosco[i].letter, answer: rosco[i].answer, question: rosco[i].question, asked: false});
		}
	};		
	rosco = roscoTemp;
	if (rosco.length === 0){
		letraActual = "";		
	}else{
		letraActual = rosco[0].letter;	
	};	
	return letraActual;	
};

function isLastLetter(){
	if (rosco.findIndex(i => i.letter === letraActual) == rosco.length - 1){
		return true;
	}
};

function nextQuestion(){	
	if (isLastLetter()){
		reiniciarRosco();
	}else{		
		let index = rosco.findIndex(i => i.letter === letraActual);	
		letraAnterior = letraActual;
		letraActual = rosco[index + 1].letter;				
		indexActualQuestion = index;	 	
	};
	return letraActual;
};

function modificarPuntos(usuario, newPuntos){
    for (let i = 0;i < ranking.length;i++){
        if(ranking[i].usuario == usuario){
            ranking[i].puntos = ranking[i].puntos + newPuntos;			         
         };
    };	
};

function tienePuntos(usuario){
    for (let i = 0;i < ranking.length;i++){
        if(ranking[i].usuario == usuario){
            return true;
        };
    };
};
    
function addPuntos(user, points){
    ranking.push({usuario: user, puntos: points});	   
}

function puntuar(usuario, puntos){	
	numAciertos += 1;
	document.getElementById("textScore").innerHTML = numAciertos;
    if(tienePuntos(usuario)){
        modificarPuntos(usuario, puntos);
    }else{
        addPuntos(usuario, puntos);        
    }	        
}; 

function mostrarPuntuacion(tabla){  	
	document.getElementById("userScore").style.visibility = "visible";
	document.getElementById("ranking").style.visibility = "visible";	
	document.getElementById("ranking-obs").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RANKING"+ "<br>";
	let i=1;
	tabla.sort(function(a, b){return b.puntos - a.puntos})
    tabla.forEach(element => {
		switch (i){
			case 1:
				let posibleBr = "";
				if (ranking.length <= 4){posibleBr = "<br>"}
				document.getElementById("ranking-obs").innerHTML = document.getElementById("ranking-obs").innerHTML + posibleBr + "<span class='userFirst'>" + i + ". " +  element.usuario + ":&nbsp;&nbsp; " + element.puntos+"</span>";
				break;
			case 2:
				document.getElementById("ranking-obs").innerHTML = document.getElementById("ranking-obs").innerHTML + "<br><span class='userSecond'>" + i + ". " +  element.usuario + ":&nbsp;&nbsp; " + element.puntos+"</span>";
				break;
			case 3:
				document.getElementById("ranking-obs").innerHTML = document.getElementById("ranking-obs").innerHTML + "<br><span class='userThird'>" + i + ". " +  element.usuario + ":&nbsp;&nbsp; " + element.puntos+"</span>";
				break;
			default:
				document.getElementById("ranking-obs").innerHTML = document.getElementById("ranking-obs").innerHTML + "<br>" + i + ". " +  element.usuario +  ":&nbsp;&nbsp; " + element.puntos+"</span>";
			}		
		i +=1;
	});
};

function getQuestion(){ 
	let index = rosco.findIndex(i => i.letter === letraActual);	
	return rosco[index].question;
};

function getCorrectAnswer(){	
	let index = rosco.findIndex(i => i.letter === letraActual);
	indexActualQuestion = index;	
	return rosco[index].answer;
};

function resetRosco(){
	rosco = [];
};

function resetQuestions(){
	for (let y = 0; y < questions.length; y++){
			if (questions[y].status == 1){
				questions[y].status = 0;				
			};
		};
};

function iniVariables(){
	letraActual = "a";
	numAciertos = 0;
	numPregRealizadas = 0;
	numPasapalabras = 0;
	generarRosco();
	isVolEnabled = soundIsEnabled();
	soundCabecera = document.querySelector("#soundCabecera");
};

function generarRosco(){	
	resetRosco();	
	for(let i = 0;i < listaLetras.length; i++){
		for (let y = 0; y < questions.length; y++){
			if (listaLetras[i] == questions[y].letter && questions[y].status == 0){
				questions[y].status = 1;
				rosco.push({letter: questions[y].letter, answer: questions[y].answer, question: questions[y].question, asked: false});
				i += numPregPorLetra - 1;
			};
		};
	};
	if (rosco.length == 0){
		resetQuestions();
		generarRosco();
	};
};
