

var game = {
    letters: "abcdefghijklmnoprstuvwxyz",
    chance: [],
    wins: 0,
    losses: 0,
    count: 10,
    comp_choice: null,


    Static:function(){
        document.querySelector('#wins').innerHTML = "  " + this.wins
        document.querySelector('#losses').innerHTML = "  " + this.losses
        document.querySelector('#chance').innerHTML = "  " + this.count
    },

    Check:function(key){
        key = key.toLowerCase()
        if(this.chance.indexOf(key) == -1){
            this.Win_Lose(key)
        }
        else{
            alert("you have already press this button")
        }
    },

    Win_Lose:function(key){
        if(key === this.comp_choice){
            this.wins++
            
            if(this.chance.length !== 0){
                this.chance = []
                document.querySelector('#repeat').innerHTML = this.chance
            } 
            document.querySelector('#letter').innerHTML = this.comp_choice
            this.comp_choice = this.letters[Math.floor(Math.random() * this.letters.length)]
            console.log(this.comp_choice)
            this.count = 9
        }

        else{
            this.count--
            this.chance.push(key)
            
            if(this.chance.length !== 0){
                document.querySelector('#repeat').innerHTML = this.chance
            } 

            if(this.count === 0){
                this.losses++
                document.querySelector('#letter').innerHTML = this.comp_choice
                this.chance = []
                this.comp_choice = this.letters[Math.floor(Math.random() * this.letters.length)]
                if(this.chance.length !== 0){
                    this.chance = []
                    document.querySelector('#repeat').innerHTML = this.chance
                } 
                console.log(this.comp_choice)
                this.count = 9
            }
        }

    },

    play:function(key){
        this.Static()
        this.Check(key)
        this.Static()
    }

}



game.comp_choice = game.letters[Math.floor(Math.random() * game.letters.length)]
console.log(game.comp_choice)

document.onkeyup = function(e){
    let KEY = e.key
    document.querySelector('#letter').innerHTML = ''
    game.play(KEY)

}