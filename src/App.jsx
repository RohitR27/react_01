import React, { useState } from 'react'




const App = () => {
  const [counter, setCounter] = useState (0);


  return (
    <div>
      <h1 className='text-3xl font-bold  text-red-500'>{counter}</h1>
      <button className='border border-slate-700 rounded-sm' onClick={() => setCounter (counter + 1)}>
        Click Me
      </button>
      <button className='ml-2 border border-slate-700 rounded-sm' onClick={() => setCounter(0)}>  Reset </button>

    </div>
  )
}

export default App
