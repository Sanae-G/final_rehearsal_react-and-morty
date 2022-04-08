import styled from 'styled-components';
import { Link } from 'react-router-dom';


function CardList({ characters }) {
  return (
    <CardListStyled>
      {characters.map(({ name, image, id}) => (
        <CardContent key={id}>
          <img src={image}></img>
          <CharacterName>{name}</CharacterName>
          <button><Link to={"/character/" + id}>Show More</Link></button>
        </CardContent>
      ))}
    </CardListStyled>
  );
}

export default CardList;

export const CardContent = styled.li`
  border: 1px solid black;
  border-radius: 0.5em;
  height: 10%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const CardListStyled = styled.ul`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3em;
`;

export const CharacterName = styled.h2`
  text-align: center;
`;
