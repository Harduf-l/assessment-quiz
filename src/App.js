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
  {title: "שוקולד", 
  isPicture: false,
  question: "מהו אחוז מוצקי הקקאו בשוקולד חלב?",
  answers: ["39", "31", "80", "17"],
  chosenAnswer: false,
  correctAnswer: 1,
  },
  {title: "חומוס", 
  isPicture: false,
  question: "מהו המרכיב העיקרי בחומוס, במתכונו האסלי?",
  answers: ["גרגירי חומוס", "שמן זית", "טחינה", "מים"],
  chosenAnswer: false,
  correctAnswer: 0,
  },
  {title: "שמש", 
  isPicture: false,
  question: "מדוע נקרא הדרום, דרום?",
  answers: ["על שם משכנה של השמש", "לשם אין משמעות מיוחדת", "על שם מגלה המצפן, ג'ונסון דרום", "אף אחת מהתשובות אינה נכונה"],
  chosenAnswer: false,
  correctAnswer: 0,
  },
  {title: "כמות שקדים", 
  pictrue: "/shaked.jpg",
  once: true,
  isPicture: true,
  question: "כמה אגוזים, להערכתך, הופיעו בתמונה?",
  answers: ["18", "37", "28", "41"],
  chosenAnswer: false,
  correctAnswer: 2,
  },
  {title: "צבעים", 
  isPicture: false,
  question: "מהו הצבע שנקבל מערבוב של צהוב, שחור, ואדום?",
  answers: ["אפור", "ירוק", "חום", "חרדל"],
  chosenAnswer: false,
  correctAnswer: 2,
  },
  {title: "אדם", 
  isPicture: false,
  question: "מי הולך בבוקר על ארבע רגליים, בצהרי היום על שתי רגליים, ובערוב ימיו על שלוש רגלים?",
  answers: ["סוס יאור", "חד הקרן", "השימפנזה", "האדם"],
  chosenAnswer: false,
  correctAnswer: 3,
  },
  {title: "משחת שיניים", 
  isPicture: false,
  question: "מהו החומר הפעיל במשחת שיניים, השומר על זגוגית השן?",
  answers: ["פרוקסייד", "קולגייט", "אבץ", "פלואוריד"],
  chosenAnswer: false,
  correctAnswer: 3,
  },
  ]

  let [questionArray, setQuestionArray ] = useState(initialData)
  let [homepage, setHomePage] = useState(true);
  let [questionCounter, setQuestionCounter] = useState(0);
  let [chosenQuestion, setChosenQuestion] = useState(questionArray[0])
  let [gotItRight, setgotItRight] = useState(0);
  let [endGame, setEndGame] = useState(false);
  let [errorsArray, setErrorObject] = useState([])

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
    let counter = 0; 
    let errorArray = []
    questionArray.forEach(el => {
      if (el.chosenAnswer === el.correctAnswer) {
        counter++
      }
      if (el.chosenAnswer !== el.correctAnswer) {
        let newErrorObj = {}
        newErrorObj.correct = el.answers[el.correctAnswer]
        newErrorObj.mistake = el.answers[el.chosenAnswer]
        newErrorObj.question = el.question
        errorArray.push(newErrorObj)
      }
    })
    setErrorObject(errorArray)
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
    <div className="page-container">

    <div className="content-wrap">
      <header>

        <div className="d-flex flex-wrap">
        <div className="align-self-center">
        
        </div>
        <div className="pe-3 d-flex flex-wrap">
          <span className="homeMark pt-1"><i className="fab fa-quinscape"></i></span>
          <span className="p-3">שאלוני קוויזמי - בחרת נכון</span>
        </div>
        </div>
      </header>
      

      <div className="content">
      {homepage && <HomePage homepageOver={homepageOver}/>}
      {!homepage && !endGame && <Question pictureFinished={pictureFinished} questionArrayLength={questionArray.length} questionCounter={questionCounter} nextQuestion={nextQuestion} prevQuestion={prevQuestion} question={chosenQuestion}/>}
      {endGame && <EndGame errorsArray={errorsArray} gotItRight={gotItRight} totalQuestions={questionArray.length}/>}
      </div>

    </div>

     <footer>
       <p className="text-center pt-2">
       שאלונים מקוריים מבית קוויזמי
       <br/>
       Ⓒכל הזכויות שמורות
      </p>
     </footer>
   </div>
  );
}

export default App;
