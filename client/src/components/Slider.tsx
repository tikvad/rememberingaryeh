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
            url: 'https://images.unsplash.com/photo-1604085572504-a392ddf0d86a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlJTIwZmxvd2VyfGVufDB8fDB8fHww&w=1000&q=80',
            text: 'פרח'
        },
        {
            type: 'image',
            url: 'https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg?w=2000',
            text: 'פרח'
        },
        {
            type: 'image',
            url: 'https://nationaltoday.com/wp-content/uploads/2022/07/6-National-Flower-Day.jpg',
            text: 'פרח'
        },
        {
            type: 'image',
            url: 'https://c8.alamy.com/comp/TACMXH/three-red-rose-flower-buds-and-petals-from-a-vase-TACMXH.jpg',
            text: 'פרח'
        },
        {
            type: 'image',
            url: 'https://img.freepik.com/free-photo/closeup-shot-purple-flower_181624-25863.jpg?w=2000',
            text: 'פרח'
        },
        {
            type: 'image',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRfALSiw8zsjDozcadnSFXDYjqULSEwjgnjw&usqp=CAU',
            text: 'פרח'
        },
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