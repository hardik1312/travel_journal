import Navbar from './components/Navbar'
import Main from './components/Main'
import data from './data'

function App(){

  const mainData = data.map(element=>{
    return(
      <Main 
      key={element.id}
      element={element}/>
    )
  })
  return(
    <div>
      <Navbar />
      {mainData}
    </div>
  )
}

export default App;
