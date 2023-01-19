import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Experience from "./components/Experince";
import Contact from "./components/Contact";

function App() {
  return (
   <div className="App">
    <>
       <Navbar/>
       <Home/>
       <About />
       <Experience/>
       <Contact/>
    </>
   </div>
  );
}

export default App;
