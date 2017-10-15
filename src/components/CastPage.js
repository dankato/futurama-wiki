import React from 'react';
import { Link } from 'react-router-dom';
import { CastMenu } from './CastMenu';

export const CastPage = ({ castMember, cast }) => {
  const headerStyle = { backgroundImage: `url(/img/${castMember.cover})` };
  return (
    <div className="cast-full">
      <CastMenu cast={cast} />
      <div className="cast">
        <header style={headerStyle} />
        <div className="picture-container">
          <img alt={`${castMember.name}'s profile`} src={`/img/${castMember.image}`} />
          <h2 className="name">{castMember.name}</h2>
        </div>
        <section className="description">
        <a href={castMember.link}><strong>Futurama</strong></a> follows the comic exploits of Phillip J. Fry, a pizza delivery boy, who was accidentally cryogenically frozen in 1999, and awakens in the year 3000, finding much has changed, and, yet, is seemingly familiar. Together with an assortment of alien, robot, and human friends, he works for an intergalactic delivery service, Planet Express, run by his descendant nephew, and finds many adventures along the way.
        </section>
      </div>
      <div className="navigateBack">
        <Link to="/">Return to Main Page</Link>
      </div>
    </div>
  );
};

export default CastPage;
