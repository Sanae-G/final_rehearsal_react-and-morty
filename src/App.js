import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import CharacterPage from './components/CharacterPage';
import { Routes, Route } from 'react-router-dom';
import FavoritesPage from './components/FavoritesPage';
import RandomizerPage from './components/RandomizerPage';
import ExtrasPage from './components/ExtrasPage';
import { useEffect, useState } from 'react';
import DetailedCharacter from './components/DetailedCharacter';

function App() {
  const apiURL = 'https://rickandmortyapi.com/api/character';
  const [characters, setCharacters] = useState([]);
  const [favoriteCharacters, setFavoriteCharacters] = useState([])


  const fetchCharacters = () => {
    fetch(apiURL)
      .then(response => response.json())
      .then(data => setCharacters(data.results));
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  /* const charactersWithFavoriteStatus = characters.map(character => ({ ...character, favorite: isFavorite }));
  console.log(charactersWithFavoriteStatus) */

  useEffect(() => {
    const favCharactersIDs = favoriteCharacters.map(favCharacter => favCharacter.id); 
    localStorage.setItem('favCharacters', JSON.stringify(favCharactersIDs)); 
  }, [favoriteCharacters]);

  useEffect(() => {
      const favCharactersIDs =  JSON.parse(localStorage.getItem('favCharacters'));
      const favCharacters = characters.filter(character => favCharactersIDs.includes(character.id));
      setFavoriteCharacters(favCharacters);
  })

  return (
    <>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={<CharacterPage characters={characters} />}
        />
        <Route
          path="/character/:id"
          element={<DetailedCharacter characters={characters} favoriteCharacters={favoriteCharacters} setFavoriteCharacters={setFavoriteCharacters}/>}
        />
        <Route path="/favorites" element={<FavoritesPage favoriteCharacters={favoriteCharacters}/>} />
        <Route path="/randomizer" element={<RandomizerPage characters={characters}/>} />
        <Route path="/extras" element={<ExtrasPage />} />
      </Routes>
      <Navbar />
    </>
  );
}

export default App;
