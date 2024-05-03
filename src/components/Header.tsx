import { styled } from 'styled-components';

const HeaderContainer = styled.div`
  width: 100%;
  height: 3.125rem;
  background-color: #582957;
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
`;

const StyledText = styled.div`
  font-size: 2rem;
  color: #ffffff;
  margin-left: 10%;
`;

export const Header = () => (
  <HeaderContainer>
    <StyledText>Atma Velas</StyledText>
  </HeaderContainer>
);
