import logo from './logo.svg';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Signup from './component/Signup';
import Login from './component/Login';
// import Main from './MaterialUI/main.js'
import Ioa from './component/Ioa';
import Feed from './component/Feed';
import PrivateRoute from './component/PrivateRoute';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path='/' component={Feed}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/login' component={Login}/>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
