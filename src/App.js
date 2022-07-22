import { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { offsetState } from './atoms/offsetAtom';
import { pokemonsState } from './atoms/pokemonsAtom';
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
