
import "./App.css";
import LandingPage from "./screens/LandingPage/LandingPage";
import About from "./screens/About/About";
import Lang from "./components/hindi/hindi";
import Col from "./screens/College/College";
// import Form from "./firebase/form";
import Auth  from "./Firebase/auth";
import {Routes,Route} from "react-router-dom";
function App() {
  return (
    <div >
      <Routes>
           <Route path="/" element={<LandingPage />} />
           <Route path="/about" element={<About />} />
           <Route path="/lang" element={<Lang />} />
           <Route path="/college" element={<Col />} />
           <Route path="/auth" element={<Auth />} />
           {/* <Route path="/form"  element={<Form />} /> */}
      </Routes>
    </div>
  ); 
}

export default App;
