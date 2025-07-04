import { ButtonElement } from './buttonStyle'
import type { ButtonHTMLAttributes } from 'react';


interface TButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  $background?: string;
  $border?: string;
  $borderRadius?: string;
  $padding?: string;
  $outline?: string;
}

export const Button = (props: TButton) => {

  return (
    <>
      <ButtonElement
        {...props}>
        {props.children}
      </ButtonElement>
    </>

  )
}

