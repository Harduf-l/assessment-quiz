import React, { useState } from "react";

function Question(props) {
  let {
    question,
    pictureFinished,
    questionCounter,
    nextQuestion,
    prevQuestion,
    questionArrayLength,
  } = props;

  let [pictureDelay, setPictureDelay] = useState(question.isPicture);

  let [questionObject, setquestionObject] = useState(question);
  let [questionIndex, setquestionIndex] = useState(questionCounter);
  let [alreadyAnswered, setChosenAnswer] = useState(question.chosenAnswer);

  React.useEffect(() => {
    setquestionObject(question);
    setChosenAnswer(question.chosenAnswer);
    setquestionIndex(questionCounter);

    if (question.isPicture) {
      setPictureDelay(true);
    }
  }, [question, questionCounter]);

  React.useEffect(() => {
    if (pictureDelay) {
      setTimeout(() => {
        pictureFinished();
        setPictureDelay(false);
      }, 3000);
    }
  }, [pictureDelay]);

  if (pictureDelay && questionObject.once)
    return (
      <div className="text-center pt-5">
        <img className="prevImage" src={questionObject.pictrue} />
      </div>
    );

  return (
    <div>
      <div className="p-2 pt-5 col-10 col-md-6 col-lg-5 m-auto">
        <div className="p-3">
          <p className="">{questionObject.question}</p>
          <div className="mt-2 pt-4">
            <input
              onClick={() => setChosenAnswer(0)}
              checked={alreadyAnswered === 0}
              type="radio"
              id={questionObject.answers[0]}
              name="question"
              value={questionObject.answers[0]}
            />
            <label htmlFor={questionObject.answers[0]}>
              {questionObject.answers[0]}
            </label>
            <br />
          </div>
          <div className="mt-2">
            <input
              onClick={() => setChosenAnswer(1)}
              checked={alreadyAnswered === 1}
              type="radio"
              id={questionObject.answers[1]}
              name="question"
              value={questionObject.answers[0]}
            />
            <label htmlFor={questionObject.answers[1]}>
              {questionObject.answers[1]}
            </label>
            <br />
          </div>
          <div className="mt-2">
            <input
              onClick={() => setChosenAnswer(2)}
              checked={alreadyAnswered === 2}
              type="radio"
              id={questionObject.answers[2]}
              name="question"
              value={questionObject.answers[0]}
            />
            <label htmlFor={questionObject.answers[2]}>
              {questionObject.answers[2]}
            </label>
            <br />
          </div>
          <div className="mt-2">
            <input
              onClick={() => setChosenAnswer(3)}
              checked={alreadyAnswered === 3}
              type="radio"
              id={questionObject.answers[3]}
              name="question"
              value={questionObject.answers[0]}
            />
            <label htmlFor={questionObject.answers[3]}>
              {questionObject.answers[3]}
            </label>
            <br />
          </div>
        </div>
        <br />
        <div className="d-flex justify-content-around m-auto">
          {questionIndex > 0 && (
            <button
              className="ms-auto me-2"
              onClick={() => prevQuestion(alreadyAnswered)}
            >
              שאלה קודמת
            </button>
          )}
          {questionIndex < questionArrayLength - 1 && (
            <button
              className="me-auto ms-2"
              onClick={() => nextQuestion(alreadyAnswered)}
            >
              שאלה הבאה
            </button>
          )}
          {questionIndex === questionArrayLength - 1 && (
            <button
              className="me-auto ms-2"
              onClick={() => nextQuestion(alreadyAnswered)}
            >
              סיימתי!
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Question;
