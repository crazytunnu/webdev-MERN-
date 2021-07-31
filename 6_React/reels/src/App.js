import logo from './logo.svg';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Signup from './component/Signup';
import Login from './component/Login';
// import Main from './MaterialUI/main.js'
function App() {
  return (
    // <AuthProvider >

    // <Signup/>
    // </AuthProvider>
    // <Main/>
    <AuthProvider>
    <Signup/>
    <Login/>
    </AuthProvider>
    // <Main/>
  );
}

export default App;
