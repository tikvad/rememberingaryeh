const Title: React.FC<{ text: string }> = ({ text }) => {
    return <div className="headline">
        <h2>{text}</h2>
        <hr id="headlineHr"/>
    </div>
}

export default Title;

