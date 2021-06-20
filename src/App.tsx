import './App.css';
import Header from './Components/Header';
import Menu from './Components/Menu';
import { Timeline } from 'react-twitter-widgets';

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
      <Header></Header>
      <Menu></Menu>
      { showTwitterFeed ? twitterFeed : null}
    </div>
  );
}

export default App;