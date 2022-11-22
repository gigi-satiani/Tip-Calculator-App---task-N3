import './App.css';
import logo from './images/logo.svg'
import dollar from './images/dollar.svg'
import { useState } from 'react';

function App() {
  // const [regex, setRegex] = useState('');
  // const [regError, setRegError] = useState(false);

  // const validate = () => {
  //   if (noZero.test(regex)) {
  //     setRegError(true)
  //   }
  // }

  const [activeButtonIndex, setActiveButtonIndex] = useState(-1);
  function buttonClick(clicker) {
    setActiveButtonIndex(clicker);
  }


  return (
   <div className="App">
    <figure className='mainLogo'>
      <img src={logo}></img>
    </figure>
    <div className='cardsParent'>
      <div className='firstCard'>
       <form>
        <div className='billDiv'>
          <span>Bill</span>
          <input type='number'className='billInput'></input>
        </div>
        <div className='selectTipParent'>
         <span>Select Tip %</span>
         <Buttonsgroup
              buttonClick={buttonClick}
              activeButtonIndex={activeButtonIndex}
              />
         <input type='number' placeholder='Custom'></input>
        </div>
       <div className='numberOfPeopleParent'>
         <span>Number of People</span>
         <span className='redAlertZero'>Can't be zero</span>
         <PeoppleInput
          // validate={validate}
         />
        </div>
       </form>
      </div>

      <div className='secondCard'>
        <div className='tipParent'>
          <span className='amount'>Tip Amount <br/><span className='person'>/ person</span></span>
          <span className='amountValue'>
            <img src={dollar}></img>0.00
          </span>
        </div>
        <div className='totalParent'>
          <span className='amount'>Total<br/> <span className='person'>/ person</span></span>
          <span className='amountValue'>
            <img src={dollar}></img>0.00
          </span>
        </div>
        <button className='reseter'>RESET</button>
      </div>
    </div>
   </div>
  );
}

const Buttonsgroup = (props) => {
  console.log('props', props)
  return buttons.map((button, index) => (
   <button
    key={button}
    onClick={() => props.buttonClick(index)}
    style={{ background: props.activeButtonIndex === index ? "red" : "" }}>
    {button}</button>
  ));
};
let buttons = ['5%', '10%','15%','25%','50%'];



let PeoppleInput = () => {
  return (
  <input type='number' className='peopleInput'
  // onKeyUp={(e) => props.setRegex(e.target.value)}
  ></input>
  ) 
}



// const errorStyles = {
//   borderEd: {
//     border: '2px solid red'
//   },
//   textRed: {
//     color: 'red',
//   },
// };
// const noZero = new RegExp(/^[1-9]\d*$/);


export default App;