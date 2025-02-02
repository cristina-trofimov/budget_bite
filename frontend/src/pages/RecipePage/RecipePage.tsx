import React from 'react'
import { useParams } from 'react-router-dom';

function RecipePage() {
  const { store } = useParams();

  return (
    <div>RecipePage for {store}</div>
  )
}

export default RecipePage
