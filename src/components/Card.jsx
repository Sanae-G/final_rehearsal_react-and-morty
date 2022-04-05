import styled from 'styled-components';

function Card() {
  return (
    <CardList>
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
    </CardList>
  );
}

export default Card;

const CardContent = styled.div`
    border: 1px solid black;
    border-radius: 0.5em;
    height: 10%;
    display: flex;
    flex-direction: column;
`;

const CardList = styled.section`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3em;
`;

const CharacterName = styled.h2`
    text-align: center;
`;