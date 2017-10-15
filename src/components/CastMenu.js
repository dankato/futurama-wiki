import React from 'react';
import { Route, Link } from 'react-router-dom';

const shortName = (fullname) => {
  const [surname] = fullname.split(' ');
  return `${surname}`;
};

const CastMenuLink = ({ id, to, label }) => (
  <Route path={`/cast/${id}`}>
    {({ match }) => (
      <Link to={to} className={match ? 'active' : ''}>{label}</Link>
    )}
  </Route>
);

export const CastMenu = ({ cast }) => (
  <nav className="cast-menu">
    {
      cast.map(castMember =>
        <CastMenuLink key={castMember.id} id={castMember.id} to={`/cast/${castMember.id}`} label={shortName(castMember.name)} />,
      )
    }
  </nav>
);

export default CastMenu;
