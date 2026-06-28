// functional component
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Homeclass from "./Classcomponents/Homeclass";
import Contactclass from "./Classcomponents/Contactclass";
import Greetings from "./Greetings";
function App() {
  let name= "SHEETAL";
  let age= 22;
  return(
    <div>
      <h1>Hello World!!</h1>
      <h3>Welcome to react learning</h3>
      <Home/>
      <Homeclass/>
      <About/>
      <Contact/>
      <Contactclass/>
      <Greetings fn={name} age={age} favcolor="Crimson"/>
    </div>
  );
}

export default App