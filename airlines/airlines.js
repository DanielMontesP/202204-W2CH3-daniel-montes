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

let iNeedDebugger = false;

exeAirlines(flights);
sayGoodBye();

function exeAirlines(flights){
    if (showWelcome()){
        showFlights(flights);
        showCost(flights);
        showFlightWithScale(flights);
        showLastFlights(flights);
    };    
};

function showWelcome(){
    let userName =  prompt("Le informaremos sobre los vuelos del día.\nIntroduzca su nombre por favor: ");
    if (userName == "" || userName == null){
        if(window.confirm("El valor introducido no es válido.\n¿Lo volvemos a intentar?")){
            showWelcome();
        }else{
            sayGoodBye();
        };
    }else{
          console.log("Bienvenido " + userName + ".\nEstos son los vuelos del día...\n\n");    
          return true;
    };
};

function sayGoodBye(){
    console.log('\nBye Bye');
};

function showFlights(flights){
    let textoEscala = "";
    for (let i = 0; i < flights.length;i++){
        let tieneEscala = flights[i].scale;   
        if (!tieneEscala){
            textoEscala = "no ";
        }else{
            textoEscala = "si ";
        };
        if (iNeedDebugger){debugger};    
        let textMessage = "El vuelo con origen " + flights[i].from + " y destino " + flights[i].to+ " tiene un coste de " + flights[i].cost + " y " + textoEscala + "realiza escalas.";
        console.log(textMessage);
    };
};

function showCost(flights){
    let totalCost = 0;
    for (let i = 0; i < flights.length;i++){
        totalCost = totalCost + flights[i].cost;         
    };
    totalCost = totalCost / flights.length;
    let textMessage = "\nEl coste medio de los " + flights.length + " vuelos es: " + parseInt(totalCost) + " euros.";
    console.log(textMessage);
};

function showFlightWithScale(flights){
    console.log("\nLos siguientes vuelos SI tienen escala: ");
    console.log("Origen\t\t\t\t\tDestino");
    for (let i = 0; i < flights.length;i++){
        let tieneEscala = flights[i].scale;       
        if (tieneEscala){                 
            textoEscala = "si ";
            let numSpaceFrom = flights[i].from.length;
            let espaciosTabFrom = "";
            for (let i = 0; i < (15 - numSpaceFrom); i++){
                espaciosTabFrom = espaciosTabFrom + " ";
            };
            let numSpaceTo = flights[i].to.length;
            let espaciosTabTo = "";
            for (let i = 0; i < (15 - numSpaceTo); i++){
                espaciosTabTo = espaciosTabTo + " ";
            };     
            let textMessage = flights[i].from + espaciosTabFrom + "\t==>\t\t" + flights[i].to;
            console.log(textMessage);
        };
    };     
};

function  showLastFlights(flights){
    console.log("\nEstos son los últimos 5 vuelos del día: ");
    console.log("Origen\t\t\t\t\tDestino");
    for (let i = flights.length - 5; i < flights.length;i++){    
        let tieneEscala = flights[i].scale;
        if (iNeedDebugger){debugger};
        let numSpaceFrom = flights[i].from.length;
        let espaciosTabFrom = "";
        for (let i = 0; i < (15 - numSpaceFrom); i++){
            espaciosTabFrom = espaciosTabFrom + " ";
        };        
        let numSpaceTo = flights[i].to.length;
        let espaciosTabTo = "";
        for (let i = 0; i < (15 - numSpaceTo); i++){
            espaciosTabTo = espaciosTabTo + " ";
        };
        let textMessage = flights[i].from + espaciosTabFrom + "\t==>\t\t" + flights[i].to;    
        console.log(textMessage);
    };
};

