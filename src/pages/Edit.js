
import { useEffect, useState } from "react"
import http from "../http"
import { useNavigate, useParams } from "react-router-dom";


export default function Edit(props)
{
    const navigate = useNavigate();

    const [inputs, setInputs] =  useState({});

    const {id} = useParams();
    
    useEffect(()=>{
        fetchUser()
    },[]);


    const fetchUser = ()=>
    {
        http.get('users/'+id+'/edit').then((res)=>
        {

            setInputs({
                name:res.data.name,
                email:res.data.email,
            })
        })
    }

    const handleChange = (event)=>{
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values =>({...values,[name]:value}))
    }

    const submitForm = () =>{
        console.log(inputs);

        http.put('/users/'+id,inputs).then((res)=>
        {
            navigate('/');
        })
    }


    return(
        <div className="container">
            <h2>Update Record</h2>
            <form style={{"width":"400px"}}>
                <div className="mb-3 mt-3">
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter Name" name="name" value={inputs.name || ''} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email">Email ID:</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"  value={inputs.email || ''} onChange={handleChange}  />
                </div>
                
                <button type="button" onClick={submitForm} className="btn btn-primary">Update</button>
            </form>
            
        </div>
    )
}