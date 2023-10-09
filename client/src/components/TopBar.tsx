import "../styles/topbar.scss";

interface TopBarProps {
    button: boolean
}

const TopBar: React.FC<TopBarProps> = ({ button }) => {
    return <div className="topBarContainer" >
        {button ? <div className="addButton">
            הוספת זיכרון
        </div> : <div className="empty"></div>}
        <div className="title">
            זוכרים את אריה
        </div>
    </div>
}

export default TopBar;