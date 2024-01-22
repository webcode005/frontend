import { useState,useEffect } from "react";
import http from "../http"
import { Link } from "react-router-dom";

export default function Home() {


        const [users, setUsers] = useState([]);

        useEffect(()=>
        {
            fetchAllUsers();
        },[]);

        const fetchAllUsers = () =>
        {
            http.get('/users').then(res=>
                {
                    setUsers(res.data);
                })
        }

        
        const deleteUser = (id) =>
        {
            http.delete('/users/'+id).then(res=>
                {
                    fetchAllUsers();
                })
        }

    return(
        <div className="container">
            <h2>Hello</h2>
            <table className="table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {users.map((user,index)=>(
                <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td><Link to={{pathname:"/edit/"+user.id}} className="btn btn-primary">Edit</Link> | <button onClick={()=>{deleteUser(user.id)}}  className="btn btn-danger">Delete</button></td>
                </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}