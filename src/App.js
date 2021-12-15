import React from "react";
import Vif from './skills/vIf'
import VShow from './skills/vShow'

import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="title">我是React栗子</div>
      <Routes>
        <Route path="/v-if" element={<Vif />} />
        <Route path="/v-show" element={<VShow />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
