
import './AddUser.css'

const AddUser=(props)=>{

    let p=props.classname;

   

    return (
        <button type={props.type} className='btn' onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default AddUser
