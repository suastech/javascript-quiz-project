class Question {
    constructor(text, choices, answer, difficulty) {
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
            const randomR = Math.floor(Math.random() * copy.length)
            newArray.push(copy[randomR])
            copy.splice(randomR, 1)
        }
        this.choices = newArray;
    }
}
