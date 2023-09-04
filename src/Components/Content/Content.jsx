import React from 'react'
import './Content.css'

export default function Content(props) {
  return (
    <div className={props.styling}>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
    </div>
  )
}
