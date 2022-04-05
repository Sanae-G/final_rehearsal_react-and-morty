import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import CharacterPage from './components/CharacterPage';
import { Routes, Route } from "react-router-dom";
import FavoritesPage from './components/FavoritesPage';
import RandomizerPage from './components/RandomizerPage';
import ExtrasPage from './components/ExtrasPage';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<CharacterPage />}/>
        <Route path="/favorites" element={<FavoritesPage />}/>
        <Route path="/randomizer" element={<RandomizerPage />}/>
        <Route path="/extras" element={<ExtrasPage />}/>
      </ Routes>
      <Navbar />
    </>
  );
}

export default App;
