import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './layout/NavBar'
import RootLayout from './layout/RootLayout'
import Home from './components/Home'
import { Music } from './components/Music'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<RootLayout/>}>
          <Route path='/' element={<Home/>}/>
          {/* <Route path='/#music' element={<Music/>}/> */}
        </Route>
      </Routes>
    </>
  )
}

export default App
