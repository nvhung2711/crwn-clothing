import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Navigation from './routes/navigation/navigation';
import Home from './routes/home/home';
import Authentication from './routes/authentication/authentication';
import Shop from './routes/shop/shop';
import Checkout from './routes/checkout/checkout';
import { checkUserSession } from './store/user/user.action';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(checkUserSession());
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home /> } />
        <Route path='shop/*' element={<Shop /> } />
        <Route path='auth' element={<Authentication /> } />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
