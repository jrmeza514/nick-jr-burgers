import Header from './Components/Header';

import Menu from './Components/Menu/Menu';
import { Timeline } from 'react-twitter-widgets';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
const twitterFeed = (<Timeline
  dataSource={{
    sourceType: 'profile',
    screenName: 'NicksJrBurgers'
  }}
  options={{
    height: '326px'
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
          <Route path="/">
            <div className="devil">
              {twitterFeed}
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;