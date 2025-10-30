import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  return (
    <>
    {/* defining routes */}
    <Router basename="/oremlo-dental-clinics-near-you">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<div>Services Page</div>} />
        <Route path="/contact" element={<div>Contact Us Page</div>} />
      </Routes>
    </Router>
    </>

    
  )
}

export default App
