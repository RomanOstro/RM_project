import { Link, Outlet, useLocation, useNavigate } from "react-router-dom"
import { Logo } from "../Logo/Logo"
import { CastContainer, ContentContainer, ContentTitle, SearchBox, CastHeading } from "./universeLayoutStyle"
import { Select } from "../UI/Select/Select"
import { Input } from "../UI/Input/Input"
import { useEffect, useState } from "react"
import { ESelectState, type TSectionState } from "../../types/types"
import { pathToSection } from "./scripts"



export const UniverseLayout = () => {
  const navigate = useNavigate();
  const location = useLocation(); // отслеживаем текущий путь, для изменения pathToSection
  const current = pathToSection[location.pathname] || pathToSection['/cast'] // определяем текущее состояние pathToSection по url
  const [sectionTitle, setSectionTitle] = useState<string>(current.state); // стейт заголовка лейаута
  const [selectState, setSelectState] = useState<TSectionState>(current.select) // стейт селекта


  useEffect(() => {
    const current = pathToSection[location.pathname] || pathToSection['/cast'] // определяем текущее состояние pathToSection по url
    setSectionTitle(current.state);
    setSelectState(current.select)
  }, [location.pathname])

  const selecthandler = (value: TSectionState) => {
    setSectionTitle(current.state)
    if (value === ESelectState.CHARACTER) navigate('/cast')
    if (value === ESelectState.LOCATION) navigate('/location')
    if (value === ESelectState.EPISODES) navigate("/episodes")
  };


  return (

    <CastContainer>
      <Link to={'/'}><Logo /></Link>
      <ContentContainer>
        <CastHeading>
          <ContentTitle>{sectionTitle}</ContentTitle>
          <SearchBox>
            <Select value={selectState} onClick={selecthandler} $width={'30%'} />
            <Input $width={'70%'} />
          </SearchBox>
        </CastHeading>

        <Outlet />

      </ContentContainer>
    </CastContainer>
  )
}