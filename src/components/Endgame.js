function Endgame(props) {

  let {gotItRight, totalQuestions, errorsArray} = props
    console.log(errorsArray)


    let createErrors = () => {
        return (
            <div className="pt-5 pb-5 text-center ps-3 pe-3 col-lg-6 col-md-8 col-sm-10 m-auto">
                {errorsArray.map(element => {
                    return (
                <div className="mb-4">

                    <div className="questionError d-flex flex-wrap pb-3 pt-3 pe-2"> 
                    <div className="ms-3 bold ">
                        שאלה
                    </div>
                    <div>
                    {element.question}
                    </div>                   
                    </div>

                    
                    <div className="answerMistakeError d-flex flex-wrap align-items-center pe-2"> 
                    <div className="ms-3 bold">
                        התשובה שלך
                    </div>
                    <div>
                    {element.mistake}
                    </div>           
                    <div className="me-auto bitPadding">
                    <span className="iksMark"><i className="fas fa-times"></i></span>
                    </div>
                    </div>


                    <div className="answerCorrectError d-flex flex-wrap align-items-center pe-2 "> 
                    <div className="ms-3 bold">
                        תשובה נכונה
                    </div>
                    <div>
                    {element.correct}
                    </div>           
                    <div className="me-auto ps-2">
                    <span className="checkMark"><i className="fas fa-check"></i></span>
                    </div>
                    </div>

                </div> )
                })}
            </div>
        )

    }

    return (
     <div className="pt-5 text-center ps-3 pe-3">
       המשחק נגמר.
       <div className="pt-3">

       </div>
        {gotItRight < 5 && 
        <p>  
            בדרך כלל, אתה לא שם לב לפרטים הקטנים, וגם בתחום היצירתיות אתה יכול להשתפר. 
        </p>}
        {gotItRight >= 5 && gotItRight < 8 && 
        <p>  
            יש לך זווית הסתכלות ייחודית, וחשיבה מחוץ לקופסא. השתמש בכישורים אלה בתבונה.
        </p>}
        {gotItRight >= 8 && gotItRight <= 10 && 
        <p>  
            אתה מבריק באופן בלתי רגיל. ניחנת בחדות מחשבתית ובשימת לב לפרטים. 
        </p>}
       <br/>
       <br/>
       ענית על {gotItRight} שאלות נכון, מתוך {totalQuestions}

        <br/>
        {errorsArray.length > 0 && createErrors()}
     </div>
    );
  }
  
  export default Endgame;
  