
let flights = [
    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },
    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },
    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }
];

let iNeedDebugger = true;

exeAirlines(flights);

function sayByeBye(){
	console.log('\nBye Bye');
};


function exeAirlines(flights){
	//if (iNeedDebugger){debugger};
	if (showWelcome()){
		showFlights(flights,"standard");
	    showCost(flights);
	    console.log("\nLos siguientes vuelos SI tienen escala: ");
		console.log("Origen\t\t\t\t\tDestino");
	    showFlights(flights,"conEscala");
	    console.log("\nEstos son los últimos 5 vuelos del día: ");
		console.log("Origen\t\t\t\t\tDestino");
	    showFlights(flights,"lastFlights");     
	    showControlPanel();	
	};   
};

function addFlight(){
	//if (iNeedDebugger){debugger};
	if (flights.length < 15){
        let newId =  parseInt(prompt("¿Cúal es el id de vuelo?: "));
        if (isNaN(newId)){
            window.alert("Proceso cancelado.");
       	}else{
            if (!idExist(newId)){
            	if (askForNewFlighData()){
            		flights.push({id: newId, from: newOrigen, to: newDestino, cost: parseInt(newCoste), scale: newEscala});
                console.log("\nEl vuelo con id: " + newId+  " ha sido añadido correctamente.");
            	};            			               
            	          		
	        }else{
                window.alert("El id: " + newId + ", ya existe, pruebe de nuevo.");
                addFlight();
            };
        };
    }else{
        window.alert("Sólo se pueden añadir 15 vuelos...");     
    };
};
function askForNewFlightData(){
	if (iNeedDebugger){debugger};
	
	let newOrigen = askFor("Origen");
            	let newDestino = askFor("Destino");
            	let newCoste = askFor("Coste");
            	let newEscala = askFor("Escala");
            	if (newEscala == "y"){
				    newEscala = true;
				}else{
				   newEscala = false;
				};
				
};

function askFor(option){
	let textMessage = "";	
	switch (option){
		case "Origen":
			textMessage =  "¿Cúal es el origen?: ";             
		break;
		case "Destino":
			textMessage = "¿Cúal es el destino?: ";
		break;
		case "Coste":
			textMessage = "¿Cúal es el coste?: ";
		break;
		case "Escala":
			textMessage = "¿Tiene escalas?:(y/n) ";
		break;
	};
	if (iNeedDebugger){debugger};
	let userResponse =  prompt(textMessage);	
	if (isValid(userResponse)){
    	return userResponse;
    };  
};

function isValid(userResponse,option){
	if (userResponse != null && userResponse != ""){
		return true;
	}else{
		if(window.confirm("El valor introducido no es válido.\n¿Lo volvemos a intentar?")){   	 	
    		addFlight();
    	}else{
    		sayByeBye();
    	};
	};	
};

