describe ("The Greeting Function", function(){
    describe ("Should be able to get and return names", function(){
        it('Should return Pete', function(){

            var greetTest = greetExerciseFactFunct();

            greetTest.getName("Pete");

            assert.equal('Pete',greetTest.values().theName);
        })

        it('Should return Gertrude', function(){

            var greetTest = greetExerciseFactFunct();

            greetTest.getName("Gertrude");

            assert.equal('Gertrude',greetTest.values().theName);
        })
    })

    describe ("Should be able to return greeting in optional language", function(){
        it('Should return greeting in Portuguese', function(){
            var greetTest = greetExerciseFactFunct();
            assert.equal('Olá, ',greetTest.values().gPort);
        })

        it('Should return greeting in Swedish', function(){
            var greetTest = greetExerciseFactFunct();
            assert.equal('Hej, ',greetTest.values().gSwed);
        })

        it('Should return greeting in Japanese', function(){
            var greetTest = greetExerciseFactFunct();
            assert.equal('こんにちは, ',greetTest.values().gJap);
        })

        it('Should return error message when no name has been entered', function(){
            var greetTest = greetExerciseFactFunct();

            greetTest.greetCounts("");

            assert.equal('Oops, you have not entered a name.', greetTest.values().errorMes);
        })
    })

    describe ("Should be able increment count when necessary", function(){
        it('Should not increment count when greeting no name', function(){
            var greetTest = greetExerciseFactFunct();

            greetTest.greetCounts("");

            assert.equal(0,greetTest.values().counting);
        })

        it('Should increment count when greeting name', function(){
            var greetTest = greetExerciseFactFunct();

            greetTest.greetCounts("John");
            greetTest.greetCounts("Keith");
            greetTest.greetCounts("Amber");

            assert.equal(3,greetTest.values().counting);
        })

        it('Should not increment count when greeting the same name', function(){
            var greetTest = greetExerciseFactFunct();

            greetTest.greetCounts("John");
            greetTest.greetCounts("Keith");
            greetTest.greetCounts("Amber");
            greetTest.greetCounts("Amber");

            assert.equal(3,greetTest.values().counting);
        })
    })

    describe ("Should be able to return error messages when necessary", function(){
        
        it('Should return error message when name has been entered more than once', function(){
            var greetTest = greetExerciseFactFunct();

            greetTest.greetCounts("Miguel");
            greetTest.greetCounts("Miguel");

            assert.equal(greetTest.values().sGreet, greetTest.values().theGreeting);
        })

        it('Should return error message when no name has been entered', function(){
            var greetTest = greetExerciseFactFunct();

            greetTest.greetCounts("");

            assert.equal('Oops, you have not entered a name.', greetTest.values().errorMes);
        })
    })

    describe ("Clearing counter", function(){
        it('Should be able reset counter to 0', function(){
            var greetTest = greetExerciseFactFunct();

            greetTest.greetCounts("John");
            greetTest.greetCounts("Keith");
            greetTest.greetCounts("Amber");

            greetTest.clearingButtonFactFunc()

            assert.equal(0,greetTest.values().counting);
        })

        it('Should be able to empty list of names', function(){
            var greetTest = greetExerciseFactFunct();

            greetTest.greetCounts("John");
            greetTest.greetCounts("Keith");
            greetTest.greetCounts("Amber");

            greetTest.clearingButtonFactFunc()

            assert.deepEqual({},greetTest.values().objNames);
        })
    }) 
})