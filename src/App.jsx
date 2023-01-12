import React, { useState } from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login"
import FeedGeneral from "./components/FeedGeneral";
import Perfil from "./components/Perfil";
import firebaseApp from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";


const auth = getAuth(firebaseApp);

function App() {

  const [usuarioGlobal, setUsuarioGlobal] = useState(null);

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuarioGlobal(usuarioFirebase);
    } else {
      setUsuarioGlobal(null);
    }
  });
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='' element={usuarioGlobal ? (<Home usuarioGlobal={usuarioGlobal} />) : (<Login />)} ></Route>
          <Route path='/Feed' element={usuarioGlobal ? (<FeedGeneral usuarioGlobal={usuarioGlobal} />) : (<Login />)} />
          <Route path='/Perfil' element={usuarioGlobal ? (<Perfil usuarioGlobal={usuarioGlobal} />) : (<Login />)} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;