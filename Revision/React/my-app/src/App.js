import logo from './logo.svg';
import './App.css';
import Reducer from './component/reducer.js'
import Game from './component/props.js'
import Message from './component/message.js'
import Count from './component/count.js'
import Destructuring from './component/destructuring'
import Parent from './component/parent';
import Conditional from './component/conditional';
import Listrenderingparent from './component/listrenderingparent';
import Styling from './component/20+/Styling'
import Inline from './component/20+/Inline'
import Formhandling from './component/20+/Formhandling'
import Mounting from './component/20+/Mounting';
import ParentComp from './component/20+/parentComp';
import PurecompParent from './component/20+/purecompParent';

function App() {
  return (
    // <Reducer/>
    // <Game name="Arshad" title="Hussain">ldkfjlsd</Game>
    // <Message/>
    // <Count count="2"/>
    // <Destructuring name="Arshad" hero="SpiderMan"/>
    // <Parent name="Arshad" />
    // <Conditional status={false}/>
    // <Listrenderingparent/>
    // <Styling style={false}/>
    // <Inline/>
    // <Formhandling/>
    // <Mounting/>
    // <ParentComp/>
    <PurecompParent/>
  );
}

export default App;
