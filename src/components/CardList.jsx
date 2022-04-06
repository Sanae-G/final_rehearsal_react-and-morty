import styled from 'styled-components';
import DetailedCharacter from './DetailedCharacter';
import { Route } from "react-router-dom";
import { Link } from 'react-router-dom';

function CardList({ characters }) {
  return (
    <CardListStyled>
      {characters.map(({ name, image, id}) => (
        <CardContent key={id}>
          <img src={image}></img>
          <CharacterName>{name}</CharacterName>
          <button><Link to="/detailedCharacter">Show More</Link></button>
        </CardContent>
      ))}
    </CardListStyled>
  );
}

export default CardList;

const CardContent = styled.li`
  border: 1px solid black;
  border-radius: 0.5em;
  height: 10%;
  display: flex;
  flex-direction: column;
`;

const CardListStyled = styled.ul`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3em;
`;

const CharacterName = styled.h2`
  text-align: center;
`;
