import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {CardContent, CardListStyled, CharacterName} from './CardList'
import styled from 'styled-components'


export default function DetailedCharacter({characters, addToFavorites, removeFromFavorites}){

  const { id } = useParams()

  const selectedCharacter = characters.find(character => character.id == id);

  const [isFavorite, setIsFavorite] = useState(false);

  function toggleFavorite() {
    setIsFavorite(!isFavorite);
    if(isFavorite === false){
      removeFromFavorites()
    } else if (isFavorite === true){
      addToFavorites()
    }
  }

  return (
    <CardListStyled>
      <CardContent key={selectedCharacter.id}>
        <img src={selectedCharacter.image}></img>
        <CharacterName>{selectedCharacter.name}</CharacterName>
        <ul>
            <li>species: {selectedCharacter.species}</li>
            <li>gender: {selectedCharacter.gender}</li>
            <li>status: {selectedCharacter.status}</li>
          </ul>
          <FavButton onClick={toggleFavorite} isFavorite={isFavorite}>Favorites</FavButton>
      </CardContent>
  </CardListStyled>
);
}

const FavButton = styled.button`
position: absolute;
height: 5em;
width: 5em;
top: -1.5em;
right: 10px;
background-color: ${(props) => props.isFavorite? 'orange' : ''}
`;