import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home/Home'
import Navbar from './Navbar/Navbar'
import "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import About from './About/About'
import Explore from './Explore/Explore'
import Life from './Life/Life'
import Contact from './Contact/Contact'
import Events from './Events/Events'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path={'/about'} element={<About/>} />
          <Route path={'/explore'} element={<Explore/>} />
          <Route path={'/life'} element={<Life/>}/>
          <Route path={'/contact'} element={<Contact/>}/>
          <Route path={'/events'} element={<Events/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
