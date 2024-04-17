class Quiz {
    constructor(questions, timeLimit, timeRemaining) {
        this.questions = questions;
        this.timeLimit = timeLimit;
        this.timeRemaining = timeRemaining;
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
    }

    getQuestion() {
        return this.questions[this.currentQuestionIndex];
    }
    moveToNextQuestion() {
        this.currentQuestionIndex++;
    }

    shuffleQuestions() {
        let copy = [...this.questions];
        let newArray = [];
        let originalLength = copy.length
        while (newArray.length < originalLength) {
            const randomR = Math.floor(Math.random() * copy.length)
            newArray.push(copy[randomR])
            copy.splice(randomR, 1)
        }
        this.questions = newArray;
    }

    checkAnswer(answer) {
        if (answer === this.questions[this.currentQuestionIndex].answer) {
            this.correctAnswers++;
        }
    }

    hasEnded() {
        if (this.currentQuestionIndex < this.questions.length) {
            return false
        }
        return true
    }

    filterQuestionsByDifficulty(difficulty) {
        if (difficulty >= 1 && difficulty <= 3) {
            let arr = this.questions.filter((element) => {
                return element.difficulty === difficulty;
            });
            this.questions = arr;
        }

    }

    averageDifficulty() {
     
        const avg = this.questions.reduce(function (accumulator, element) {
            return accumulator += element.difficulty;
        },0);
        return avg / this.questions.length;
    }

}

