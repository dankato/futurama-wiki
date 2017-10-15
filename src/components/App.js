import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from './Layout';
import { IndexPage } from './IndexPage';
import { CastPage } from './CastPage';
import { NotFoundPage } from './NotFoundPage';
import cast from '../data/cast';

const renderIndex = () => <IndexPage cast={cast} />;
const renderCast = ({ match, staticContext }) => {
  const id = match.params.id;
  const castMember = cast.find(current => current.id === id);
  if (!castMember) {
    return <NotFoundPage staticContext={staticContext} />;
  }
  return <CastPage castMember={castMember} cast={cast} />;
};

export const App = () => (
  <Layout>
    <Switch>
      <Route exact path="/" render={renderIndex} />
      <Route exact path="/cast/:id" render={renderCast} />
      <Route component={NotFoundPage} />
    </Switch>
  </Layout>
);

export default App;
