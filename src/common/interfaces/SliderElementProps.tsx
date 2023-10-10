interface SliderElementProps {
    type: 'image' | 'video',
    url: string,
    text: string,
    onChoosePost: (url: string) => void;
}

export default SliderElementProps;