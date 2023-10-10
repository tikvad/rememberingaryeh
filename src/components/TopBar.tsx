import "../styles/topbar.scss";
//import { useNavigate } from "react-router-dom"
/*
interface TopBarProps {
    button: boolean
}

*/

const TopBar: React.FC = () => {
    //const navigate = useNavigate();
    return <div className="topBarContainer" >
        {/* <div className="addButton" onClick={() => { button ? navigate("/add-post") : navigate("/") }}>
            {button ? "הוספת זיכרון" : "חזרה"}
        </div> */}
        <div className="empty"></div>
        <div className="title">
            זוכרים את אריה
        </div>
    </div>
}

export default TopBar;