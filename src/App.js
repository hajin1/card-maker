import Login from './components/login/login';
import styles from './app.module.css';
import { Route } from 'react-router-dom';
import Maker from './components/maker/maker';
import { Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

const App = ({ authService, FileInput }) => {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/maker" element={<Maker authService={authService} FileInput={FileInput} />} />
          <Route path="/" element={<Login authService={authService} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
