import React, { useEffect } from 'react';
import { useStateValue } from '../store/StateProvider';

import getData from '../services/api/api';
import Tile from '../components/Tile/Tile';

const MoviesScene = () => {
  const [state, dispatch] = useStateValue();
  const { movies, errorMessage, hasErrors, isLoading } = state;
  const programType = 'movies';

  useEffect(() => {
    getData(dispatch, programType);
  }, [])

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (hasErrors) {
    return <p>{errorMessage}</p>
  }

  if (movies.length === 0) {
    return <p>No movies corresponding to your filters</p>
  }

  return (
    <div className="list">
      {movies.map((m, i) => (
        <Tile
          key={i}
          coverUrl={m.images['Poster Art'].url}
          programType={programType}
          title={m.title}
        />
      ))}
    </div>
  )
}

export default MoviesScene;
