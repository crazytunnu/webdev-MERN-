import Movies from './Component/Movies'
import about from './Component/about'
import home from './Component/home'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
function App() {
  return (
    <>
    <BrowserRouter>
    <Route path="\" component={home}/>
    
    
    
    </BrowserRouter>
    </>
  );
}

export default App;
