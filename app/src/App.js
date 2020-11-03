import React from 'react';
import './App.css';
import Header from "./containers/header"
import Routers from "./Routers/Routers"
import UserStore from './stores/UserStore';
import {UserInfor} from './context/userInfo'
function App() {
  return (
    <div className="App">
      <UserInfor>
          <Header />
          <Routers/>
       </UserInfor>
    </div>
  );
}

export default App;
