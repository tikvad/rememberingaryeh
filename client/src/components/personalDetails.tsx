import Title from "./Title"
import "../styles/details.scss";


export default function PersonalDetails() {
    const text = `אריה צירינג ז״ל, בן מארק ודבי, אח גדול לאלי,יונתן וטל. 
בן 27 בנופלו,
בוגר מכינת יונתן וישיבת הגלבוע,
התגייס למסלול השייטת ומשם החליט לעבור לעוקץ. היה לוחם נערץ ביחידת עוקץ ומשם יצא קצונה ופיקד על עשרות חיילים. 
בתפקידו האחרון שירת כמ״פ תקיפה.
אריה היה ידוע בענווה ובצניעות שלו, בנתינה שלו, באהבה שלו לארץ ובערכים הרבים שהובילו אותו, היה אח וחבר אהוב. 
ת.נ.צ.ב.ה`
    return (
        <div className="bigContainer">
            <Title text="אריה צירינג" />
            <div className="containerM">
                <div className="container" >
                    <img className="image" src="ariyeh.jpg" />
                    <div className="detailsText">
                        {text}
                        <div><b>האתר עוד בבניה<br /> בקרוב תוכלו להעלות זכרונות / תמונות / סירטונים / סיפורים שלכם עם אריה</b></div>
                    </div>
                </div>
            </div>
        </div>
    )
}