function showControlPanel(){
	switch (askForTypeOfUser()){    	 
			case "admin":
				switch (askForTask("admin")){
					case "a":
						if (confirmTask("a")){
							if (iNeedDebugger){debugger};						
							addFlight();	
							console.log("\nListado de vuelos: ");	
							showFlights(flights,"byId");
						}else{
							console.log("\nEl proceso se ha detenido.");
						};
					break;
					case "e":
						if (confirmTask("e")){
							console.log("\nListado de vuelos: ");					
							showFlights(flights,"byId");
							if (delFlight()){
								console.log("\nEl vuelo ha sido borrado correctamente.");								
								console.log("\nListado de vuelos: ");	
								showFlights(flights,"byId");
							}else{
								let userAnswer = window.prompt("\nEl valor introducido no es válido\n¿Quiere volver a intentarlo? (y/n)");
								if (userAnswer == "y"){
									showControlPanel();
								};
							};
						}else{
							let userAnswer = window.prompt("\nEl valor introducido no es válido\n¿Quiere volver a intentarlo? (y/n)");
								if (userAnswer == "y"){
									showControlPanel();
								};
						};
					break;
					case null:
						window.alert("Proceso cancelado.");
					break;
					default:
						let userAnswer = window.prompt("\nEl valor introducido no es válido\n¿Quiere volver a intentarlo? (y/n)");
								if (userAnswer == "y"){
									showControlPanel();
								};
					break;
				};			
			break;
			case "user":
				switch (askForTask("user")){
					case "c":
						if (confirmTask("c")){
							buyFlight();											
						}else{
							let userAnswer = window.prompt("\nEl proceso se ha detenido por que el valor introducido no es válido\n¿Quiere volver a intentarlo? (y/n)");
								if (userAnswer == "y"){
									showControlPanel();
								};	
						};
					break;
					case null:
						window.alert("Proceso cancelado.");
					break;				
					default:
						let userAnswer = window.prompt("\nEl proceso se ha detenido por que el valor introducido no es válido\n¿Quiere volver a intentarlo? (y/n)");
								if (userAnswer == "y"){
									showControlPanel();
								};			
					break;
				};			
			break;
			default:
				let userAnswer = window.prompt("\nEl valor introducido no es válido\n¿Quiere volver a intentarlo? (y/n)");
				if (userAnswer == "y"){
					showControlPanel();
				};
			break;		
		};
};

function buyFlight() {
	let userPrice = window.prompt("¿Cúal es su precio máximo?: ");

	if (!isNaN(userPrice)){
		console.log("\nLos siguientes vuelos encajan en su precio de: " + userPrice +" euros.");
		console.log("Id\tOrigen\t\t\t\t\tDestino\t\t\t\tPrecio");
		showFlights(flights,"filteredByPrice",userPrice);
		let idFlightToBuy = window.prompt("Indique el id del vuelo que quiere comprar: \n(Localice el id de vuelo en el listado de vuelos disponibles)");

		if(idExist(idFlightToBuy)){
			let flightPrice = getPrice(idFlightToBuy);

			if (flightPrice <= userPrice){
				console.log("\nEl poceso de compra del vuelo " + idFlightToBuy  + " ha finalizado correctamente.");	
				console.log("\nGracias por su compra, vuelva pronto.");		
			}else{
				let userAnswer = window.prompt("\nEl vuelo seleccionado: " + idFlightToBuy+ " tiene un precio de: " + flightPrice + " supera el máximo indicado: " + userPrice +"\n¿Esta seguro que quiere realizar la compra? (y/n)");
				if (userAnswer == "y"){
					console.log("\nEl poceso de compra del vuelo " + idFlightToBuy  + " ha finalizado correctamente.");	
					console.log("\nGracias por su compra, vuelva pronto.");	
				};				
			};			
		};
	};
};

function getPrice(idFlightToBuy){
	for (let i = 0; i < flights.length; i++){
		if (flights[i].id == idFlightToBuy){
			return flights[i].cost;
		};
	};
};

function delFlight(){	
		let idToDelete =  parseInt(prompt("¿Cúal es el id de vuelo que desea eliminar?: "));
		if (isNaN(idToDelete)){
			window.alert("Proceso cancelado.");
		}else{
			if (idExist(idToDelete)){
				for( var i = 0; i < flights.length; i++){ 
	                                   
			        if ( flights[i].id === idToDelete) { 
			            flights.splice(i, 1); 
			            i--; 
			        };
	    		};
	    		return true;				
			};
		};		
};

function idExist(id){	
	for (let i = 0; i < flights.length; i++){
		if (flights[i].id == id){
			return true;
		};
	};
	return false;
};

function askForTypeOfUser(){
	let userName =  prompt("Por favor indique si es USER o ADMIN: ");
	if (userName !== null){
		return userName.toLowerCase();
	}else{
		return userName;
	};	
};

