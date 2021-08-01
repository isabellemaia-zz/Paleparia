/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/Global'

import Navbar from './components/navbar'

import Routes from './routes';

const App: React.FC = () => (
  <>
  <BrowserRouter>
    <Navbar />
    <Routes />
  </BrowserRouter>
  <GlobalStyle/>
  </>
);

export default App;