import { useState } from 'react';
import Header from './Componets/Layout/Header';
import Meals from './Componets/Meals/Meals';
import Cart from './Componets/Cart/Cart';
import CardProvider from './Componets/Store/CardProvider';
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CardProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CardProvider>
  );
}

export default App;
