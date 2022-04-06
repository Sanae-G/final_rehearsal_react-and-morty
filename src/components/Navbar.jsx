import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <MenuItem>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/randomizer">Randomizer</Link>
        <Link to="/extras">Extras</Link>
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

