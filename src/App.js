// import logo from './logo.svg'; 
// import React, {useState} from 'react';
// import './App.css'; 
// import Style from './Components/Style.css'  
import Events from "./Components/Events";

function App() {    

  // let time = new Date (). toLocaleTimeString();  
  
  // const [ctime, setCtime] = useState (time);

  // const UpdateTime = () => {  
  //   time = new Date (). toLocaleTimeString(); 
  //   setCtime(time);
  // };

  // setInterval(UpdateTime, 1000);
  return (
    <div>
     {/* <h1 className='heading'>{ctime}</h1>
       <button onClick={UpdateTime} className='M'>CLICK ME</button> */} 
      <Events></Events> 
    </div>
  );
}

export default App;
