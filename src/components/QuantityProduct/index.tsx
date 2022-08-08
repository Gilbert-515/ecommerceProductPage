import { useState } from 'react';
import iconPlus from '../../assets/icon-plus.svg';
import iconMinus from '../../assets/icon-minus.svg';

export function QuantityProduct () {
  const [count, setCount] = useState(0);

  return (
    <div className='flex bg-gray-50 rounded-xl justify-between p-4 w-full'>
      <button className='text-orange-500 text-xl font-bold px-2' onClick={ () => setCount(prev => prev > 0 ? prev - 1 : 0) }>
      <img src={ iconMinus } alt='icone de mais' />
      </button>

      <main className='font-bold'> { count } </main>

      <button className='text-orange-500 text-xl font-bold px-2' onClick={ () => setCount(prev => prev + 1) }>
        <img src={ iconPlus } alt='icone de mais' />
      </button>
    </div>
  );
}