import React from "react";
import Vif from './skills/vIf'
import VShow from './skills/vShow'
import VFor from './skills/vFor'
import Computed from './skills/computed'
import Watch from './skills/watch'

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
        <Route path="/v-for" element={<VFor />} />
        <Route path="/computed" element={<Computed />} />
        <Route path="/watch" element={<Watch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
