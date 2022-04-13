let userName = "";
let isNewGame = true;
let usersCarton = [];
let bolasPremiadas = [];
let bolasParaSortear = [];
let numLineas = 5;
let numBolas = 99;
let modoAUTO = false;
let numSorteos = 0;
let ranking = [];
let numBots = 0;
let isLinea = false;
let isFirstRun = true;
let userWinner = "";
let userHasCancelled = false;

iNeedDebugger = false;

bingo();
sayByeBye();

function bingo(){
    if (iNeedDebugger){debugger};
    if (isFirstRun){
        userName = prompt("Vamos a jugar al bingo.\nPor favor introduzca su nombre: ","Player1");
        switch(userName){
            case "":
                if (window.confirm("Es obligatorio indicar un nombre.\n¿Probamos de nuevo?")){
                    bingo();
                };
            break;
            case null:
                isNewGame = false;
            break;
            default:
                if (!window.confirm("¿Es correcta la configuración predeterminada?\nLinea: " + numLineas + " bolas.\nBolas sorteadas: " + numBolas)){
                    cambiarSettings();
                }else{
                    isFirstRun = false;
                };
                numBots = window.prompt("¿Con cuantos jugadores quiere jugar?",5);
                switch (numBots){
                    case null:
                        return false;                   
                    break;
                    case "":
                        if (window.confirm("El valor introducido no es válido.\n¿Quiere intentarlo otra vez?")){
                            bingo();
                        };
                    break;
                };                
        }; 
    };
    if (isNewGame){
        console.log("Bienvenido " + userName);                
        generarCarton(numLineas, userName,"ask");
        if (!userHasCancelled){
            for (let i = 0;i < numBots; i++){
                generarCarton(numLineas, "Binguero" + (i + 1), "auto");
            }; 
            let userAnswer = window.prompt("Actualmente hay " + usersCarton.length/numLineas + " jugadores activos.\n¿Quiere visualizar sus cartones? (y/n).","n");
            iniStart : {
            switch (userAnswer){
                case "y":
                    mostrarCarton(usersCarton);
                    break;
                case null:
                    return false;
                break;            
            };

            let answer = window.prompt("Escriba AUTO si quiere activar el modo AUTO?\nAUTO = Girar bombo hasta cantar linea.","auto");
            if (iNeedDebugger){debugger};
            switch(answer){
                case "auto":
                    modoAUTO = true;
                    iniVariables();
                    jugar();                
                    isNewGame = false; 
                break;
                case null:
                    return false;
                break;
                default:
                    iniVariables();
                    jugar();                
                    isNewGame = false;    
            };
        };
        };            
    };        
};

function sayByeBye(){
    console.log("Bye bye.");    
};

function cambiarSettings(){    
    numLineas = window.prompt("Actualmente son " + numLineas + " para una linea.\n Indique otro número si quiere cambiarlo",5);
     if (isNaN(numLineas) || (numLineas == "")){                
                if (window.confirm("El valor introducido no es válido.\n¿Quiere intentarlo otra vez?")){
                    cambiarSettings();
                };
        }else{
            numLineas = parseInt(numLineas);
        }; 
    numBolas = window.prompt("Actualmente son " + numBolas + ".\n Indique otro número si quiere cambiarlo",99);
    if (isNaN(numBolas) || (numBolas == "")){                
                if (window.confirm("El valor introducido no es válido.\n¿Quiere intentarlo otra vez?")){
                    cambiarSettings();
                };
        }else{
            numBolas = parseInt(numBolas);
        };
    isFirstRun = false;
};

function jugar(){     
        if (modoAUTO){
            sacarBola();            
            if (!hayLinea()){                                 
                jugar();
            }else{
                console.log("Ranking de puntuaciones: ");              
                mostrarCarton(ranking.sort(function(a, b){return b.puntos - a.puntos}));                
                if(quiereJugar()){                   
                    resetData();
                    bingo();
                };
            }            
        }else{
            if(quiereJugar()){
                sacarBola();                                          
                if (!hayLinea()){                     
                    jugar();
                }else{
                    console.log("Ranking de puntuaciones: ");                                      
                    mostrarCarton(ranking.sort(function(a, b){return b.puntos - a.puntos}));
                    if(quiereJugar()){
                        resetData();
                        jugar();
                    };
                };                         
            };
       };
};

function iniVariables(){    
    bolasParaSortear = [];  
    for (i = 0;i < numBolas; i++){
        bolasParaSortear.push(i+1);
    };       
};

