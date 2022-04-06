import CardList from './CardList';

function CharacterPage({characters, showMore, toggleInfo}) {

  return (
      <CardList characters={characters} showMore={showMore} toggleInfo={toggleInfo}/>
  );
}

export default CharacterPage;