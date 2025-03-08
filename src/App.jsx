
import "./App.css";
import Header from "./componets/Header";
import About from "./componets/About";
import ProjectList from "./componets/ProjectList";
import Contact from "./componets/Contact";
import Footer from "./componets/Footer";

function App() {

  return (
    <div className="App">
      
      <Header/>
      <About/>
      <ProjectList/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