function modficarPuntos(usuario, newPuntos){
    for (let i = 0;i < ranking.length;i++){
        if(ranking[i].usuario == usuario){
            ranking[i].puntos = ranking[i].puntos + newPuntos;
             console.log("Puntuación actual en el ranking " + usuario + ": " +  ranking[i].puntos);
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
    console.log("Puntos totales en el ranking: " +  points);
};

function puntuar(usuario, numSorteos){    
    if(numSorteos < 30){
        newPuntos = 10;
    }else if(numSorteos < 50){
        newPuntos = 5;
        }else{
             newPuntos = 1;
    };
    if(tienePuntos(usuario)){
        modficarPuntos(usuario, newPuntos);
    }else{
        addPuntos(usuario, newPuntos);        
    }        
};    

function resetData(){
    usersCarton = [];
    bolasPremiadas = [];    
    numSorteos = 0;    
    isNewGame = true;
    isLinea = false;    
    iniVariables();
    console.log("\nNueva partida.");
};

function hayLinea(){
    let numAciertos = 0;    
    let contador = 0; 
   for (let i = 0;i < usersCarton.length;i++){
        contador += 1;        
        if(usersCarton[i].premiado == true){
            numAciertos = numAciertos + 1;
            if (numAciertos == numLineas){
                console.log("\n¡¡¡¡Linea!!!!");
                console.log("Ganador: " + usersCarton[i].usuario);
                console.log("Línea conseguida en la tirada: " + numSorteos);        
                puntuar(usersCarton[i].usuario, numSorteos);
                isLinea = true;
                userWinner = usersCarton[i].usuario;
                return true;
            };                 
        };
        if(contador == numLineas){
                numAciertos = 0;
                contador = 0;
        };
    };
    console.log("No hay lineas.");
    console.log("Lista de bolas premiadas hasta el momento: ");
    mostrarCarton(bolasPremiadas);
    console.log("Número de bolas sorteadas hasta el momento: " + bolasPremiadas.length);  
};

function getUserData(user){
    let userData = [];
    for (let i = 0;i < usersCarton.length;i++){           
            if(usersCarton[i].usuario == user){
               userData.push({usuario: usersCarton[i].usuario, numero: usersCarton[i].numero,premiado: usersCarton[i].premiado});                   
            };               
    };
    return userData;
};

function chooseRandom(arr, num = 1){
    const res = [];
    let random = 0;
    for(let i = 0; i < num; ){
        random = Math.floor(Math.random() * arr.length);
        if(res.indexOf(arr[random]) !== -1){
            continue;
        };
        res.push(arr[random]);
        i++;
    };    
    bolasParaSortear.splice(random,1);
    return res[0];
};

function sacarBola(){
   if(usersCarton.length == 0){        
        mostrarCarton(usersCarton);
    }else{  
            newBola = chooseRandom(bolasParaSortear,1);            
            bolasPremiadas.push({numero: newBola});
            console.log("\nHa salido la bola número: " + newBola);            
            actualizarCartones(newBola);             
            numSorteos += 1;            
    };    
};

function actualizarCartones(newBola){  
    let posBegin = 0;  
    while (usersCarton.includes(usersCarton.find(el=>el.numero===newBola),posBegin)){      
        posBegin = usersCarton.findIndex(i => i.numero === newBola);       
        usersCarton[posBegin].premiado = true;
        console.log(usersCarton[posBegin].usuario + " tiene el " + newBola + " en su cartón.");
        mostrarCarton(getUserData(usersCarton[posBegin].usuario));
        posBegin +=1;        
    };
};

function quiereJugar(){
    let textMessage = "";
    if (isNewGame){
        textMessage = "La partida ha terminado\nEl ganador es: "+ userWinner +"\nNúmero de bolas sorteadas: " + numSorteos + "\n\n¿Quiere un nuevo cartón y giramos el bombo?";
    }else{
        textMessage = "¿Giramos el bombo?";        
    };
    if (window.confirm(textMessage)){
        isNewGame = true;
        return true;
    };
};

function mostrarCarton(tabla){  
    console.table(tabla);
};

function mostrarCartonEnJuego(tabla,user){
    let resultado = [];
    console.log("Asi esta su carton: ");                
    console.table(resultado);
};

function generarCarton(numPorCarton, user, mode){  
    let newNum = 0;   
    for (let i = 0;i < numPorCarton;i++){
        newNum = Math.floor((Math.random() * 99) + 1);
        if(!allReadyAssigned(user, newNum,usersCarton)){
            usersCarton.push({usuario: user, numero: newNum, premiado: false});
        }else{
            i--;
        };       
    };     
    if(user == userName){
        console.log("Este es su cartón: ");
        mostrarCarton(getUserData(user));    
    };
    if (mode == "ask"){
        let userAnswer = window.prompt("¿Quiere jugar con este cartón? (y/n)","y");
        switch (userAnswer){
            case "n":
                usersCarton = [];
                generarCarton(numLineas, user,"ask");
                break;
            case null:
                userHasCancelled = true;
            break;
        };
    };   
};

function allReadyAssigned(user, num,tabla){
    for (let i = 0; i < tabla.length; i++){
        if (tabla[i].usuario == user && tabla[i].numero == num){
            return true;
        };
    };
    return false;
};















