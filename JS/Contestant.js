class Contestant {
    constructor(){
        this.name = null;
        this.index = 0;
        this.answer = null;
    }

    getCount(){
        database.ref("contestantCount").on("value",function(data){
            contestantCount = data.val();
        })
    }

    updateCount(count){
        database.ref('/').update({
            contestantCount: count
        })
    }

    update(){
        var playerRef = "contestants/cont" + this.index
        database.ref(playerRef).set({
            name : this.name,
            answer: this.answer
        })
    }

    static getInfo(){
        database.ref("contestants").on("value", function(data){
            allInfo = data.val();
        })
    }
}