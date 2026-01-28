import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './assets/pages/HomePage.tsx';
import LoginPage from './assets/pages/LoginPage.tsx';
import RegisterPage from './assets/pages/RegisterPage.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/connexion" element={<LoginPage />} />
        <Route path="/inscription" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
