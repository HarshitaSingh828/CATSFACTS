import logo from './logo.svg';
import './App.css';
import Axios from "axios";
import { useState ,useEffect} from 'react';
// fetch("https://catfact.ninja/fact").then((res)=>res.json()).then((data)=>{
//         console.log(data);
// });
function App() {
//   const myStyle={
//     backgroundImage: 
// "url('https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80')",

// };
const myStyle = {
  backgroundImage: "url('https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=868&q=80')",
  backgroundSize: 'cover',
 
  height: '96vh'
};

  const [catfact,setCatFact] = useState("");
//   fetch("https://catfact.ninja/fact").then((res)=>res.json()).then((data)=>{
//         console.log(data);
// });
   
    // Axios.get("https://catfact.ninja/fact").then((res)=>{
      // console.log(res.data);
    // });

    // Axios.get("https://catfact.ninja/fact").then((res)=>{
    //   setCatFact(res.data.fact);
    // });

    useEffect(()=>{
      Axios.get("https://catfact.ninja/fact").then((res)=>{
          setCatFact(res.data.fact);
        });
    },[]);
     

    const fetchdata = () =>{
      Axios.get("https://catfact.ninja/fact").then((res)=>{
        setCatFact(res.data.fact);
      });
    }; 
  return (
    <div className="App">
     {/* <button>Generate Cats Facts</button> */}
      <div style={myStyle}>
       
     <button onClick={fetchdata} className='btn'>Generate Cats Facts</button>
      <p className='color'>{catfact}</p>
      </div>
     
    </div>
  );
}

export default App;


