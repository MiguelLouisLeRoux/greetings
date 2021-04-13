function greetExerciseFactFunct() {

    //counter and object list
    var counter = 0;
    var namesList = {};

    //name variable
    var userName = "";

    //languages
    var portGreet = "Olá, ";
    var swedGreet = "Hej, ";
    var japGreet = "こんにちは, ";
    
    function getName(nameInput) {
        userName = nameInput.trim();
        return userName;
    }


    function greetCounts(userName) {
        if (userName == "") {
            
        } else {

            if (namesList[userName] === undefined) {

                // if (!radio) {
                // greetName.innerHTML = userName + " !";
                counter++;
                // } else if (radio) {

                // greetName.innerHTML = userName + " !";

                // if (radio.value === "portuguese") {
                //     // greet.innerHTML = portGreet;
                //     counter++;
                // } else if (radio.value === "swedish") {
                //     // greet.innerHTML = swedGreet;
                //     counter++;
                // } else if (radio.value === "japanese") {
                //     // greet.innerHTML = japGreet;
                //     counter++;
                // }
            // }

                namesList[userName] = 1;
            } else if (namesList.hasOwnProperty(userName)){

            }

        }

    }
    

    // nameIn.value = "";
    
    function values() {
        return {
            counting : counter,
            theName : userName,
            gPort : portGreet,
            gSwed : swedGreet,
            gJap : japGreet,
            objNames : namesList
        }
    }

    function clearingButtonFactFunc() {
    counter = 0;
    // localStorage['tell'] = counter;
    // greetName.innerHTML = "....";
    // greet.innerHTML = "Hello, ";
    // count.innerHTML = counter;

    namesList = {};
    
}

    return { getName,
             greetCounts,
             values,
             clearingButtonFactFunc
    }
    
}




