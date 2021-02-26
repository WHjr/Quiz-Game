class Question{
    constructor(){
        this.title = createElement("h1")
        this.question = createElement("h3")
        this.option1 = createElement("h5")
        this.option2 = createElement("h5")
        this.option3 = createElement("h5")
        this.option4 = createElement("h5")
        this.inputName = createInput("Name")
        this.inputAnswer = createInput("Answer")
        this.submit = createButton("Submit")
        this.message = createElement("h4")
    }

    hide(){
        this.question.hide();
        this.option1.hide();
        this.option2.hide();
        this.option3.hide();
        this.option4.hide();
        this.message.hide();
    }

    display(){
        this.title.html("My Quiz Game")
        this.title.position(300,0)
        this.question.html("Question : Your Question Goes here")
        this.question.position(50,70)
        this.option1.html("1 : This is option 1")
        this.option1.position(100,100)
        this.option2.html("2 : This is option 2")
        this.option2.position(100,130)
        this.option3.html("3 : This is option 3")
        this.option3.position(100,160)
        this.option4.html("4 : This is option 4")
        this.option4.position(100,190)

        this.inputName.position(100,250)
        this.inputAnswer.position(300,250)
        this.submit.position(120,350)

        this.submit.mousePressed(()=>{
            this.inputName.hide();
            this.inputAnswer.hide();
            this.submit.hide();
            contestant.name = this.inputName.value();
            contestant.answer = this.inputAnswer.value();
            contestantCount += 1
            contestant.index = contestantCount
            contestant.update();
            contestant.updateCount(contestantCount);

            this.message.html("Your answer has been recorded. Waiting for everyone to answer...")
            this.message.position(120,350)
        })
    }
}