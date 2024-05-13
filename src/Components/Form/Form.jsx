import { useState } from 'react';
import './Form.css'
import { Button } from 'react-bootstrap';
function Form({closeForm, addData, value}){
    const [formstate,setFormstate]=useState(
        value || {
        id:1,
        name:"",
        email:"",
        contact:""
    });

    const handleIdChange=(e)=>{
        setFormstate({
            ...formstate,
            id:e.target.value,
        })
    }
    const handleNameChange=(e)=>{
        setFormstate({
            ...formstate,
            name:e.target.value,
        })
    }
    const handleEmailChange=(e)=>{
        setFormstate({
            ...formstate,
            email:e.target.value,
        })
    }
    const handleContactChange=(e)=>{
        setFormstate({
            ...formstate,
            contact:e.target.value,
        })
    }
    const formValidation=()=>{
       if(formstate.id && formstate.name && formstate.email && formstate.contact){
        return true;
       }else{
        return false;
       }
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!formValidation()){
            alert("All fields are required!")
            return;
        }
        addData(formstate)
        closeForm();
    }
    return(
        <div className="form-container" onClick={(e)=>{
            if(e.target.className==="form-container"){
                closeForm();
            }
        }}>
           <div className="form">
              <form >
                <input type="number"  placeholder='Enter ID' onChange={handleIdChange}/>
                <input type="text"  placeholder='Enter Name' onChange={handleNameChange}/>
                <input type="text"  placeholder='Enter email'onChange={handleEmailChange}/>
                <input type="text"  placeholder='Enter contact' onChange={handleContactChange}/>
                <Button type="submit" onClick={handleSubmit}>Submit</Button>
                </form>
            </div> 
        </div>
    )
}
export default Form;