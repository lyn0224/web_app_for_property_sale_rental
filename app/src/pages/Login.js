import React, { Component } from 'react';
import { observer } from 'mobx-react';
import UserStore from '../stores/UserStore';
import Loading from '../components/loading';
import {Redirect} from "react-router-dom"
import LoginRender from "../components/Login"
class Login extends Component {
    async componentDidMount() {
        try{
            let res = await fetch('/isLoggedIn', {
                method: 'post',
                header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                }
            });
            let result = await res.json();
            if(result && result.success){
                UserStore.loading = false;
                UserStore.isLoggedIn = true;
                UserStore.username = result.username;
            }else{
                UserStore.loading = false;
                UserStore.isLoggedIn = false;
            }
        }catch(e){
            UserStore.loading = false;
            UserStore.isLoggedIn = false;
        }
    }
    
    async doLogout() {
        try{
          let res = await fetch('/logout', {
            method: 'post',
            header: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          });
          let result = await res.json();
          if(result && result.success){
            UserStore.isLoggedIn = true;
            UserStore.username = '';
          }
        }catch(e){
          console.log(e);
        }
    }

    render() {

        const redirect = UserStore.isLoggedIn ? <Redirect to='/'  /> :  <LoginRender/>

        const render_component = UserStore.loading ? <Loading/>: redirect
        
        return render_component

    }
}
export default observer(Login);