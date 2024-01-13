import Business from "./components/Business"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Technology from "./components/Technology"
import Home from "./components/Home"
import Entertainment from "./components/Entertainment"
import Sports from "./components/Sports"

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes >
          <Route path="/spotlight/business" element={<Business />}/>
          <Route path="/spotlight/technology" element={<Technology />}/>
          <Route path="/spotlight" element={<Home />}/>
          <Route path="/spotlight/entertainment" element={<Entertainment />}/>
          <Route path="/spotlight/sport" element={<Sports />}/>
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App