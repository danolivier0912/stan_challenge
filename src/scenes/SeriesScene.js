import React, { useEffect } from 'react';
import { useStateValue } from '../store/StateProvider';
import getData from '../services/api/api';
import Tile from "../components/Tile/Tile";

const SeriesScene = () => {
  const [state, dispatch] = useStateValue();
  const { series, errorMessage, hasErrors, isLoading } = state;
  const programType = 'series';

  useEffect(() => {
    getData(dispatch, programType);
  }, [])

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (hasErrors) {
    return <p>{errorMessage}</p>
  }

  return (
    <div className="list">
      {series.map((s, i) => (
        <Tile
          key={i}
          coverUrl={s.images['Poster Art'].url}
          programType={programType}
          title={s.title}
        />
      ))}
    </div>
  )
}

export default SeriesScene;
