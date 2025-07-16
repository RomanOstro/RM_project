import { ButtonElement, type TBUttonProps } from './buttonStyle'



export const Button = (props: TBUttonProps,) => {

  return (
    <>
      <ButtonElement
        {...props} >
        {props.children}
      </ButtonElement>
    </>

  )
}
