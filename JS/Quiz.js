class Quiz{
    constructor(){}

    getState(){
        database.ref('gameState').on("value",function(data){
            gameState = data.val();
        })
    }

    updateState(state){
        database.ref('/').update({
            gameState: state
        })
    }

    async start(){
        
        if(gameState === 0){
            contestant = new Contestant();
            contestant.getCount();

            question = new Question();
            question.display();
        }
    }

    result(){
        question.hide();
        Contestant.getInfo();
        var yPos = 300
        for(var cont in allInfo){
            textSize(20)
            fill(0)
            text(allInfo[cont].name + " - " + allInfo[cont].answer , 300,yPos)
            yPos = yPos + 50
        }
    }
}