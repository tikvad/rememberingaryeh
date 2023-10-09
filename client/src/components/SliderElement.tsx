import "../style/slider.scss";

interface SliderElementProps {
    type: 'image'|'video',
    url: string,
    text: string
}

const SliderElement: React.FC<SliderElementProps> = ({ type, url, text }) => {
    return <div className="slider-element">
        {type === 'image' ? <img src={url} alt={text || ""} /> : <video src={url} />}
    </div>
}

export default SliderElement;