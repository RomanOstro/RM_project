import styled from "styled-components";
import BackgroundImage from "../../assets/images/background-cast.png";

export const CastContainer = styled.div`
  background-image: url(${BackgroundImage});
  background-position: center;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  height: auto;
  padding: 0 10px 2rem;
  overflow-x: hidden;
`;
export const ContentContainer = styled.div`
  margin: 0 auto;
  padding-block-start: 110px;
  max-width: 1720px;
  display: flex;
  flex-direction: column;

  @media screen and (width <= 1740px) {
    max-width: 1420px;
    padding-block-start: 60px;
  }
  @media screen and (width <= 820px) {
    padding-block-start: 1px;
  }
`;

export const Content = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

export const CastHeading = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block-end: 30px;

  @media screen and (width <= 820px) {
    flex-direction: column;
    row-gap: 30px;
  }
`;

export const ContentTitle = styled.h2`
  color: var(--blue);
  font-size: 64px;
  font-weight: 600;

  @media screen and (width <= 820px) {
    font-size: 50px;
  }
`;

export const SearchBox = styled.div`
  border-radius: 3px;
  border: 1px solid var(--blue);
  overflow: hidden;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 420px;

  @media screen and (width <= 820px) {
    width: 320px;
  }
`;
