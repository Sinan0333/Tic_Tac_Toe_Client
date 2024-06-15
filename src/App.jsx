import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserIsLoggedIn, UserIsLoggedOut } from './components/ProtectRoute';
import Loader from './components/Loader';

// Lazy load components
const Play = lazy(() => import('./components/Play'));
const SignIn = lazy(() => import('./components/SignIn'));
const Home = lazy(() => import('./components/Home'));
const EndGame = lazy(() => import('./components/EndGame'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path='/' element={<UserIsLoggedOut />}>
            <Route path='/sign-in' element={<SignIn />} />
          </Route>
          <Route path='/' element={<UserIsLoggedIn />}>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/play/:_id' element={<Play />} />
            <Route path='/end-game/:win' element={<EndGame />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
