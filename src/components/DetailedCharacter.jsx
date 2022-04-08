import { CardContent, CardListStyled, CharacterName } from './CardList';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

export default function DetailedCharacter({
  characters,
  setFavoriteCharacters,
  favoriteCharacters,
}) {
  const { id } = useParams();
  const selectedCharacter = characters.find(
    character => character.id === parseInt(id)
  );

  function toggleFavorites() {
    
    if (favoriteCharacters.includes(selectedCharacter)) {
      const updateFavorites = favoriteCharacters.filter(favoriteCharacter => {
        return favoriteCharacter.id !== parseInt(id);
      });
      setFavoriteCharacters(updateFavorites);
    } else {
      const updateFavorites = [...favoriteCharacters, selectedCharacter];
      setFavoriteCharacters(updateFavorites);
    }
  }

  return (
    <>
      {selectedCharacter && (
        <CardListStyled>
          <CardContent key={selectedCharacter.id}>
            <img src={selectedCharacter.image}></img>
            <CharacterName>{selectedCharacter.name}</CharacterName>
            <ul>
              <li>species: {selectedCharacter.species}</li>
              <li>gender: {selectedCharacter.gender}</li>
              <li>status: {selectedCharacter.status}</li>
            </ul>
            <FavButton
              onClick={toggleFavorites}
              favoriteCharacters={favoriteCharacters}
              selectedCharacter={selectedCharacter}
            >
              Favorites
            </FavButton>
          </CardContent>
        </CardListStyled>
      )}
    </>
  );
}

const FavButton = styled.button`
  position: absolute;
  height: 5em;
  width: 5em;
  top: -1.5em;
  right: 10px;
  background-color: ${(props) => (props.favoriteCharacters.includes(props.selectedCharacter) ? 'orange' : '')};
`;
