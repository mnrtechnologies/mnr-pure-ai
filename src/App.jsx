import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BeamInspiredPage from "./components/layout/BeamInspiredPage";
import CalendlyPage from "./components/layout/calendly/calendly";

function App() {
  return (
  <Router>
      <Routes>
       <Route path="/" element={<BeamInspiredPage />} />  
        <Route path="/book" element={<CalendlyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
