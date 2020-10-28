import React from 'react';
import './App.css';
import Header from "./containers/header"
import Routers from "./Routers/Routers"
import UserStore from './stores/UserStore';
import {UserInfor} from './context/userInfo'
import { useAuthListener } from './hook/index';
function App() {
  const { user } = useAuthListener();
  console.log(user)
  return (
    <div className="App">
      <UserInfor>
          <Header user = {user} />
          <Routers/>

       </UserInfor>
    </div>
  );
}

export default App;
