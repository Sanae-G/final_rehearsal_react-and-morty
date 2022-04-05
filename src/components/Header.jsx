import styled from 'styled-components';

function Header() {
  return (
    <HeaderStyled>
      <H1Styled>React and Morty</H1Styled>
    </HeaderStyled>
  );
}

export default Header;

/* ===== STYLES ===== */

const HeaderStyled = styled.header`
  width: 100vw;
  height: 10vh;
  background-color: #99ffcd;
`;

const H1Styled = styled.h1`
  font-size: 3rem;
  text-shadow: 1px 1px 2px black, 1px -1px 2px black, -1px 1px 2px black,
    -1px -1px 2px black;
  position: sticky;
  color: rgb(14, 181, 83);
  text-align: center;
  font-family: 'Creepster', cursive;
  margin-top: 0;
  margin-bottom: 0;
`;
