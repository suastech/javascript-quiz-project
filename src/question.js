class Question {
    // YOUR CODE HERE:
    //
    // 1. constructor (text, choices, answer, difficulty)
    constructor (text, choices, answer, difficulty) {
        this.text = text
        this.choices = choices
        this.answer = answer //Right answer
        this.difficulty = difficulty
    }

    shuffleChoices() {
       let copy = [...this.choices];
       let newArray = [];
       let originalLength = copy.length
       while (newArray.length < originalLength) {
           const randomR = Math.floor(Math.random() * copy.length )
           newArray.push(copy[randomR])
           copy.splice(randomR,1)
       }
       this.choices = newArray;
    }
}

// let question1 = new Question("¿Why?", ["a", "b", "c", "d", "e"], "asdf", 1)
// console.log(question1.choices)
// question1.shuffleChoices()
// console.log(question1.choices)
// question1.shuffleChoices()
// console.log(question1.choices)
// question1.shuffleChoices()
// console.log(question1.choices)


