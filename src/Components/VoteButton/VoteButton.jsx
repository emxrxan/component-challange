import React from 'react'
import './VoteButton.css'

export default function VoteButton(props) {
  return (
    <>
    {props.active 
        ? <button className='acitve' onClick={props.onClick}>{props.number}</button>
        : <button onClick={props.onClick}>{props.number}</button>}
    </>
  )
}
