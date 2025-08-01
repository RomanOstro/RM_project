import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { InputItem } from "./inputStyle";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "../../../hooks/useDebounse";

interface IInputProps {
  $width: string;
}

export const Input = (props: IInputProps) => {
  const { $width } = props;
  const [searchParams, setSearchParam] = useSearchParams();
  const [inputValue, setInputValue] = useState<string>(
    searchParams.get("name") || ""
  );
  const debounceValue = useDebounce(inputValue, 500);
  const isFirstRender = useRef(true); // флаг для отслеживания первого рендера

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return; // пропускаем первый запуск useEffect
    }

    const newParam = new URLSearchParams(searchParams);

    if (debounceValue) {
      newParam.set("name", debounceValue);
    } else {
      newParam.delete("name");
    }

    return setSearchParam(newParam, { replace: false });
  }, [debounceValue, setSearchParam, searchParams]);

  const handlerSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
  };

  return (
    <>
      <InputItem
        $width={$width}
        placeholder="Search name..."
        value={inputValue}
        onChange={handlerSearch}
      />
    </>
  );
};
