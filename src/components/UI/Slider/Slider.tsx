import { type ReactNode } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css'; // что бы импорты заработали, пришлось создать файл swiper-css.d.ts в src
import 'swiper/css/navigation';
import { SwiperWrapper, ButtonIconNext, ButtonIconPrev, SwiperButton } from "./sliderStile";

type Id = { id?: string }; // делаем обязательный тип id что бы расширить тип данных

interface TSlider<T extends Id> { // расширяем тип данных
  data: T[];
  children: (item: T) => ReactNode
}

export const Slider = <T extends Id,>(props: TSlider<T>) => {
  const { data, children } = props;

  return (
    <SwiperWrapper>
      <Swiper
        modules={[Navigation]}
        slidesPerView={4}
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