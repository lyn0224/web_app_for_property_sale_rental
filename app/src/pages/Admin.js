import React, { Component, useState, useEffect } from 'react'
import {Table} from "react-bootstrap"
//npm install react-bootstrap bootstrap

function Admin() {

    const [users, setUsers] = useState([]);
    
    const getUser = async () => {
        try{
            let res = await fetch('http://localhost:9000/get_user', {
                method: 'get',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            let result = await res.json();
            //console.log(result);
            if(result && result.success){
                //console.log(result);
                // console.log("Get all user");
                let users = result.dataset;
                setUsers(users);
            }else if(result && result.success === false){
                alert(result.msg);
            }
        }catch(e){
            console.log(e);
        }
    }

    useEffect(() => {
        getUser();
        handleUpdateClick();
    }, []);

    const handleUpdateClick = async (user_id) =>{
        //console.log(user_id);
        try{
            let res = await fetch('http://localhost:9000/update_user', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: user_id,
                })
            });
            let result = await res.json();
            //console.log(result);
            if(result && result.success){
                console.log(result);
                console.log("Get all user after update");
                setUsers(result.dataset);
            }else if(result && result.success === false){
                alert(result.msg);
            }
        }catch(e){
            console.log(e);
        }
    }

    function getButtonsUsingMap(status, id){
        if(status === "P")
            return <button onClick={()=> handleUpdateClick(id)} >Approve</button>
        else
            return <label>Processed</label>;
    }
    
    return (
        <>
            <Table striped bordered hover style={{width: "800px", float: "right", marginRight: "100px"}}>
            <thead>
                <tr>
                <th>#</th>
                <th>Username</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => {
                    return(
                        <tr key={user.ID}>
                            <td>{user.ID}</td>
                            <td>{user.username}</td>
                            <td>{user.Email}</td>
                            <td>{user.a_type}</td>
                            <td>{getButtonsUsingMap(user.approved, user.ID)}</td>
                        </tr>
                    )
                }
                )}
            </tbody>
            </Table>
        </>
    )
}

export default Admin



// export class Admin extends Component {
//     state={
//         users:[]
//     };

//     getData = async() => {
//         try{
//             let res = await fetch('http://localhost:9000/get_user', {
//                 method: 'get',
//                 headers: {
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json'
//                 }
//             });
//             let result = await res.json();
//             console.log(result);
//             if(result && result.success){
//                 // console.log(result);
//                 // console.log("Get all user");
//                 let users = result.dataset;
//                 // console.log(users);
//                 this.setState({
//                     users
//                 });
//             }else if(result && result.success === false){
//                 alert(result.msg);
//             }
//         }catch(e){
//             console.log(e);
//         }
//     }
//     componentDidMount(){
//         this.getData();
//         console.log("first time generate user data");
//     }

//     componentWillUnmount() {
//         this.handleUpdateClick();
//         this.getData();
//         console.log("generate user data after change");
//         window.location.reload(false);
//     }

//     handleUpdateClick = async(user_id) => {
//         console.log(user_id);
//         try{
//             let res = await fetch('http://localhost:9000/update_user', {
//                 method: 'post',
//                 headers: {
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                     id: user_id,
//                 })
//             });
//             let result = await res.json();
//             console.log(result);
//             if(result && result.success){
//                 console.log(result);
//                 console.log("Get all user after update");
//                 let new_users = result;
//                 this.setState({
//                     new_users
//                 });
//             }else if(result && result.success === false){
//                 alert(result.msg);
//             }
//         }catch(e){
//             console.log(e);
//         }
//     }

//     getButtonsUsingMap = (status, id) => {
//         if(status === "P")
//             return <button onClick={()=>this.handleUpdateClick(id)} >Approve</button>
//         else
//             return <label>Processed</label>;
//     }

//     render() {
//         return (
//             <Table striped bordered hover style={{width: "800px", float: "right", marginRight: "100px"}}>
//             <thead>
//                 <tr>
//                 <th>#</th>
//                 <th>Username</th>
//                 <th>Email</th>
//                 <th>Role</th>
//                 <th>Status</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {this.state.users.map(user => {
//                     return(
//                         <tr key={user.ID}>
//                             <td>{user.ID}</td>
//                             <td>{user.username}</td>
//                             <td>{user.Email}</td>
//                             <td>{user.a_type}</td>
//                             <td>{this.getButtonsUsingMap(user.approved, user.ID)}</td>
//                         </tr>
//                     )
//                 }
//                 )}
//             </tbody>
//             </Table>
//         )
//     }
// }

// export default Admin



// import React, { Component } from 'react'
// import {Table} from "react-bootstrap"
// export class Admin extends Component {
//     users = [
//         {
//             id: 1,
//             username: "renee",
//             email: "renee@gmail.com",
//             role: "U",
//             status: "P"
//         },
//         {
//             id: 2,
//             username: "ruichun",
//             email: "ruichun@gmail.com",
//             role: "R",
//             status: "N"
//         }
//     ]

//     handleLogoutClick(id){
//         console.log(id);    
//     }

//     getButtonsUsingMap = (status, id) => {
//         if(status === "N")
//             return <button onClick={()=>this.handleLogoutClick(id)} >Approve</button>
//         else
//             return <label>Processed</label>;
//     }

//     render() {
//         return (
//             <Table striped bordered hover style={{width: "800px", float: "right", marginRight: "100px"}}>
//             <thead>
//                 <tr>
//                 <th>#</th>
//                 <th>Username</th>
//                 <th>Email</th>
//                 <th>Role</th>
//                 <th>Status</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {this.users.map(user => {
//                     return(
//                         <tr key={user.id}>
//                             <td>{user.id}</td>
//                             <td>{user.username}</td>
//                             <td>{user.email}</td>
//                             <td>{user.role}</td>
//                             <td>{this.getButtonsUsingMap(user.status, user.id)}</td>
//                         </tr>
//                     )
//                 }
//                 )}
//             </tbody>
//             </Table>
//         )
//     }
// }

// export default Admin

