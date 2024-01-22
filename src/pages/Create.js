
import { useEffect, useState } from "react"
import http from "../http"
import { useNavigate } from "react-router-dom";


export default function Create()
{
    const navigate = useNavigate();

    const [inputs, setInputs] =  useState({});

    const handleChange = (event)=>{
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values =>({...values,[name]:value}))
    }

    const submitForm = () =>{
        console.log(inputs);

        http.post('/users',inputs).then((res)=>
        {
            navigate('/');
        })
    }


    return(
        <div className="container">
            <h2>Create Page</h2>
            <form style={{"width":"400px"}}>
                <div className="mb-3 mt-3">
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter Name" name="name" value={inputs.name || ''} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email">Email ID:</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"  value={inputs.email || ''} onChange={handleChange}  />
                </div>
                <div className="mb-3">
                    <label htmlFor="password">Password:</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter password" name="password"  value={inputs.password || ''} onChange={handleChange}  />
                </div>
                
                <button type="button" onClick={submitForm} className="btn btn-primary">Submit</button>
            </form>
            
        </div>
    )
}