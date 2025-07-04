import { Header } from "../../components/Header/Header"
import { CardsSlider } from '../../components/CardsSlider/CardsSlider'
import { HomeContainer, HomeTopSide } from "./style"



export const Home = () => {
  return (
    <>
      <HomeContainer>
        <HomeTopSide>
          <Header />
          <CardsSlider />
        </HomeTopSide>
      </HomeContainer>
    </>
  )
}