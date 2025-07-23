import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer' 
import Home from './components/Page1'
import Detailpage from './components/Page2'


function App() {
  return (
    <Router>
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/detail' element={<Detailpage/>} />
      </Routes>
      <Footer/>
    </div>
      
    </Router>
  )
}

export default App
