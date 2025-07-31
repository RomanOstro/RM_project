import { useEffect, useState, type ChangeEvent } from "react";
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

  useEffect(() => {
    if (debounceValue) {
      setSearchParam({ name: debounceValue });
    } 
      return;
  }, [debounceValue, setSearchParam]);

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
