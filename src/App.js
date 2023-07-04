import './App.css';
import React,{useState} from 'react';

function App() {
  const [result,setResult] = useState(0);
  const [input1,setInput1] = useState('')
  const [input2,setInput2] = useState('')
  const [operation,setOperation] = useState('');

  const [activeItem, setActiveItem] = useState('');


  const handleOperation = (e) => {
    setActiveItem(e.target.value);
    setOperation(e.target.value);
  }

  const handleFirstInputValue = (e) => {
    setInput1(e.target.value)
  }
  const handleSecondInputValue = (e) => {
    setInput2(e.target.value)
  }

  const handleSingleDelete1 = () => {
    const newArr1 = input1.split('');
    newArr1.pop();
    const newStr1 = newArr1.join('');
    setInput1(newStr1)
  }

  const handleSingleDelete2 = () => {
    const newArr2 = input2.split('');
    newArr2.pop();
    const newStr2 = newArr2.join('');
    setInput2(newStr2)
  }


  const handleResult = () => {
    if(input1==='' || input2===''){
      alert('please fill all the input box')
      return;
    }
    if(operation===''){
      alert('please select the operation which you want to perform')
      return;
    }
    let ans = 0;
    if(operation==='+'){
      ans = parseInt(input1) + parseInt(input2);
    }
    else if(operation==='-'){
      ans = parseInt(input1) - parseInt(input2);
    }
    else if(operation==='*'){
      ans = parseInt(input1) * parseInt(input2);
    }
    else if(operation==='/'){
      ans = parseInt(input1) / parseInt(input2);
    }
    else{
      ans = parseInt(input1) % parseInt(input2);
    }
    setResult(ans);
  }

  const handleReset = () => {
    setInput1('')
    setInput2('')
    setOperation('')
    setResult(0)
    setActiveItem('')
  }
  return (
    <>
    <div className='calculator'>
      <div className='inputs'>
        <label className='labels' htmlFor='input1'>Enter first input:</label>
        <input type='number' id='input1' onChange={handleFirstInputValue} value={input1} />
        <button className='singleDelete' onClick={handleSingleDelete1}>Delete</button>
        <label className='labels' htmlFor='input2'>Enter second input:</label>
        <input type='number' id='input2' onChange={handleSecondInputValue} value={input2} />
        <button className='singleDelete'onClick={handleSingleDelete2}>Delete</button>
      </div>
      <div className='buttons'>
        <button className={activeItem === '+' ? 'active' : 'not'} value='+' onClick={handleOperation}>+</button>
        <button className={activeItem === '-' ? 'active' : 'not'} value='-' onClick={handleOperation}>-</button>
        <button className={activeItem === '*' ? 'active' : 'not'} value='*' onClick={handleOperation}>*</button>
        <button className={activeItem === '/' ? 'active' : 'not'} value='/' onClick={handleOperation}>/</button>
        <button className={activeItem === '%' ? 'active' : 'not'} value='%' onClick={handleOperation}>%</button>
        <button value='=' onClick={handleResult}>=</button>
      </div>
      <button className='btn' onClick={handleReset}>Reset</button>
      <h1>Result: {result}</h1>
    </div>
    </>
  );
}

export default App;
