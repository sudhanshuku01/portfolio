import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Lazyloader from './Components1/Lazyloader';

// Lazy-loaded components
const Home = lazy(() => import('./Components1/Home'));
const Workspace = lazy(() => import('./Components1/Workshop'));
const Connect = lazy(() => import('./Components1/Connect'));
const About = lazy(() => import('./Components1/About'));
const Games = lazy(() => import('./Components1/Games'));
const TicTacToe = lazy(() => import('./Components1/TicTacToe'));
const Chess = lazy(() => import('./Components1/Chess'));
const Flappybird = lazy(() => import('./Components1/Flappybird'));


const App = () => {
  return (
    <Suspense fallback={<Lazyloader/>}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/workshop' element={<Workspace />} />
        <Route path='/connect' element={<Connect />} />
        <Route path='/about' element={<About />} />
        <Route path='/game' element={<Games />} />
        <Route path='/game/tic-tac-toe' element={<TicTacToe />} />
        <Route path='/game/chess' element={<Chess />} />
        <Route path='/game/flappy-bird' element={<Flappybird />} />
      </Routes>
    </Suspense>
  );
};

export default App;
