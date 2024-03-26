import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Property from './pages/Property'


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/property" element={<Property />}/> 
    </Routes>
    </BrowserRouter>
  )
}

export default App