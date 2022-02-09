import Login from './components/login/login';
import styles from './app.module.css';
import { Route } from 'react-router-dom';
import Home from './components/home/home';
import { Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

const App = ({ authService }) => {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home authService={authService} />} />
          <Route path="/login" element={<Login authService={authService} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
