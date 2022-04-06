import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {CardContent, CardListStyled, CharacterName} from './CardList'


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
      </CardContent>
  </CardListStyled>
);
}
