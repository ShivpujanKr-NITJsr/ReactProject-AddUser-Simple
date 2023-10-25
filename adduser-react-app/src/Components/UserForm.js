import AddUser from './AddUser';
import './UserForm.css'
import React, { useState } from 'react';

const UserForm = props => {

    const [name,setName]=useState("")
    const [age,setAge]=useState(0)


    const nameHandler=(event)=>{
        event.preventDefault()
        setName(event.target.value)
    }
    const ageHandler=(event)=>{
        event.preventDefault()
        setAge(event.target.value)
    }

    const submitHandler=(event)=>{
        event.preventDefault()
        let rect=event.target.getBoundingClientRect();
        // console.log(name)
        const obj={name,age};

        props.onAddUser(obj)
    }

    return (
    <form className='local' onSubmit={submitHandler}>
            <div>
                <label className='local' id='un'>Username</label>
                <input id='na' type='text' style={{backgroundColor:'white'}} onChange={nameHandler} />
            </div>
            <div>
                <label className='local' id='age'>Age(Years)</label>
                <input id='ag' type='number'  style={{backgroundColor:'white'}} onChange={ageHandler}/>
            </div>
            <AddUser type='submit' >Add User</AddUser>
        </form>
)
    
}


export default UserForm;