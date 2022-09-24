import { Route, Switch } from 'react-router-dom';

import AllMeetupPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import Favorite from './pages/Favorite';
import Layout from './layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <AllMeetupPage />
        </Route>
        <Route path='/new-meetup'>
          <NewMeetupPage />
        </Route>
        <Route path='/favorites'>
          <Favorite />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
