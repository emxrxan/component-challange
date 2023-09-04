import React, {useContext} from 'react'
import './VoteContainer.css'
import Content from '../Content/Content'
import Icon from '../Icon/Icon'
import VoteButton from '../VoteButton/VoteButton'
import {AiFillStar} from 'react-icons/ai'
import Context from '../../Context'

export default function VoteContainer(props) {
  
  const {active, setActive, voteList} = useContext(Context);

  const setActiveFunction = (number) => {
    const updateVoteList = [...voteList];

    updateVoteList.forEach((element) => {
      if(element.number === number){
        element.acitve = true
      }
      })
    setActive(updateVoteList);
  }

  return (
    <div className='voteContainer'>
        <div><Icon icon={AiFillStar}/></div>
        <div>
            <Content 
                title="How did we do?" 
                content="Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!" 
                styling="vote"
            />
        </div>
        <div className='voteButtonContainer'>
          {
            active.map((element) => <VoteButton active={element.acitve}  number={element.number} key={element.number} onClick={() => setActiveFunction(element.number)}/>)
          }
        </div>
        <button onClick={props.onSubmit}>Submit</button>
    </div>
  )
}
