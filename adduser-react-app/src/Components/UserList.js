import SingleUser from './SingleUser';
import './UserList.css'


const UserList=props=>{


    return <div className='user-list'>
        {props.items.map(item=>{
            return <SingleUser key={Math.random().toString()} name={item.name} age={item.age} />
        })}
    </div>

}

export default UserList;