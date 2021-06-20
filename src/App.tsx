import './App.css';
import Header from './Components/Header';
import Menu from './Components/Menu';
import { Timeline } from 'react-twitter-widgets';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const showTwitterFeed = false;
const twitterFeed = (<Timeline
  dataSource={{
    sourceType: 'profile',
    screenName: 'NicksJrBurgers'
  }}
  options={{
    maxWidth: '600'
  }}
/>);

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/menu">
            <Menu></Menu>
          </Route>

        </Switch>
        
        { showTwitterFeed ? twitterFeed : null}
      </Router>
    </div>
  );
}

export default App;