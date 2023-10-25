
import './App.css';
import React, { useState } from 'react';
import ModelErr from './Components/Models/ModelErr'
import UserForm from './Components/UserForm';
import UserList from './Components/UserList';

function App() {

  const [user,setUser]=useState([])

  const [model,setModel]=useState();
  
  const addUserHandler=obj=>{

    const name=obj.name.trim();
    // console.log(name)
    const age=obj.age;
    obj.class='model'
    const cancelHandler=()=>{
      // content= 
      setModel()
    }
    if(age<=0 || name===''){
      
      setModel(<ModelErr name={obj.name} age={obj.age}  onBtn={cancelHandler}></ModelErr>)
      return;
    }
    setUser(prevUsers=>{
      const userAdded=[...prevUsers];
      userAdded.unshift ({name:obj.name,age:obj.age,id:Math.random().toString()})
      return userAdded;
    })
  }

  let content=''
  if(user.length>0){
    content= (
      <UserList items={user} />
    )
  }
  

  return (
    <div >
      <section id="user-form">
        <UserForm onAddUser={addUserHandler} />
      </section>
      <section id='user'>
        {content}
      </section>
      {model}
    </div>
  );
}

export default App;
