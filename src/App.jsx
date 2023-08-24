import './index.css';
import Navbar from './Content/Navbar'
import Home from './Content/Home'
import Sim from './Content/eficiedu'
import Contato from './Content/Contato'
import Questionario from "./Content/Questionário";




 function App() {
   return (
     <div className="snap-y snap-mandatory overflow-scroll h-full bg-[#f0F0F0] scroll-smooth ">
     
         <Navbar/>
         <Home />
         <Sim />
         <Questionario/>
         <Contato />
         
        
         
     
     </div>
   );
 }

 export default App;

