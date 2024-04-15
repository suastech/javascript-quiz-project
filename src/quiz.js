class Quiz {
    // YOUR CODE HERE:

    constructor (questions, timeLimit, timeRemaining) {
        this.questions = questions;
        this.timeLimit = timeLimit;
        this.timeRemaining = timeRemaining;
        this.correctAnswers = 0; 
        this.currentQuestionIndex = 0;
    }

    getQuestion() {
    return this.questions[this.currentQuestionIndex]    
    }    
    moveToNextQuestion() {
        this.currentQuestionIndex++;
    }

    shuffleQuestions() {
       let copy = [...this.questions];
       let newArray = [];
       let originalLength = copy.length
       while (newArray.length < originalLength) {
           const randomR = Math.floor(Math.random() * copy.length )
           newArray.push(copy[randomR])
           copy.splice(randomR,1)
       }
       this.questions = newArray;
    }

    checkAnswer(answer) {
        if (answer === this.questions[this.currentQuestionIndex].answer ) {
            this.correctAnswers++;
        }
    }

    hasEnded() {
        if (this.currentQuestionIndex < this.questions.length) {
        return false
        }
        return true
    }
}

