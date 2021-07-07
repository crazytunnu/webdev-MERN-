import Movies from './Component/Movies'
import about from './Component/about'
import home from './Component/home'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
function App() {
  return (
    <>
    <BrowserRouter>
    <Route exact path="/" component={home}/>
    <Route path="/aboutaaaaa" component={about}/>
    <Route exact path="/movies" component={Movies}/>
    
    
    
    </BrowserRouter>
    </>
  );
}

export default App;
