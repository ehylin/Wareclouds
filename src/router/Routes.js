import React from 'react';
import { BrowserRouter, Route , Routes} from 'react-router-dom';
import { Home } from '../views/index';
import { Header } from '../components/index';

export default function Router() {


  return (
    <BrowserRouter>
      <Header title='titulo'/>
      <Routes>
        
        <Route exact path="/" element={<Home />} />
        
      </Routes>
    </BrowserRouter>
  );
}