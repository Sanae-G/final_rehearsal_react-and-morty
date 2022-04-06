import styled from 'styled-components';

function CardList({ characters, showMore, toggleInfo}) {
  return (
    <CardListStyled>
      {characters.map(({ name, image, id, species, gender, status}) => (
        <CardContent key={id}>
          <img src={image}></img>
          <CharacterName>{name}</CharacterName>
          <button onClick={toggleInfo}>Show more</button>
           {showMore? (
            <ul>
            <li>Species: hello</li>
            <li>Gender: goodbye</li>
            <li>Status: whatever</li>
            </ul>
           ): ("")}
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
