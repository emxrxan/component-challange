import React, {useState, useEffect} from "react";
import VoteContainer from "./Components/VoteContainer/VoteContainer";
import SubmitContainer from "./Components/SubmitContainer/SubmitContainer";
import Context from "./Context";
import './App.css'

function App() {

  const voteList = [
    {number:1,acitve:false},
    {number:2,acitve:false},
    {number:3,acitve:false},
    {number:4,acitve:false},
    {number:5,acitve:false},
  ];

  const [vote, setVote] = useState({number: 0});
  const [submit, setSubmit] = useState(false);
  const [active, setActive] = useState(voteList);

  const onSubmit = () => {
    setSubmit(true);
  }

  useEffect(() => {
    setVote(active.filter((element) => element.acitve));
  }, [active])

  return (
    <div className="App">
      <Context.Provider value={{active, setActive, voteList}}>
      {!submit 
        ? <VoteContainer onSubmit={(active)=>onSubmit(active)}/>
        : <SubmitContainer voteNumber={vote[0].number}/>
      }
      </Context.Provider>
    </div>
  );
}

export default App;
