describe ("The Greeting Function", function(){
    it('Should not greet if text area is empty', function(){
        var greetTest = greetExerciseFactFunct();

        assert.equeal('',greetTest);
    })
})