import React from 'react';
import Home from './pages/Home'
import { Provider } from 'react-redux';
import store from './store';
import { GlobalStyle } from './globalStyles';


function App() {
  return (
    <>
      <GlobalStyle />
        <Provider store={store}>
        <Home />
      </Provider>
    </>
  )
}

export default App;
