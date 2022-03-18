import { HeaderComponents } from "./Components/HeaderComponents/HeaderComponents";
import {Aboutus} from "./Components/BodyComponent/Aboutus"
import {Portfolio} from "./Components/BodyComponent/Portfolio"
import { Contact } from "./Components/BodyComponent/Contact"
import { Footer } from "./Components/BodyComponent/Footer"

function App() {
  return (
    <div className="App">
      <HeaderComponents />
      <Aboutus />
      <Portfolio />
      <Contact />
      <Footer/>
    </div>
  );
} 

export default App;