function askForTask(typeOfUser){
	let task = "";
	switch(typeOfUser){
		case "admin":
			task =  prompt("Panel de control del Administrador.\nPuede realizar las siguientes tareas: \n\tEliminar vuelos: Pulse la tecla e\n\tAñadir vuelos: Pulsa la tecla a");
		break;
		case "user":
			task =  prompt("Puede realizar las siguientes tareas: \nComprar un vuelo: Pulse la tecla c");
		break;
		default:
			task = "";
		break;
	};		
	if (task !== null){
		return task.toLowerCase();
	}else{
		return task;
	};	
};

function confirmTask (typeOfWork){
	switch (typeOfWork){
		case "a":
			task = "añadir";
		break;
		case "e":
			task = "eliminar";
		break;
		case "c":
			task = "comprar";
		break;
	};
	if(window.confirm("¿Confirma que quiere " + task + " un vuelo?")){
		addNewFlight = true;
	};	
	return confirmTask;
};

function showWelcome(){
    let userName =  prompt("Introduzca su nombre por favor: ");
    switch(userName){
    	case "":
    		if(window.confirm("El valor introducido no es correcto.\n¿Lo volvemos a intentar?")){
    			showWelcome();
	    	}else{
	    		sayByeBye();
	    	};    		
    	break;
    	case null:
    		sayByeBye();
    	break;
    	default:
	    	console.log("Bienvenido " + userName + ".\nA continuación le mostramos los vuelos del día...\n");
	     	console.log("\n");
	     	return true;
    	break;
    };     
};

function showFlights(flights, typeOfView, userPrice){
	let textoEscala = "";
	let textMessage = "";
	for (let i = 0; i < flights.length;i++){
	    let tieneEscala = flights[i].scale;	   
	    if (!tieneEscala){
	        textoEscala = "no ";
	    }else{
	        textoEscala = "si ";
	    };	   
	    switch (typeOfView){
	    	case "byId":
	    		textMessage = "Id: " + flights[i].id+ " => Vuelo con origen " + flights[i].from + " y destino " + flights[i].to + " (" + textoEscala +"tiene escalas).";
	    		console.log(textMessage);
	    	break;
	    	case "standard":
	    		textMessage = "El vuelo con origen " + flights[i].from + " y destino " + flights[i].to+ " tiene un coste de " + flights[i].cost + " y " + textoEscala + "realiza escalas.";
	    		console.log(textMessage);
	    	break;
	    	case "filteredByPrice":
	    		if (flights[i].cost <= userPrice){	    			
   					let tieneEscala = flights[i].scale;			      
			        textoEscala = "si ";
			        
	        		textMessage = flights[i].id + "\t" + formatTextForView(flights[i].from) + "\t==>\t\t" + formatTextForView(flights[i].to) + "\t\t" + flights[i].cost;
	 				console.log(textMessage);
	    		};
	    	break;
	    	case "conEscala":		    	
			    let tieneEscala = flights[i].scale;
				  if (tieneEscala){   				         
				      textoEscala = "si ";				            
				      let textMessage = formatTextForView(flights[i].from) + "\t==>\t\t" + flights[i].to;
				      console.log(textMessage);
				   };			  		    
	    	break;
	    	case "lastFlights":	    		
			    if (i >= flights.length - 5){
			        let textMessage = formatTextForView(flights[i].from) + "\t==>\t\t" + flights[i].to;        
			        console.log(textMessage);
			    };			
	    	break;
	    };        
	};
};

function formatTextForView(text){
	let numSpace = text.length;
	let espaciosTab = "";	        

	for (let i = 0; i < (15 - numSpace); i++){
		 espaciosTab = espaciosTab + " ";
	};      
	return text + espaciosTab	     
};

function showCost(flights){
	let totalCost = 0;

  	for (let i = 0; i < flights.length;i++){
   		 totalCost = totalCost + flights[i].cost 
   		 //if (iNeedDebugger){debugger};  
    };
    totalCost = totalCost / flights.length;

   let textMessage = "\nEl coste medio de los " + flights.length + " vuelos es: " + parseInt(totalCost) + " euros.";
    console.log(textMessage);
};



