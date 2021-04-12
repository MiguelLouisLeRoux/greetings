function greetExerciseFactFunct() {
    var counter = 0;
    var radio = document.querySelector("input[name='radioGreet']:checked");
    
    var portGreet = "Olá, ";
    var swedGreet = "Hej, ";
    var japGreet = "こんにちは, ";
    
    if (nameIn.value === "") {
        
    } else {

        if (!radio) {
            greetName.innerHTML = nameIn.value;
            counter++;
        } else if (radio) {

            greetName.innerHTML = nameIn.value;

            if (radio.value === "portuguese") {
                greet.innerHTML = portGreet;
                counter++;
            } else if (radio.value === "swedish") {
                greet.innerHTML = swedGreet;
                counter++;
            } else if (radio.value === "japanese") {
                greet.innerHTML = japGreet;
                counter++;
            }
        }

    }
    
    return counter;
}