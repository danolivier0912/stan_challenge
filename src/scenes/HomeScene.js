import React from 'react';

import Tile from '../components/Tile/Tile';

const HomeScene = () => {
  const programTypes = ['Series', 'Movies']

  return (
    <div className="list">
      { programTypes.map((programType, i) => (
        <Tile
          key={i}
          title={`Poular ${programType}`} programType={programType}
          type="presentation"
        />
      )) }
    </div>
  )
}

export default HomeScene;
