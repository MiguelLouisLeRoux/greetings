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
            greetTest.greetCounts("Kieth");
            greetTest.greetCounts("Amber");

            assert.equal(3,greetTest.values().counting);
        })

        it('Should not increment count when greeting the same name', function(){
            var greetTest = greetExerciseFactFunct();

            greetTest.greetCounts("John");
            greetTest.greetCounts("Kieth");
            greetTest.greetCounts("Amber");
            greetTest.greetCounts("Amber");

            assert.equal(3,greetTest.values().counting);
        })
    })

    describe ("Clearing counter", function(){
        it('Should be able reset counter to 0', function(){
            var greetTest = greetExerciseFactFunct();

            greetTest.greetCounts("John");
            greetTest.greetCounts("Kieth");
            greetTest.greetCounts("Amber");

            greetTest.clearingButtonFactFunc()

            assert.equal(0,greetTest.values().counting);
        })
    })    
})