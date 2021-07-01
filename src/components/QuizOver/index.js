import React, { Fragment, useEffect, useState } from 'react';
import { GiTrophyCup } from 'react-icons/gi';
import Loader from '../Loader';
import Modal from '../Modal'

const QuizOver = React.forwardRef((props, ref) => {

    const {levelNames, score, maxQuestion, quizLevel, percent, loadLevelQuestions} = props;

    const [asked, setAsked] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        setAsked(ref.current)
    }, [ref])

    const showModal = (id) => {
        setOpenModal(true); 
    }

    const hideModal = () => {
        setOpenModal(false);   
    }

    const averageGrade = maxQuestion / 2;

    if (score < averageGrade) {
        setTimeout(() => {loadLevelQuestions(quizLevel)}, 3000)
    }
    const decision = score >= averageGrade ? 
    (   
        <>
        <div className="stepsBtnContainer">
            {quizLevel < levelNames.length ? 
            (
                <>
                <p className="successMsg">Bravo, passez au niveau suivant!</p>
                <button className="btnResult success" onClick={() => loadLevelQuestions(quizLevel)}>Niveau suivant</button>
                </>
            )
            : 
            (
                <>
                <p className="successMsg"> <GiTrophyCup size='50px' />Bravo, vous êtes un expert!</p>
                <button className="btnResult s  uccess" onClick={() => loadLevelQuestions(0)}>Acceuil</button>
                </>
            )}
        </div>
        <div className="percentage">
                <div className="progressPercent">Réussite: {percent}%</div>
                <div className="progressPercent">Note: {score}/{maxQuestion}</div>
        </div>
        </>
    ) 
    : 
    (
        <>
            <div className="stepsBtnContainer">
                <p className="failureMsg">Vous avez échoué</p>
            </div>
            <div className="percentage">
                <div className="progressPercent">Réussite: {percent}%</div>
                <div className="progressPercent">Note: {score}/{maxQuestion}</div>
            </div>
        </>
    )

    const questionAnswer = score >= averageGrade ? (asked.map( question => {
        return (
            <tr key={question.id}>
                <td>{question.question}</td>
                <td>{question.answer}</td>
                <td>
                    <button className="btnInfo" onClick={ () => showModal(question.heroId) }>Infos</button>
                </td>
            </tr>
        )
    })

    )
    
    : 
    
    (
        <tr>
            <td colSpan="3">
                <Loader loadingMsg={"pas de réponses!"} styling={{textAlign: 'center', color: 'red'}}></Loader>
            </td>
        </tr> 
    )

    return (
        <Fragment>
            { decision }
            <hr></hr>
            <p>Les réponses aux quesions posées:</p>
            <div className="answerContainer">
                <table className="answers">
                    <thead>
                        <tr>
                            <th>Question</th>
                            <th>Réponses</th>
                            <th>Infos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {questionAnswer}
                    </tbody>
                </table>
            </div>

            <Modal showModal={openModal} hideModal={hideModal}>
                <div className="modalHeader">
                    <h2>Titre</h2>
                </div>
                <div className="modalBody"> 
                    <h3>Titre 2</h3>
                </div>
                <div className="modalFooter">
                    <button className="modalBtn">Fermer</button>
                </div>
            </Modal>
        </Fragment>
    )
}) 

export default React.memo(QuizOver)