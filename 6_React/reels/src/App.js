import logo from './logo.svg';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Signup from './component/Signup';
function App() {
  return (
    <AuthProvider>
      <Signup/>
    </AuthProvider>
  );
}

export default App;
