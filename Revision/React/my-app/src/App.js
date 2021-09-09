import logo from './logo.svg';
import './App.css';
import Reducer from './component/reducer.js'
import Game from './component/props.js'
import Message from './component/message.js'
import Count from './component/count.js'
import Destructuring from './component/destructuring'
import Parent from './component/parent';

function App() {
  return (
    // <Reducer/>
    // <Game name="Arshad" title="Hussain">ldkfjlsd</Game>
    // <Message/>
    // <Count count="2"/>
    // <Destructuring name="Arshad" hero="SpiderMan"/>
    <Parent name="Arshad" />

  );
}

export default App;
