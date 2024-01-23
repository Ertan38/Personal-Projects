import './App.css';
import SignIn from './components/Signin';
import SignUp from './components/Signup';
import AuthDetails from './components/authenticator';

function App() {
  return (
    <div className="App">
      <SignIn />
      <SignUp />
      <AuthDetails />
    </div>
  );
}

export default App;