import React from 'react';
import { BrowserRouter, Route , Routes} from 'react-router-dom';
import { Home, Search } from '../views/index';
import { Header } from '../components/index';

export default function Router() {
  return (
    <BrowserRouter>
      <Header title='Wareclouds'/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/buscar" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}