import {Header} from "./components/layouts/header"
import {Routes,Route} from 'react-router-dom'
import{Inicio} from './components/pages/inicio'
import{UseEffect} from './components/pages/useEffect'
import {UseState} from './components/pages/useState'
import { ChangeColor } from "./components/Pages/changeColor"
import {Tweets} from "./components/Pages/tweetsGenerator"
import './App.css'
import {Provider} from './components/local/context'

function App() {

  const pages=["inicio","useEffect","ChangeColor", "useState","Tweets"]

  return (
    <Provider>
      
      <Header pages={pages}/>
      <Routes>
        <Route path="/inicio" element={<Inicio/>}/>
        <Route path="/useeffect" element={<UseEffect/>}/>
        <Route path="/usestate" element={<UseState/>}/>
        <Route path="/changecolor" element={<ChangeColor/>}/>
        <Route path="/tweets" element={<Tweets/>}/>
      </Routes>

      
    </Provider>

    
  )
}

export default App
