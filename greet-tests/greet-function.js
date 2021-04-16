    
function greetExerciseFactFunct() {

    //counter and object list
    var counter = 0;
    var namesList = {};

    //name variable
    var userName = "";

    //Error message variable
    var error = "Oops, you have not entered a name.";
    var secondGreet = "You have already been greeted.";

    //languages
    var eng = "Hello, ";
    var portGreet = "Olá, ";
    var swedGreet = "Hej, ";
    var japGreet = "こんにちは, ";
    var theGreet = "";
    
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
                return theGreet;
            }

        }

    }
    
    function radioCheck(radVal) {
        if (userName == "") {
            theGreet = error;
        } else {

            if (namesList[userName] === undefined) {
                if (radVal === "portuguese") {
                    counter++;
                    namesList[userName] = 1;
                    theGreet = portGreet + userName + " !";
                } else if (radVal === "swedish") {
                    counter++;
                    namesList[userName] = 1;
                    theGreet = swedGreet + userName + " !";
                } else if (radVal === "japanese") {
                    counter++;
                    namesList[userName] = 1;
                    theGreet = japGreet + userName + " !";
                }
            } else if (namesList.hasOwnProperty(userName)){
                theGreet = secondGreet;
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
            objNames : namesList
        }
    }

    function clearingButtonFactFunc() {
        counter = 0;
        namesList = {};
        theGreet = "";
    }

    function storage() {
        localStorage['tell'] = counter;
        localStorage['names'] = JSON.stringify(namesList);
    }


    return { getName,
             greetCounts,
             radioCheck,
             values,
             storage,
             clearingButtonFactFunc
    }
    
}


