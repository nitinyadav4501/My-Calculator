import { useState } from "react"

function App() {
  const [display,setDisplay] = useState('')

  const displayValue = (value)=>{
    setDisplay((prev)=>prev+value)
  }

  const clearDisplay = ()=>{
    setDisplay('')
  }

  const calculate = () => {
    try {
      const result = new Function('return ' + display)();
      setDisplay(result.toString());
    } catch (error) {
      setDisplay("error");
    }
  }

  return (
    <>
      <div className="mt-52">
        <div className="border-2 bg-blue-300 border-gray-400 w-fit mx-auto rounded-xl">
          <div >
            <input value={display} className="shadow-lg border-2 mt-5 py-3 m-3 px-2 border-gray-300 outline-none rounded-xl w-80" type="text" readOnly />
          </div>
          <div className="grid grid-cols-4 pb-4 space-y-2 p-5">
            <button className="border-2 mx-2 px-3 p-2 rounded-xl text-white bg-gray-500" onClick={clearDisplay}>C</button>
            <button className="border-2 mx-2 px-3 p-2 rounded-xl bg-gray-200" onClick={()=>displayValue('7')}>7</button>
            <button className="border-2 mx-2 px-3 p-2 rounded-xl bg-gray-200" onClick={()=>displayValue('8')}>8</button>
            <button className="border-2 mx-2 px-3 p-2 rounded-xl bg-gray-200" onClick={()=>displayValue('9')}>9</button>
            <button className="border-2 mx-2 px-3 p-2 rounded-xl bg-gray-200" onClick={()=>displayValue('/')}>/</button>
            <button className="border-2 mx-2 px-3 p-2 rounded-xl bg-gray-200" onClick={()=>displayValue('4')}>4</button>
            <button className="border-2 mx-2 px-3 p-2 rounded-xl bg-gray-200" onClick={()=>displayValue('5')}>5</button>
            <button className="border-2 mx-2 px-3 p-2 rounded-xl bg-gray-200" onClick={()=>displayValue('6')}>6</button>
            <button className="border-2 mx-2 px-3 p-2 rounded-xl bg-gray-200" onClick={()=>displayValue('*')}>x</button>
            <button className="border-2 mx-2 px-3 p-2 rounded-xl bg-gray-200" onClick={()=>displayValue('1')}>1</button>
            <button className="border-2 mx-2 px-3 p-2 rounded-xl bg-gray-200" onClick={()=>displayValue('2')}>2</button>
            <button className="border-2 mx-2 px-3 p-2 rounded-xl bg-gray-200" onClick={()=>displayValue('3')}>3</button>
            <button className="border-2 mx-2 px-3 p-2 rounded-xl bg-gray-200" onClick={()=>displayValue('-')}>-</button>
            <button className="border-2 mx-2 px-3 p-2 rounded-xl bg-gray-200" onClick={()=>displayValue('0')}>0</button>
            <button className="border-2 mx-2 px-3 p-2 rounded-xl bg-gray-200" onClick={()=>displayValue('00')}>00</button>
            <button className="border-2 mx-2 px-3 p-2 rounded-xl bg-gray-200" onClick={()=>displayValue('.')}>.</button>
            <button className="border-2 mx-2 px-3 p-2 rounded-xl bg-gray-200" onClick={()=>displayValue('+')}>+</button>
            <button className="border-2 mx-2 px-6 p-2 rounded-xl bg-blue-500 text-white" onClick={calculate}>=</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
