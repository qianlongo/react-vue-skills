import React, { createContext } from "react";
import Vif from './skills/vIf'
import VShow from './skills/vShow'
import VFor from './skills/vFor'
import Computed from './skills/computed'
import Watch from './skills/watch'
import Style from './skills/style'
import Class from './skills/class'
import Slot from './skills/slot'
import NameSlot from './skills/nameSlot'
import ScopeSlot from './skills/scopeSlot'

import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* <MyContext
        value={{}}
      > */}
        <div className="title">我是React栗子</div>
        <Routes>
          <Route path="/v-if" element={<Vif />} />
          <Route path="/v-show" element={<VShow />} />
          <Route path="/v-for" element={<VFor />} />
          <Route path="/computed" element={<Computed />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/style" element={<Style />} />
          <Route path="/class" element={<Class />} />
          <Route path="/slot" element={<Slot />} />
          <Route path="/nameSlot" element={<NameSlot />} />
          <Route path="/scopeSlot" element={<ScopeSlot />} />
        </Routes>
      {/* </MyContext> */}
    </BrowserRouter>
  );
}

export default App;
