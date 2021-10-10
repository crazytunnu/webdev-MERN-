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
import HocUse from './component/30+/HocUse';
import RenderProps from './component/30+/RenderProps';
import CounterRENDER from './component/30+/CounterRENDER';
import CounterUserRENDER from './component/30+/CounterUserRENDER';
import CounterUserRENDER2 from './component/30+/CounterUserRENDER2';
import ContextMain from './component/30+/ContextMain';
import Hooks1 from './component/40+/hooks1';
import Hooks2 from './component/40+/hooks2';
function App() {
  return (<>
    {/* // <Reducer/> */}
    {/* // <Game name="Arshad" title="Hussain">ldkfjlsd</Game> */}
    {/* // <Message/> */}
    {/* // <Count count="2"/> */}
    {/* // <Destructuring name="Arshad" hero="SpiderMan"/> */}
    {/* // <Parent name="Arshad" /> */}
    {/* // <Conditional status={false}/> */}
    {/* // <Listrenderingparent/> */}
    {/* // <Styling style={false}/> */}
    {/* // <Inline/> */}
    {/* // <Formhandling/> */}
    {/* // <Mounting/> */}
    {/* // <ParentComp/> */}
    {/* // <PurecompParent/> */}
    {/* // <HocUse/> */}
    {/* // <RenderProps name={(login)=>login? "Arshad":"Guest"}/> */}
    {/* <CounterRENDER render={(count,increment)=>(<CounterUserRENDER count={count} increment={increment}/>)}/> */}
    {/* <CounterRENDER render={(count,increment)=>(<CounterUserRENDER2 count={count} increment={increment}/>)}/> */}
    {/* <ContextMain/> */}
    {/* <Hooks1/> */}
    <Hooks2/>
    </>
  );
}

export default App;
