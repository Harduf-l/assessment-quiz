function Homepage(props) {

    return (
     <div className="pt-5 text-center">
      <div className="pt-5">
        תמיד רציתם לדעת אם אתם מקוריים?
        בעלי חשיבה חדה וייחודית?
        <br/>
        <br/>
        שאלוני לרר נוצרו בדיוק עבור המטרה הזו.
        <br/>
        תמשיכו כשאתם מרגישים מוכנים...
      </div>
      <button className="mt-4" onClick={props.homepageOver}>
        התחל שאלון!
      </button>
     </div>
    );
  }
  
  export default Homepage;
  