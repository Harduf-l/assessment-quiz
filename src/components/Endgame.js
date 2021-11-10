function Endgame(props) {

  let {gotItRight, totalQuestions} = props

    return (
     <div className="pt-5 text-center">
       המשחק נגמר.

       יש לך אישיות עדינה ומקורית.
       <br/>
       <br/>
       ענית על {gotItRight} שאלות נכון, מתוך {totalQuestions}

     </div>
    );
  }
  
  export default Endgame;
  