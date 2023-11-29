import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, incrment, reset } from '../redux/counterSlice'

function Counter() {
  //hook to dispatch functions in actions
  const [range,setRange]=useState("")
  const dispatch = useDispatch()
  //component can access the state using useSelector hook
  const count = useSelector((state) => state.counter.value)
  console.log(range);
  return (
    <>
      <div className='d-flex align-items-center justify-content-center w-100 mt-5 flex-column'>
          <h1 style={{fontSize:'100px'}}>{count}</h1>
          <div className='mt-3'>
            <button onClick={()=>dispatch(decrement(Number(range)))} className='btn btn-warning p-4 me-3'>Decrement</button>
            <button onClick={()=>dispatch(reset())} className='btn btn-danger p-4 me-3'>Reset</button>
            <button onClick={()=>dispatch(incrment(Number(range)))} className='btn btn-success p-4 me-3'>Increment</button>
          </div>
      </div>
      <div className='mt-5'>
        <input className='form-control' placeholder='Enter the range' required onChange={(e)=>setRange(e.target.value)} type="text" />
      </div>
    </>
  )
}

export default Counter