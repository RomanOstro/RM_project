import type { ChangeEvent } from "react";
import { InputItem } from "./inputStyle"
import { useSearchParams } from "react-router-dom";


interface IInputProps {
  $width: string;
}

export const Input = (props: IInputProps) => {
  const { $width } = props;
  const [searchParams, setSearchParam] = useSearchParams();

  const handlerSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value) {
      setSearchParam({ name: value })
    } else {
      setSearchParam({})
    }
  }

  return (
    <>
      <InputItem $width={$width} placeholder="Search name..." value={searchParams.get('name') || ''} onChange={handlerSearch} />
    </>
  )
}


