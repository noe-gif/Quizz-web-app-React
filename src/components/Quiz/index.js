import React, { Component, Fragment } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QuizNaruto } from '../QuizNaruto';
import Levels from '../Levels';
import ProgressBar from '../ProgressBar';
import QuizOver from '../QuizOver';
import { FaChevronRight } from 'react-icons/fa';

toast.configure();

class Quiz extends Component {
                                                                                                                                                                                                                                                                  
    constructor(props) {
        super(props);
        
        this.initialState = {
            levelNames: ["Débutant", "Confirmé", "Expert"],
            quizLevel: 0,
            maxQuestion: 10,
            storedQuestions: [],
            question: null,
            options: [],
            idQuestion: 0,
            btnDisabled: true,
            userAnswer: null,
            score: 0,
            showWelcomeMsg: false,
            quizEnd: false,
            percent: null
        }

        this.state = this.initialState;
    }
    storedDataRef = React.createRef();

    loadQuestions = (quizz) => {
        const arrayQuizz = QuizNaruto[0].quizz[quizz];
        if (arrayQuizz.length >= this.state.maxQuestion) {

            this.storedDataRef.current = arrayQuizz
            // via le destructuring on retire les réponses du reste daans le tableau qu'on met dans un new array (rappel la méthode map ne modifie jamais le tableau utilisé en lui même)
            const newArray = arrayQuizz.map( ({answer, ...keepRest}) => keepRest);
            
            this.setState({
                storedQuestions: newArray
            })

        } else {
            console.log('pas assez de questions');
        }
    }

    componentDidMount() {
        this.loadQuestions(this.state.levelNames[this.state.quizLevel])
    }

    componentDidUpdate(prevProps, prevState) {
        if ((this.state.storedQuestions !== prevState.storedQuestions) && (this.state.storedQuestions.length)) {
            this.setState({
                question: this.state.storedQuestions[this.state.idQuestion].question,
                options: this.state.storedQuestions[this.state.idQuestion].options
            })
            console.log(this.state.storedQuestions[this.state.idQuestion].question)
        }

        if ((this.state.idQuestion !== prevState.idQuestion) && (this.state.storedQuestions.length)) {
            this.setState({
                question: this.state.storedQuestions[this.state.idQuestion].question,
                options: this.state.storedQuestions[this.state.idQuestion].options,
                userAnswer: null,
                btnDisabled: true
            })
        }

        if (this.state.quizEnd !== prevState.quizEnd) {
            const gradePercent = this.getPercentage(this.state.maxQuestion, this.state.score);
            this.gameOver(gradePercent);
        }
        if (this.props.userData.pseudo !== prevProps.userData.pseudo) {
            this.showToastMsg(this.props.userData.pseudo)
        }
    }

    showToastMsg = () => {
        if (!this.state.showWelcomeMsg) {

            this.setState({
                showWelcomeMsg: true
            })
            toast.warn(`Bienvenue ${this.props.userData.pseudo}, Bonne chance!`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                bodyClassName: "toastify-color-welcome",
            });
        }
    }

    getPercentage = (maxQuest, ourScore) => (ourScore / maxQuest) * 100;

    gameOver = (percent) => {

        if (percent >= 50) {
            this.setState({
                quizLevel: this.state.quizLevel + 1,
                percent
            })
        } else {
            this.setState({percent})    
        }
    }

    nextQuestion = () => {
        if (this.state.idQuestion === this.state.maxQuestion - 1) {
            // this.gameOver()
            this.setState({
                quizEnd: true
            })
        } else {
            this.setState((prevState) => ({
                idQuestion: prevState.idQuestion + 1
            }))
        }

        const goodAnswer = this.storedDataRef.current[this.state.idQuestion].answer;
        if (this.state.userAnswer === goodAnswer) {
            this.setState((prevState) => ({
                score: prevState.score + 1
            }))

            toast.success('Juste!! +1', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                bodyClassName: "toastify-color",
            });
        } else {
            toast.error('Faux, 0', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                bodyClassName: "toastify-color",
            });

        }
    }

    submitAnswer = (selectedAnswer) => {
        this.setState({
            userAnswer: selectedAnswer,
            btnDisabled: false
        })
    }

    loadLevelQuestions = (param) => {
        this.setState({...this.initialState, 
            quizLevel: param
        })
        this.loadQuestions(this.state.levelNames[param])
    }
    render() {

        const { pseudo } = this.props.userData;

        // utilisation pour enlever un warning
        console.log(`Hi ${pseudo}!`)
        const displayOptions = this.state.options.map((option, index) => {
            return (
                <p key={index} className={`answerOptions ${this.state.userAnswer === option ? "selected" : null}`} onClick={() => this.submitAnswer(option)}>
                    <FaChevronRight/>    {option}
                </p>
            )
        })

        return this.state.quizEnd ? 
            (<QuizOver ref={this.storedDataRef} 
                       levelNames={this.state.levelNames} 
                       score={this.state.score} 
                       maxQuestion={this.state.maxQuestion} 
                       quizLevel={this.state.quizLevel} 
                       percent={this.state.percent}
                       loadLevelQuestions={this.loadLevelQuestions}>
            </QuizOver>) 
        : 
            (<Fragment>
                <Levels levelNames={this.state.levelNames} quizLevel={this.state.quizLevel}></Levels>
                <ProgressBar idQuestion={this.state.idQuestion} maxQuestion={this.state.maxQuestion} ></ProgressBar>
                <h2>{this.state.question}</h2>
                { displayOptions }
                <button onClick={this.nextQuestion} className="btnSubmit" disabled={this.state.btnDisabled}>{this.state.idQuestion < this.state.maxQuestion - 1 ? "Suivant" : "Terminer"}</button>
            </Fragment>);
    }
}

export default Quiz;