import './app.css';
import Login from './components/login/login';

const App = ({ authService }) => {
  return (
    <Login authService={authService} />
  );
}

export default App;
