import { type ChangeEvent } from "react";
import { OptionItem, SelectElement } from "./selectStyle"
import { ESelectState, type TSectionState } from "../../../types/types";


interface IselectProps {
  $width: string;
  value: string;
  onClick: (value: TSectionState) => void;
}
export const Select = (props: IselectProps) => {
  const { $width, onClick, value } = props;


  const hendler = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value

    //Проверка типа value 
    const isSectionValue = (value: string): value is TSectionState => {
      return Object.values(ESelectState).includes(value as TSectionState)
    };

    if (isSectionValue(value)) {
      onClick(value)
    } else {
      throw console.error('value invalid type :', value)
    }

  }


  return (
    <SelectElement $width={$width} value={value} onChange={hendler} >
      <OptionItem value={ESelectState.CHARACTER}>character</OptionItem>
      <OptionItem value={ESelectState.LOCATION}>location</OptionItem>
      <OptionItem value={ESelectState.EPISODES}>episode</OptionItem>
    </SelectElement>
  )
}