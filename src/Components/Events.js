import React, {useState} from 'react';
import './Style.css';

function Events() { 
   const purple = '#8e44ad';
   const [bg, setBg] = useState(purple);
   const [name, setName] = useState('CLICK ME')
   const bgChange = () => { 
     let newBg = 'red';    
     setBg(newBg);  
     setName('AWESOME!! ❤️');
   };


  return (
    <div style={{ backgroundColor: bg}}  className='container'>
      <button className='M' onClick={bgChange}>{name}</button>
    </div>
  );
}

export default Events;
