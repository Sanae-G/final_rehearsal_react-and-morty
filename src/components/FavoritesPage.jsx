import { CardContent, CardListStyled, CharacterName } from './CardList';
import { Link } from 'react-router-dom';


function FavoritesPage({ favoriteCharacters }) {
  return (
    <CardListStyled>
      {favoriteCharacters.map(({ name, image, id}) => (
        <CardContent key={id}>
          <img src={image}></img>
          <CharacterName>{name}</CharacterName>
          <button><Link to={"/character/" + id}>Show More</Link></button>
        </CardContent>
      ))}
    </CardListStyled>
  );
}

export default FavoritesPage;
