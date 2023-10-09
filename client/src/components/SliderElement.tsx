import "../styles/slider.scss";
import SliderElementProps from "../common/interfaces/SliderElementProps";

const SliderElement: React.FC<SliderElementProps> = ({ type, url, text }) => {
    return <div className="slider-element" title={text}>
        {type === 'image' ? <img src={url} alt={text || ""} /> : <video src={url} />}
    </div>
}

export default SliderElement;