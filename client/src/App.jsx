import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import Header from './components/Header'
import SouthprimeFlats from './pages/SearchByDeveloper/SouthprimeFlats'
import Tial from './pages/Tial'
import WVTowers from './pages/SearchByDeveloper/WVTowers'
import EmeraldEstate from './pages/SearchByDeveloper/EmeraldEstate'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/developer/the-southprime-flats" element={<SouthprimeFlats />}/>
      <Route path="/developer/wv-towers" element={<WVTowers />}/>
      <Route path="/developer/emerald-estate" element={<EmeraldEstate />}/>
      <Route path="/search" element={<Search />}/> 
      <Route path="/test-ui" element={<Tial/>}/>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App