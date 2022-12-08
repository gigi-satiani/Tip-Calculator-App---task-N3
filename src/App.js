import './App.css';
import logo from './images/logo.svg'
import dollar from './images/dollar.svg'
import React, { useState } from "react";

function App() {
  const [focus, setFocus] = useState(-1);
  const [people, setPeople] = useState(1);
  const [bill, setBill] = useState(0);
  const [procent, setProcent] = useState(0);
  const [customProcent, setCustomProcent] = useState(0);
  // const [disabledBtn, setDisabledBtn] = useState(true);

  function buttonClick(clicker) {
    setFocus(clicker);
  }
  function calculatePro(index) {
    setProcent(buttons[index].percentage);
  }
  function reseter() {
    setFocus(-1)
    setPeople(1);
    setBill(0);
    setProcent(0);
    setCustomProcent(0);
  }

  const ButtonTipAmount = bill * procent / 100 / people
  const buttonTotal = bill / people + ButtonTipAmount 

  const customTiPAmount = (bill * customProcent / 100 / people);
  const customTotal = (bill / people + customTiPAmount);



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
           <InputFirst
            setBill={setBill}
            bill={bill}
          />
        </div>
        <div className='selectTipParent'>
         <span>Select Tip %</span>
         <Buttonsgroup
          buttonClick={buttonClick}
          focus={focus}
          people={people}
          calculatePro={calculatePro}
          setCustomProcent={setCustomProcent}
         />
         <CustomInput
         setFocus={setFocus}
         setCustomProcent={setCustomProcent}
         customProcent={customProcent}
         buttonTotal={buttonTotal}
         customTotal={customTotal}
         />
        </div>
       <div className='numberOfPeopleParent'>
         <span>Number of People</span>
         <span className='redAlertZero' 
          style={{display: people >= 1 ? 'none' : 'block'}}>
          Can't be zero</span>
         <PeoppleInput
          people={people}
          setPeople={setPeople}
         />
        </div>
       </form>
      </div>
{/* --------------------- */}
      <div className='secondCard'>
        <div className='tipParent'>
          <span className='amount'>Tip Amount <br/><span className='person'>/ person</span></span>
          <span className='amountValue'
          style={{fontSize: buttonTotal > 10000 ? "25px" : "" || buttonTotal > 111111111 ? "20px" : ""}}>
            <img src={dollar}></img>{Number(customTiPAmount ? customTiPAmount : ButtonTipAmount).toFixed(2)}
          </span>
        </div>
        <div className='totalParent'>
         <PText
          procent={procent}
          people={people}
          buttonTotal={buttonTotal}
          customTotal={customTotal}
          focus={focus}
         />
        </div>
          <button className='reseter' 
           onClick={reseter} 
           style={{backgroundColor: (buttonTotal, customTotal) === 0 ? '#0D686D' : ''}}
           >RESET</button>
      </div>
    </div>
   </div>
  );
}

const InputFirst = (props) => {
  function billCalculator(e) {
    // console.log(props.bill, 'props.bill')
    props.setBill(e.target.value);
  }
  return (
    <div>
      <input type="tel" className='billInput' maxLength="9"
      value={props.bill}
      onChange={(e) => billCalculator(e)}></input>
    </div>
  );
};
const Buttonsgroup = (props) => {
  return buttons.map((button, index) => (
       <button type='button'
       key={button.percentage}
       style={{backgroundColor : props.focus === index ? 'hsl(172, 67%, 45%)' : ''}}
       onClick={(e) => {
       props.buttonClick(index);
       props.calculatePro(index);
       props.setCustomProcent(0);
      }}>
      {button.label}</button>
  ));
}
const CustomInput = (props) => {
  function countProcentAge(e) {
    // console.log(e.target.value, 'customProcent')
    props.setFocus(-1)
    props.setCustomProcent(e.target.value)
  }
  return (
     <input type='number' placeholder='Custom' 
      value={props.customProcent}
      onChange={(e) => countProcentAge(e)}>
     </input>
  )
}
let PeoppleInput = (props) => {
  function peopleNumber(f) {
    props.setPeople(f.target.value);
  }
  return (
    <input type='number' className='peopleInput' value={props.people}
    onChange={(f) => peopleNumber(f)}
    style={{border: props.people <= 0 ? '2px solid red' : ''}}
    />
  ) 
}
const PText = (props) => {
  return (
    <div>
       <span className='amount'>Total <br/><span className='person'>/ person</span></span>
       <span className='amountValue'
        style={{fontSize: props.customTotal >= 10000 ? "25px" : "" ||
        props.customTotal > 111111111 ? "20px" : "" }}>
       <img src={dollar}></img>
       {Number((props.focus === -1) ? props.customTotal : props.buttonTotal).toFixed(2)}
       </span>
    </div>
  );
};
let buttons = [
  {
    label: "5%",
    percentage: 5,
    name: "a"
  },
  {
    label: "10%",
    percentage: 10,
    name: "b"
  },
  {
    label: "15%",
    percentage: 15,
    name: "c"
  },
  {
    label: "20%",
    percentage: 20,
    name: "d"
  },
  {
    label: "50%",
    percentage: 50,
    name: "e"
  }
];


export default App;