import React,{useContext} from 'react';
import './App.css';
import Header from "./containers/header"
import Routers from "./Routers/Routers"
import {UserInfor} from './context/userInfo'

import {HousesProvider} from './context/housesContext'
function App() {
  return (
    <div className="App">
      
      <UserInfor>
          <Header />
          <HousesProvider>
            <Routers/>
          </HousesProvider>
       </UserInfor>
    </div>
  );
}

export default App;
