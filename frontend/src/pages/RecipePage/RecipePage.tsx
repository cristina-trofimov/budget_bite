import React from 'react'
import { useParams } from 'react-router-dom';
import RecipeComponent from '../../components/RecipeComponent.tsx';

function RecipePage() {
  const { store } = useParams();

  return (
    <><div>RecipePage for {store}
    </div><RecipeComponent /></>
  )
}

export default RecipePage
