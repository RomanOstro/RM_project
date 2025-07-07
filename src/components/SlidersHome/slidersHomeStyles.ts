import styled from "styled-components";
import BackgroundImage from "../../assets/images/spiral.png";

export const SlidersContainer = styled.section`
  padding-bottom: 80px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    background-image: url(${BackgroundImage});
    background-position: center;
    background-size: cover;
    right: 0;
    top: 0;
    height: 100%;
    width: 30%;
  }
`;

export const SliderList = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1720px;
  padding: 110px 72px 0;
`;

export const ListTitle = styled.div`
  font-size: 24px;
  font-weight: 500;
`;
