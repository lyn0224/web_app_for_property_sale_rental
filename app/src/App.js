import React from 'react';
import './App.css';
import Header from "./components/Header"
import Routers from "./Routers/Routers"
import UserStore from './stores/UserStore';
function App() {
  console.log(UserStore.isLoggedIn)
  const check = UserStore.isLoggedIn
  console.log(check)
  return (
    <div className="App">
      
          <Header isLoggedIn = {check}/>
          <Routers/>
    </div>
  );
}

export default App;
