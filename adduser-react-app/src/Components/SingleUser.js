
import './SingleUser.css'


const SingleUser=props=>{
    return <div className='single'>
        
        {props.name} (
        {props.age} years old)
    </div>
}


export default SingleUser