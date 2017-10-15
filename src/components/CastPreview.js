import React from 'react';
import { Link } from 'react-router-dom';

export const CastPreview = props => (
  <Link to={`/cast/${props.id}`}>
    <div className="cast-preview">
      <img src={`img/${props.image}`} alt={`${props.name}'s profile`} />
      <h2 className="name">{props.name}</h2>
    </div>
  </Link>
);

export default CastPreview;
