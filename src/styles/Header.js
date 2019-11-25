import styled from "styled-components";

const HeaderContainer = styled.header`
  height: 40px;
  padding: 4px;
  background: #026aa7;
  z-index: 10;
  overflow: hidden;
`;

const HeaderLogo = styled.header`
  color: #fff;
  font-size: 14px;
  line-height: 32px;
  font-weight: 400;
  opacity: 0.7;
  text-align: center;
  cursor: pointer;
  transition: opacity ease-in-out 400ms;

  &:hover {
    opacity: 1;
  }
`;

export default {
  HeaderContainer,
  HeaderLogo
};
