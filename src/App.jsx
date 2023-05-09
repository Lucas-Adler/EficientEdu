// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import React from "react"

import './index.css';
import Navbar from './Content/Navbar'
import Home from './Content/Home'
import Sim from './Content/eficiedu'
import Contato from './Content/Contato'
import Questionario from "./Content/Questionário";




 function App() {
   return (
     <div className="snap-y snap-mandatory overflow-scroll h-screen bg-[#f0F0F0] scroll-smooth">
     
         <Navbar/>
         <Home />
         <Sim />
         <Questionario/>
         <Contato />
         
        
         
     
     </div>
   );
 }

 export default App;

