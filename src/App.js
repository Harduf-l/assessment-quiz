import React, { useState } from 'react';

import './App.css';
import HomePage from './components/Homepage'
import EndGame from './components/Endgame'
import Question from './components/Question'

function App() {

  const initialData = [
    {title: "צבע חולצת הילד", 
    pictrue: "/kid-bal.jpg",
    once: true,
    isPicture: true,
    question: "מה היה צבע החולצה של הילד?",
    answers: ["לבן", "צהוב", "כחול", "ירוק"],
    chosenAnswer: false,
    correctAnswer: 0,
  },
  {title: "אתה בני ואני לא אביך", 
  isPicture: false,
  question: "ילד הולך ביער ושומע קול. 'אתה בני ואני לא אביך'. מי הוא הדובר?",
  answers: ["אביו של הילד", "אימו של הילד", "דודו של הילד", "אחיו של הילד"],
  chosenAnswer: false,
  correctAnswer: 1,
},
  {title: "גלידה של איטלקים", 
  isPicture: false,
  question: "מהו טעם הגלידה הטהור ביותר, על פי האיטלקים?",
  answers: ["עוגיות", "פיסטוק", "וניל", "קרמל"],
  chosenAnswer: false,
  correctAnswer: 2,
  },
  {title: "כמות שקדים", 
  pictrue: "/shaked.jpg",
  once: true,
  isPicture: true,
  question: "כמה אגוזים, להערכתך, הופיעו בתמונה?",
  answers: ["15", "33", "21", "45"],
  chosenAnswer: false,
  correctAnswer: 2,
  }
  ]

  let [questionArray, setQuestionArray ] = useState(initialData)
  let [homepage, setHomePage] = useState(true);
  let [questionCounter, setQuestionCounter] = useState(0);
  let [chosenQuestion, setChosenQuestion] = useState(questionArray[0])
  let [gotItRight, setgotItRight] = useState(0);
  let [endGame, setEndGame] = useState(false);


  let pictureFinished=()=> {
    let changeQuestionArray = [...questionArray]
    changeQuestionArray[questionCounter].once = false
    setQuestionArray(changeQuestionArray)
  }

  let homepageOver = () => {
    setHomePage(false)
  }

  let nextQuestion = (answeredIndex) => {

    if (questionCounter === questionArray.length-1) {
      let changeQuestionArray = [...questionArray]
      changeQuestionArray[questionCounter].chosenAnswer = answeredIndex
      setQuestionArray(changeQuestionArray)

      calculateEndGame()
    } else {

      let changeQuestionArray = [...questionArray]
      changeQuestionArray[questionCounter].chosenAnswer = answeredIndex
      setQuestionArray(changeQuestionArray)
  
      let newCounter = questionCounter + 1
      setChosenQuestion(questionArray[newCounter])
      setQuestionCounter(newCounter)

    }
    
  }

  let calculateEndGame = () => {
    console.log("need to calculate end now and go to end page")

    let counter = 0; 

    questionArray.forEach(el => {
      if (el.chosenAnswer === el.correctAnswer) {
        counter++
      }
    })
    setgotItRight(counter)
    setEndGame(true)
  }



  let prevQuestion = (answeredIndex) => {
    console.log(answeredIndex)

    let changeQuestionArray = [...questionArray]
    changeQuestionArray[questionCounter].chosenAnswer = answeredIndex
    setQuestionArray(changeQuestionArray)

    let newCounter = questionCounter - 1
    setChosenQuestion(questionArray[newCounter])
    setQuestionCounter(newCounter)
  }

  return (
    <div>

      <header>

        <div className="d-flex flex-wrap">
        <div className="align-self-center">
        
        </div>
        <div className="align-self-center me-auto">
          <span className="checkMark"><i className="fas fa-check"></i></span>
          <span className="p-3">שאלוני לרר - אתה יודע שבחרת נכון</span>
        </div>
        </div>
      </header>
      

      <div className="content">
      {homepage && <HomePage homepageOver={homepageOver}/>}
      {!homepage && !endGame && <Question pictureFinished={pictureFinished} questionArrayLength={questionArray.length} questionCounter={questionCounter} nextQuestion={nextQuestion} prevQuestion={prevQuestion} question={chosenQuestion}/>}
      {endGame && <EndGame gotItRight={gotItRight} totalQuestions={questionArray.length}/>}
      </div>


     <footer>
       <p className="text-center">
       שאלונים מקוריים מבית לרר
       <br/>
       Ⓒכל הזכויות שמורות
      </p>
     </footer>
   </div>
  );
}

export default App;
