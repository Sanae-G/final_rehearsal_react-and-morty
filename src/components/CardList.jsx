import styled from 'styled-components';

function CardList() {
  return (
    <CardListStyled>
   <CardContent>
      <img
        src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
        alt="Morty Smith"
      ></img>
      <CharacterName>Morty Smith</CharacterName>
      <button>Show more</button>
    </CardContent>
    <CardContent>
      <img
        src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
        alt="Morty Smith"
      ></img>
      <CharacterName>Morty Smith</CharacterName>
      <button>Show more</button>
    </CardContent>
    <CardContent>
      <img
        src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
        alt="Morty Smith"
      ></img>
      <CharacterName>Morty Smith</CharacterName>
      <button>Show more</button>
    </CardContent>
    </CardListStyled>
  );
}

export default CardList;

const CardContent = styled.div`
    border: 1px solid black;
    border-radius: 0.5em;
    height: 10%;
    display: flex;
    flex-direction: column;
`;

const CardListStyled = styled.section`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3em;
`;

const CharacterName = styled.h2`
    text-align: center;
`;