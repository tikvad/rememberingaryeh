import { useMemo } from 'react';

// import Swiper core and required modules
import { Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import SliderElement from './SliderElement';
import SliderElementProps from '../common/interfaces/SliderElementProps';

const Slider: React.FC = () => {
  const elements:Array<SliderElementProps> = useMemo(() => {
    return [
        {
            type: 'image',
            url: 'https://drive.google.com/uc?export=view&id=1cGe9oExhwqKvxJ_QcW9BMV5a6tSI5dcx',
            text: 'תמונה1'
        },
        {
            type: 'image',
            url: 'https://drive.google.com/uc?export=view&id=17OQ-b4t6-2dM8p-UMPFt6OTPfbGNs_Fh',
            text: 'תמונה2'
        },
        {
            type: 'image',
            url: 'https://drive.google.com/uc?export=view&id=1E9l1Cu0XHLhmIHS4QKXTpXSCKjr6Oz2V',
            text: 'תמונה3'
        },
        {
            type: 'image',
            url: 'https://drive.google.com/uc?export=view&id=1kNoGYYTgAnHrSlIDQUJdcatL5bjfWnmj',
            text: 'תמונה4'
        },
        {
            type: 'image',
            url: 'https://drive.google.com/uc?export=view&id=1MhG3FB__odUmrBVpU2Y4lHAbybtV1T7p',
            text: 'תמונה5'
        },
        {
            type: 'image',
            url: 'https://drive.google.com/uc?export=view&id=1yW08kx0EQlALVSOItoSOzd7dWfXea1cz',
            text: 'תמונה6'
        },
        {
            type: 'image',
            url: 'https://drive.google.com/uc?export=view&id=1uleiqaRJ-UnAdWuZEkeVUeNcdoddyCSz',
            text: 'תמונה8'
        },
        {
            type: 'image',
            url: 'https://drive.google.com/uc?export=view&id=15u2lrOwa8JuK0kLMsl2MVDReBEjsqWZg',
            text: 'תמונה9'
        }

    ];
  }, []);
  return (
    <div className='slider-container'>
        <Swiper
            // install Swiper modules
            modules={[Navigation]}
            spaceBetween={'3vw'}
            slidesPerView={4}
            navigation
            centerInsufficientSlides
            dir='rtl'
        >
            {(elements || []).map((item) => (
                <SwiperSlide key={item.url}>
                    <SliderElement {...item}></SliderElement>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  );
};

export default Slider;