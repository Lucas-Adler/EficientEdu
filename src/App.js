import React from "react"

import './index.css';
import Navbar from './Content/Navbar.js'
import Home from './Content/Home'
import Sim from './Content/eficiedu'
import Contato from './Content/Contato'
// import RoadMap from "./Content/RoadMap";



 function App() {
   return (
     <div className="snap-y snap-mandatory overflow-scroll h-screen bg-[#f0F0F0]">
     
         <Navbar/>
         <Home />
         <Sim />
         <Contato />
         
     
     </div>
   );
 }

 export default App;
