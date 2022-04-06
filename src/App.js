import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import CharacterPage from './components/CharacterPage';
import { Routes, Route } from "react-router-dom";
import FavoritesPage from './components/FavoritesPage';
import RandomizerPage from './components/RandomizerPage';
import ExtrasPage from './components/ExtrasPage';
import { useEffect, useState } from "react";
import DetailedCharacter from './components/DetailedCharacter'

function App() {

  const apiURL="https://rickandmortyapi.com/api/character";
  const [characters, setCharacters] = useState([]);

  const fetchCharacters =() =>{
    fetch(apiURL).then((response) => response.json()).then((data) => setCharacters(data.results))
  }

  useEffect(() => {
    fetchCharacters();
  }, []);


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<CharacterPage characters={characters}/>}/>
        <Route path="character/:id" element={<DetailedCharacter characters={characters}/>
            }
          />
        <Route path="/favorites" element={<FavoritesPage />}/>
        <Route path="/randomizer" element={<RandomizerPage />}/>
        <Route path="/extras" element={<ExtrasPage />}/>
      </ Routes>
      <Navbar />
    </>
  );
}

export default App;
