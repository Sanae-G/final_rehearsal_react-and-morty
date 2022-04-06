import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

export default function DetailedCharacter(){

  const [showMore, setShowMore] = useState(false)
  const { id } = useParams()


  const toggle = () => {
    setShowMore(!showMore)
}


  return (
   <p>Hello World</p>
       /* {showMore ? (
          <ul>
            <li>species: {character.species}</li>
            <li>gender: {character.gender}</li>
            <li>status: {character.status}</li>
          </ul>
        ) : (
          ''
        )}
      </li>
    </List>*/
  )
}
