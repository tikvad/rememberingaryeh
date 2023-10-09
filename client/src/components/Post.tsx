import "../styles/post.scss";

interface PostProps {
    name: string,
    date: Date,
    text: string,
    image: string
}
function formatDateToDDMMYYYY(d) {
    const day = d.getDate().toString().padStart(2, '0'); // Get day and pad with leading zero if necessary
    const month = (d.getMonth() + 1).toString().padStart(2, '0'); // Get month (add 1 since months are zero-based) and pad with leading zero if necessary
    const year = d.getFullYear();

    return `${day}.${month}.${year}`;
}


const Post: React.FC<PostProps> = ({ name, date, text, image }) => {
    return <div className="postContainer">
        <img src={image} />
        <div className="textContainer">
            <div className="name">{name}</div>
            <div className="date">{formatDateToDDMMYYYY(date)}</div>
            <div className="text">{text}</div>
        </div>
    </div>
}

export default Post;