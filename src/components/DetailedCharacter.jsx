import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {CardContent, CardListStyled, CharacterName} from './CardList'
import styled from 'styled-components'


export default function DetailedCharacter({characters}){

  const { id } = useParams()

  const selectedCharacter = characters.find(character => character.id == id);

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
          <FavButton>Favorites</FavButton>
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
`;