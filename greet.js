let nameIn = document.querySelector(".nameInput");
let count = document.querySelector(".counting");
let language = document.querySelector(".langInput");
let greet = document.querySelector(".greeting");
let greetName = document.querySelector(".nameOutput");
let theWar = document.querySelector(".errorMes");
let greetBtn = document.querySelector(".greetButton");
let clearBtn = document.querySelector(".clearButton");


var greetFactFunc = greetExerciseFactFunct();
count.innerHTML = greetFactFunc.values().counting;
function greetExercise() {

    var radio = document.querySelector("input[name='radioGreet']:checked");
    greetFactFunc.getName(nameIn.value);

    if (!radio) {

        // greetFactFunc.greetCounts(greetFactFunc.values().theName);
        greetFactFunc.noRadioButton();
        theWar.innerHTML = greetFactFunc.values().theError;
        setTimeout(function(){
            theWar.innerHTML = "";
            }, 2000);

    } else if (radio) {
        
        greetFactFunc.radioCheck(radio.value);
        greet.innerHTML = greetFactFunc.values().theGreeting;
        setTimeout(function(){
            greetName.innerHTML = "";
            greet.innerHTML = "";
            }, 2000);
            
    }
    
    count.innerHTML = greetFactFunc.values().counting;
    nameIn.value = "";

    console.log(greetFactFunc.values().objNames);

    greetFactFunc.setLoc(); 
}

greetBtn.addEventListener('click', greetExercise);

count.innerHTML = localStorage['tell'];
greetFactFunc.retrieve();


function clearingButton() {

    greetFactFunc.clearingButtonFactFunc();
    localStorage['tell'] = greetFactFunc.values().counting;
    greetName.innerHTML = greetFactFunc.values().theGreeting;
    count.innerHTML = greetFactFunc.values().counting;
    
}

clearBtn.addEventListener('click', clearingButton);

