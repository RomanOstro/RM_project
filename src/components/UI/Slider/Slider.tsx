import { type ReactNode } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css'; // что бы импорты заработали, пришлось создать файл swiper-css.d.ts в src
import 'swiper/css/navigation';
import { SwiperWrapper, ButtonIconNext, ButtonIconPrev, SwiperButton } from "./sliderStile";

type TId = {
  id?: number;
}; // делаем обязательный тип id что бы расширить тип данных

interface TSlider<T extends TId> { // расширяем тип данных
  data: T[];
  children: (item: T) => ReactNode
  slidesPerView?: number;
}

export const Slider = <T extends TId,>(props: TSlider<T>) => {
  const { data, children, slidesPerView = 4 } = props;

  return (
    <SwiperWrapper>
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={slidesPerView}
        speed={1000}
        navigation={{
          prevEl: '.swiper__button-prev',
          nextEl: '.swiper__button-next',
        }}
      >
        {data.map((item: T, index) => {
          return (
            <SwiperSlide key={item.id ?? index}>
              {children(item)}
            </SwiperSlide>)
        })}

        <SwiperButton $position="left">
          <ButtonIconPrev />
        </SwiperButton>

        <SwiperButton >
          <ButtonIconNext />
        </SwiperButton>

      </Swiper>

    </SwiperWrapper>
  )
}