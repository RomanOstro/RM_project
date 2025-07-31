import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import {
  CastContainer,
  ContentContainer,
  ContentTitle,
  SearchBox,
  CastHeading,
} from "./universeLayoutStyle";
import { Select } from "../UI/Select/Select";
import { Input } from "../UI/Input/Input";
import { useEffect, useState } from "react";
import { ESelectState, type TSectionState } from "../../types/types";
import { pathToSection } from "./scripts";
import { useWindowWidth } from "../../hooks/useWindowWidth";

export const UniverseLayout = () => {
  const navigate = useNavigate();
  const location = useLocation(); // отслеживаем текущий путь, для изменения pathToSection
  const current = pathToSection[location.pathname] || pathToSection["/cast"]; // определяем текущее состояние pathToSection по url
  const [sectionTitle, setSectionTitle] = useState<string>(current.state); // стейт заголовка лейаута
  const [selectState, setSelectState] = useState<TSectionState>(current.select); // стейт селекта

  useEffect(() => {
    const current = pathToSection[location.pathname] || pathToSection["/cast"]; // определяем текущее состояние pathToSection по url
    setSectionTitle(current.state);
    setSelectState(current.select);
  }, [location.pathname]);

  const selecthandler = (value: TSectionState) => {
    setSectionTitle(current.state);
    if (value === ESelectState.CHARACTER) navigate("/cast");
    if (value === ESelectState.LOCATION) navigate("/location");
    if (value === ESelectState.EPISODES) navigate("/episodes");
  };

  // Отслеживаем ширину страницы и меняем атрибуты searchBox в зависимости от этого
  const windowWidth = useWindowWidth();
  const resizeSearchBox = windowWidth > 820;

  return (
    <CastContainer>
      <Link to={"/"}>
        <Logo />
      </Link>
      <ContentContainer>
        <CastHeading>
          <ContentTitle>{sectionTitle}</ContentTitle>
          <SearchBox>
            <Select
              value={selectState}
              onClick={selecthandler}
              $width={resizeSearchBox ? "30%" : "40%"}
            />
            <Input $width={resizeSearchBox ? "70%" : "60%"} />
          </SearchBox>
        </CastHeading>

        <Outlet />
      </ContentContainer>
    </CastContainer>
  );
};
// "30%"
