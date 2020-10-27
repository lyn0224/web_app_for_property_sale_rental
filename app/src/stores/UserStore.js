import { extendObservable } from 'mobx';

class UserStore{
    constructor(){
        extendObservable(this,{
            loading: true,
            isLoggedIn: true,
            isSignup: false,
            username: '',
            password: '',
            confirmPassword: '',
            email: ''
        })
    }
}

export default new UserStore();