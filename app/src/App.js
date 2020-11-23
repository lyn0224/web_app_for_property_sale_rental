import React,{useContext} from 'react';
import './App.css';
import Header from "./containers/header"
import Routers from "./Routers/Routers"
import {UserInfor} from './context/userInfo'

import {HousesProvider} from './context/housesContext'
import {RentProvider} from './context/rentContext'

function App() {
  return (
    <div className="App">
      
      <UserInfor>
          <Header />
          <HousesProvider>
            <RentProvider>
              <Routers/>
            </RentProvider>  
          </HousesProvider>
       </UserInfor>
    </div>
  );
}

export default App;
