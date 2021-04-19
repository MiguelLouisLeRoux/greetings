function greetExerciseFactFunct() {

    //counter and object list
    var counter = 0;
    var namesList = {};

    //name variable
    var userName = "";

    //Error message variable
    var error = "Oops, no name entered.";
    var secondGreet = "You have already been greeted.";
    var noRad = "Oops, you have not selected a language."

    //languages
    var eng = "Hello, ";
    var portGreet = "Olá, ";
    var swedGreet = "Hej, ";
    var japGreet = "こんにちは, ";
    var theGreet = "";
    var theWarn = "";
    
    function getName(nameInput) {
        userName = nameInput.trim();
        return userName;
    }


    function greetCounts(userName) {
        if (userName == "") {
            theGreet = error;
            return error;
        } else {

            if (namesList[userName] === undefined) {
                counter++;
                namesList[userName] = 1;
                theGreet = eng + userName + " !";
                
               

            } else if (namesList.hasOwnProperty(userName)){
                theGreet = secondGreet;

                namesList[userName] ++;

                return theGreet;
            }

        }

    }

    function noRadioButton() {
            
            theWarn = noRad;
    
        }
    
    function radioCheck(radVal) {
        if (userName == "" || !/^[a-zA-Z]+$/.test(userName)) {
            theWarn = error;
        } else {

            if (/^[a-zA-Z]+$/.test(userName)) {
                if (namesList[userName] === undefined) {
                    if (radVal === "portuguese") {
                        counter++;
                        namesList[userName] = 1;
                        theGreet = portGreet + userName + " !";
                        return theGreet;
                    } else if (radVal === "swedish") {
                        counter++;
                        namesList[userName] = 1;
                        theGreet = swedGreet + userName + " !";
                        return theGreet;
                    } else if (radVal === "japanese") {
                        counter++;
                        namesList[userName] = 1;
                        theGreet = japGreet + userName + " !";
                        return theGreet;
                    }
                } else if (namesList.hasOwnProperty(userName)){
                    theGreet = secondGreet;
                    namesList[userName] ++;
                }
            }
        }
    }
    
    function values() {
        return {
            counting : counter,
            theName : userName,
            errorMes : error,
            sGreet : secondGreet,
            theGreeting : theGreet,
            gPort : portGreet,
            gSwed : swedGreet,
            gJap : japGreet,
            objNames : namesList,
            theError : theWarn
        }
    }

    function clearingButtonFactFunc() {
        counter = 0;
        namesList = {};
        theGreet = "";
    }

    function setLoc() {
        localStorage['tell'] = counter;
        localStorage['names'] = JSON.stringify(namesList);
    }

    function retrieve() {
        if (localStorage['tell'] && localStorage['names']) {
            counter = Number(localStorage['tell']);
            namesList = JSON.parse((localStorage['names']));
        }
    }

    return { getName,
             greetCounts,
             radioCheck,
             values,
             setLoc,
             retrieve,
             noRadioButton,
             clearingButtonFactFunc
    }
    
}


