import "../styles/slider.scss";
import SliderElementProps from "../common/interfaces/SliderElementProps";

const SliderElement: React.FC<SliderElementProps> = ({ type, url, text, onChoosePost }) => {
    return <div className="slider-element" title={text} onClick={() => onChoosePost(url)}>
        {type === 'image' ? <img src={url} alt={text || ""} /> : <video src={url} />}
    </div>
}

export default SliderElement;