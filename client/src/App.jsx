import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Property from './pages/Property'
import Search from './pages/Search'


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/property" element={<Property />}/> 
      <Route path="/search" element={<Search />}/> 
    </Routes>
    </BrowserRouter>
    
  )
}

export default App