import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import store from './redux/store';
import BallContainer from './BallContainer'
function App() {
  return (
    <Provider store={store}>
      <div className='App'>
          <BallContainer/>
      </div>
    </Provider>
  )
}

export default App;
