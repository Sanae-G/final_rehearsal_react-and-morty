import styled from 'styled-components';
import { CardContent, CardListStyled, CharacterName } from './CardList';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { useState } from 'react';

function RandomizerPage({characters}) {
  
  const [randomCharacterID, setRandomCharacterID] = useState(null)

  function randomizer (){
    let randomCharacterID = (Math.floor(Math.random() * characters.length)) + 1;
    setRandomCharacterID(randomCharacterID);
    }

    const randomCharacter = characters.find(
      character => character.id === randomCharacterID
    );


  return (
    <Container>
    {randomCharacter ? (
        <CardListStyled>
          <CardContent key={randomCharacter.id}>
            <img src={randomCharacter.image}></img>
            <CharacterName>{randomCharacter.name}</CharacterName>
            <button><Link to={"/character/" + randomCharacterID}>Show More</Link></button>
            <button onClick={randomizer}>Get random character</button>
          </CardContent>
        </CardListStyled>
      ) : (
      <>
      <QuestionMark>?</QuestionMark>
      <button onClick={randomizer}>Get random character</button>
      </>
  )
}
    </Container>
  );
}

export default RandomizerPage;

const QuestionMark = styled.h2`
 font-size: 10rem;
 text-align: center;
 margin-top: 0;
 margin-bottom: 0;
`;

const Container = styled.div`
 margin-left: auto;
 margin-right: auto;
 width: 10em;
`;