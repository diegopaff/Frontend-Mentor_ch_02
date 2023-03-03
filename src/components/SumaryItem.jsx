import React, { useEffect, useState } from 'react';


const SumaryItem = ( items ) => {

        const [color, setColor] = useState('');

        useEffect(() => {
            switch(items.items.category){
                case 'Reaction':
                    setColor('light-red');
                    break;
                case 'Memory':
                    setColor('yellow');
                    break;
                case 'Verbal':
                    setColor('green');
                    break;
                case 'Visual':
                    setColor('purple')
            }
        },[]);

  return (
    
    <li className={`flex flex-row justify-between p-5 color-${color} rounded-2xl`}> 
        <div className={`flex gap-4 text-lg text-${color} `}>
            <img src={`${items.items.icon}`} className='h-[25px]'></img> 
            <p> {`${items.items.category}`} </p> 
        </div>
        <p className=' color-lavender'> <span className='font-bold mr-1 text-lg'>{`${items.items.score}`}</span>  / 100</p> 
    </li>
  )
}

export default SumaryItem;