import React,{useContext} from 'react';
import './App.css';
import Header from "./containers/header"
import Routers from "./Routers/Routers"
import {UserInfor,Context} from './context/userInfo'
import {HouseProvider} from './context/houseContext'
function App() {
  // const {user} = useContext(Context);
  return (
    <div className="App">
      
      <UserInfor>
          <Header />
          <HouseProvider>
            <Routers/>
          </HouseProvider>
       </UserInfor>
    </div>
  );
}

export default App;
