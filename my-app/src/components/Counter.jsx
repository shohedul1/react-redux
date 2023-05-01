import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrementAction, incrementAction, resetAction } from '../services/actions/counterAction';

function Counter() {

    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();
    
    const handleIncrement = () =>{
        dispatch(incrementAction())
    };

    const handleDecrement = () =>{
        dispatch(decrementAction())
    };

    const handleReset = () =>{
        dispatch(resetAction())
    }


  return (
    <div className='text-center'>
        <h1>Count:{count}</h1>
        <button className='btn btn-outline-primary ms-1' onClick={handleIncrement}>INCREMENT</button>
        <button className='btn btn-outline-danger ms-1' onClick={handleReset}>Reset</button>
        <button className='btn btn-outline-info ms-1' onClick={handleDecrement}>DECREMENT</button>

    
    </div>
  )
}

export default Counter;