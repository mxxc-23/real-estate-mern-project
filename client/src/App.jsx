import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import SouthprimeFlats from './pages/SearchByDeveloper/SouthprimeFlats'
import Tial from './pages/Tial'
import WVTowers from './pages/SearchByDeveloper/WVTowers'
import EmeraldEstate from './pages/SearchByDeveloper/EmeraldEstate'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import AdminView from './pages/AdminView'

const App = () => {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Home />}/>

      <Route path="/developer/the-southprime-flats" element={<SouthprimeFlats />}/>
      <Route path="/developer/wv-towers" element={<WVTowers />}/>
      <Route path="/developer/emerald-estate" element={<EmeraldEstate />}/>

      <Route path="/search" element={<Search />}/> 

      <Route path="/test-ui" element={<Tial/>}/>

      <Route path="/admin/signup" element={<SignUp/>}/>
      <Route path="/admin/signin" element={<SignIn/>}/>
      <Route path="/admin/dashboard" element={<AdminView/>}/>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App