import Movies from './Component/Movies'
import About from './Component/about'
import home from './Component/home'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
function App() {
  return (
    <>
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={home}/>

    <Route path='/about' render={(props)=>{ return <About {...props} isAuth={true} />}}/>
    <Route exact path="/movies" component={Movies}/>
    {/* <Route exact path="/about" component={about}/> */}
    
    
    </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
