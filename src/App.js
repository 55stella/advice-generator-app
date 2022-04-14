

import {useState, useEffect} from 'react'
import Dice from './images/icon-dice.svg'
import Pattern from './images/pattern-divider-desktop.svg'

function App() {
  // const[adviceList, setAdviceList]= useState([
  //   {id:1, body: 'A stitch in time savves nine'},
  //   {id:2, body: 'Make hay while the sun shine'},
  //   {id:3, body: 'Early to bed, Early to rise'},
  //   {id:4, body: 'Problem e no dey finish, make you try dey enjoy'},
  // ])
  const [advice, setAdvice] = useState({})
  // const [adviceIndex, setAdviceIndex] = useState(0)

  // const generatRandom=()=> Math.floor(Math.random()*adviceList.length)
  const getAdvice =async() =>{
    let adviceSlip =   await fetch('https://api.adviceslip.com/advice')
    console.log(adviceSlip)
    return adviceSlip.json()
  }
  
  const showAdvice =()=>{
    getAdvice().then(data=>{
    setAdvice(data.slip)
      // console.log(showAdvice)
      
    
    })
  }
  //  const next = () =>{
  //    if(adviceIndex ===adviceList.length){
  //      setAdviceIndex(0)
  //    }
  //    setAdviceIndex(adviceIndex +1)
  //  }
  useEffect(()=>{
    // console.log(adviceList)

    showAdvice()
  }, [])
  return (
    <div className="App">
      <div className="card">
        {/* <p>Advice #{adviceList[adviceIndex].id}</p> */}
        <p>Advice #{advice.id}</p>
        {/* <h1>"{adviceList[adviceIndex].body}"</h1> */}
        <h1>"{advice.advice}"</h1>
        {/* <button onClick ={()=>setAdviceIndex(generatRandom())}> New Advice</button> */}
        <img src="{Pattern}"  className ='pattern'alt="" />
        <button onClick ={showAdvice}> New Advice
        <img src="{Dice}" alt="" />
        </button>
      </div>
    </div>
  );
}

export default App;
