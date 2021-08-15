import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import store from './redux/store';
import BallContainer from './BallContainer'
import BatContainer from './BatContainer';
import UserContainer from './userContainer';
function App() {
  return (
    <Provider store={store}>
      <div className='App'>
          {/* <BallContainer/>
          <BatContainer/> */}
          <UserContainer/>
      </div>
    </Provider>
  )
}

export default App;
