import React from 'react';
import { CastPreview } from './CastPreview';

export const IndexPage = ({ cast }) => (
  <div className="home">
    <div className="cast-selector">
      {cast.map(
        castData => <CastPreview key={castData.id} {...castData} />,
      )}
    </div>
  </div>
);

export default IndexPage;
