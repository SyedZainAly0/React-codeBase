import Hello from './FunctionalComponent'
import { Hello as Greeting, Bye } from "./NamedExport";
import Routing from './Routing';
import NestedRouting from './NestedRouting';
import Form from './customhook'
import UserCard from './Props';
import CounterApp from './useState';
import User from './useContext';

function App() {

  return (
 <div>


  {/* <Greeting name="Zain" time="Evening" />
  <Bye name="Zain" />
  <Greeting name="Usman" time="Morning" />
  <Bye name="Usman" />
  <Hello/>
  <Routing/> 
  <NestedRouting/>
  <Form/>
  <CounterApp/> 
  <UserCard name="Alice" role="Developer" />
  <UserCard name="Bob" role="Designer" />  */}
 
 <User/>


 </div>
  )
}

export default App
