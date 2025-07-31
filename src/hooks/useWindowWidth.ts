import { useEffect, useState } from "react";

//  Хук отслеживающий ширину размера экнара по ширине  HTML (entries[0] - под нулевым индексом в массиве entries )
export const useWindowWidth = (): number => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      setWidth(entries[0].contentRect.width);
    });

    observer.observe(document.documentElement); // начинаем отслеживать изменения размеров страницы

    return () => observer.disconnect();
  }, []);

  return width;
};
