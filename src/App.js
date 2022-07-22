import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import CapturedPage from './pages/CapturedPage';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <RecoilRoot>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/captured" exact element={<CapturedPage />} />
        </Routes>
      </RecoilRoot>
    </Router>
  );
};

export default App;
