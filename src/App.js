import React from "react";
import Vif from './skills/vif'

import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/v-if" element={<Vif />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
