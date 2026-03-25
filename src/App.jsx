import Hello from './FunctionalComponent'
import { Hello as Greeting, Bye } from "./NamedExport";
import Routing from './Routing';
import NestedRouting from './NestedRouting';

function App() {

  return (
 <div>

{/* 
  <Greeting name="Zain" time="Evening" />
  <Bye name="Zain" />

  <Greeting name="Usman" time="Morning" />
  <Bye name="Usman" />



  <Hello/>



 <Routing/> */}
  
  <NestedRouting/>
 </div>
  )
}

export default App
