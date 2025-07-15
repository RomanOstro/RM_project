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
  $name?: string;
}

export const Slider = <T extends TId,>(props: TSlider<T>) => {
  const { data, children, slidesPerView = 4, $name } = props;

  return (
    <SwiperWrapper>
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={slidesPerView}
        speed={1000}
        navigation={{
          prevEl: `.swiper__button-prev_${$name}`,
          nextEl: `.swiper__button-next_${$name}`,
        }}
      >
        {data.map((item: T, index) => {
          return (
            <SwiperSlide key={item.id ?? index}>
              {children(item)}
            </SwiperSlide>)
        })}

      </Swiper>
      <SwiperButton $name={$name} $position="left">
        <ButtonIconPrev />
      </SwiperButton>

      <SwiperButton $name={$name}>
        <ButtonIconNext />
      </SwiperButton>

    </SwiperWrapper>
  )
}