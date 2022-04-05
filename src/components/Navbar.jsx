import styled from 'styled-components';

function Navbar() {
  return (
    <nav>
      <MenuItem>
        <ListItem>
          <NavLinks href="#">Home</NavLinks>
        </ListItem>
        <ListItem>
          <NavLinks href="#">Favorites</NavLinks>
        </ListItem>
        <ListItem>
          <NavLinks href="#">Randomizer</NavLinks>
        </ListItem>
        <ListItem>
          <NavLinks href="#">Extras</NavLinks>
        </ListItem>
      </MenuItem>
    </nav>
  );
}

export default Navbar;

/* ===== STYLES ===== */

const MenuItem = styled.ul`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  align-items: space-between;
  justify-content: center;
  gap:8em;
  padding: 0.8em;
  border-radius: 5px;

  width: 100vw;
  height: 10vh;
  text-align: center;
  border-top: 2px rgb(0, 0, 0) solid;
  background-color: rgb(21, 182, 34);
  position: fixed;
  bottom: 0;
  margin: 0;
  background-color: #99ffcd;
`;

const ListItem = styled.li`
  list-style-type: none;
`;

const NavLinks = styled.a`
  text-decoration: none;
  margin-bottom: 0;
  color: rgb(0, 0, 0);
`;
