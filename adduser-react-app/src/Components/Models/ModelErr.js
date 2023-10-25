
import React from 'react'
import './ModelErr.css'

const Model = props => {

    let ans = '';

    
    if (props.name === '' || !props.name) {
        ans = `Please enter a valid name and age (non-empty values) `
    } else if (props.age <= 0) {
        let k = ">"
        ans = `Please enter a valid age (${k}0)`
    }

    const btnHandler = () => {
  
        props.onBtn()
    }

    return (
        <div className='overlay'>
            <div className='model' style={{ top: '50%', left: '50%' }}>
                <h3 style={{ backgroundColor: 'blueviolet', margin: '0px', paddingLeft: '5px' }}>Invalid input</h3>


                <label style={{ margin: '0px', paddingLeft: '5px' }}>{ans}</label>
                <button style={{ backgroundColor: 'blue', marginRight: '6px' }} onClick={btnHandler}>Okay</button>

            </div>
        </div>

    )
}

export default Model



