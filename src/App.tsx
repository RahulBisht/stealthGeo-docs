import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import UserSupport from './pages/UserSupport';
import './index.css';

function App() {
  return (
    <Router basename="/stealthGeo-docs">
      <div className="app">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/user-support" element={<UserSupport />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
