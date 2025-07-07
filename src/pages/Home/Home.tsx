import { Header } from "../../components/Header/Header"
import { CharactersHome } from '../../components/CharactersHome/CharactersHome'
import { HomeContainer, HomeTopSide } from "./style"
import { SlidersHome } from '../../components/SlidersHome/SlidersHome'







export const Home = () => {

  return (
    <>
      <HomeContainer>
        <HomeTopSide>
          <Header />
          <CharactersHome />
          <SlidersHome />
        </HomeTopSide>
      </HomeContainer>
    </>
  )
}