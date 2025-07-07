import { Header } from "../../components/Header/Header"
import { CharactersHome } from '../../components/CharactersHome/CharactersHome'
import { HomeContainer, HomeTopSide } from "./style"






export const Home = () => {

  return (
    <>
      <HomeContainer>
        <HomeTopSide>
          <Header />
          <CharactersHome />
        </HomeTopSide>
      </HomeContainer>
    </>
  )
}