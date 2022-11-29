import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Congrats from './components/Congrats';
import NotFound from './components/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App time={new Date("December 1, 2022").getTime()} />} />
        <Route path="/global" element={<App time={new Date("December 1, 2022 GMT-12").getTime()} />} />
        <Route path="/test" element={<App time={new Date("November 29, 2022 12:35").getTime()} />} />
        <Route path="/congrats" element={<Congrats />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
