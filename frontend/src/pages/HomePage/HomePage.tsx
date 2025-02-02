import React from 'react'
import { Text } from '@mantine/core';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';


function HomePage() {

  const navigate = useNavigate();


  return (
    <div className="homeStack">
      <div className="headline shrikhand_regular">
        Turn flyer specials into special meals
      </div>
      <div className="stores">
        <div className="stores_image" onClick={() => navigate(`/recipe/metro`)}>
          <img src="/metro.png" alt="Metro" />
        </div>
        <div className="stores_image" onClick={() => navigate(`/recipe/maxi`)}>
          <img src="/maxi.png" alt="Maxi" />
        </div>
        <div className="stores_image" onClick={() => navigate(`/recipe/superC`)}>
          <img src="/superC.png" alt="Super C" />
        </div>
        <div className="stores_image" onClick={() => navigate(`/recipe/iga`)}>
          <img src="/iga.png" alt="IGA" />
        </div>
      </div>
    </div>
  )
}

export default HomePage
