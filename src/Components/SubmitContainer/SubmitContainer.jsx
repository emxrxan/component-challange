import React from 'react'
import './SubmitContainer.css'
import Content from '../Content/Content'

export default function SubmitContainer(props) {
    
  return (
    <div className='submitedContainer'>
        <div><img src="./img/illustration-thank-you.svg" alt="" /></div>
        <p className='voteContent'>{`You selected ${props.voteNumber} out of 5`}</p>
        <div>
            <Content 
                title="Thank you!" 
                content="We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!" 
                styling="submited"
            />
        </div>
    </div>
  )
}
