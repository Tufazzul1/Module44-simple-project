
import './App.css'
import LineChart from './components/LineChart/LineChart'
// import Nav from './components/Nav/Nav'
import NavBar from './components/NavBar/NavBar' 
import Phones from './components/Phones/Phones'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {
 

  return (
    <>
      <NavBar></NavBar>
      {/* <Nav></Nav> */}
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
     
      
    </>
  )
}

export default App
