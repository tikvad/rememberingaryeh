import "../styles/post.scss";
import { useState } from 'react'

interface PostProps {
    name: string,
    date: Date,
    text: string,
    image: string
}
function formatDateToDDMMYYYY(d: Date) {
    const day = d.getDate().toString().padStart(2, '0'); // Get day and pad with leading zero if necessary
    const month = (d.getMonth() + 1).toString().padStart(2, '0'); // Get month (add 1 since months are zero-based) and pad with leading zero if necessary
    const year = d.getFullYear();

    return `${day}.${month}.${year}`;
}

const maxHeight = 18;

const Post: React.FC<PostProps> = ({ name, date, text, image }) => {

    const [showFullText, setShowFullText] = useState(false);

    const toggleText = () => {
        setShowFullText(!showFullText);
    };

    const divStyle = {
        "overflow-y": 'hidden',
        maxHeight: showFullText ? '100%' : maxHeight + 'vh',
    };

    { console.log("text.length > maxHeight * 10:  ", text.length > maxHeight * 10 && !showFullText) }

    return (
        <div className="postContainer">
            <img style={{ height: "30vh" }} src={image} />
            <div className="textContainer">
                <div className="name">{name}</div>
                <div className="date">{formatDateToDDMMYYYY(date)}</div>

                <div style={divStyle} className="text">{text}</div>

                {text.length > maxHeight + 5 && (
                    <div style={{ color: '#186b89', fontWeight: 'bold', width: 'fit-content', cursor: "pointer" }} onClick={toggleText}>{showFullText ? "קרא פחות" : "קרא עוד"}</div>
                )}
            </div>
        </div>
    )
}

export default Post;