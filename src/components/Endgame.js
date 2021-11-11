function Endgame(props) {

  let {gotItRight, totalQuestions} = props

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

     </div>
    );
  }
  
  export default Endgame;
  