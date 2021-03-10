import React from 'react';
import { Link } from 'react-router-dom';

import './Tile.scss';
import Placeholder  from '../../../assets/images/placeholder.png';

const Tile = props => {
  const {
    coverUrl,
    programType,
    title,
    type
  } = props;

  return (
    <div className={`tile ${type === 'presentation' ? "tile--presentation" : ""}`}>
      <div className="tile__cover">
        { type === 'presentation' ? (
          <Link to={`${programType.toLowerCase()}`}>
            <img src={ Placeholder } alt="" />
            <span>{ programType }</span>
          </Link>
        ) : (
          <img src={ coverUrl } alt="" />
        )}
      </div>
      <h4 className="tile__title">{ title }</h4>
    </div>
  )
}

export default Tile;
