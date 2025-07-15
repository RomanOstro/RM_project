import { Header } from "../../components/Header/Header"
import { HomeContainer, HomeTopSide } from "./style"
import { SlidersHome } from '../../components/SlidersHome/SlidersHome'







export const Home = () => {

  return (
    <>
      <HomeContainer>
        <HomeTopSide>
          <Header />
        </HomeTopSide>
        <SlidersHome />
      </HomeContainer>
    </>
  )
}