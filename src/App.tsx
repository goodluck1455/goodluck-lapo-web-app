
import MainPage from "./assets/Components/MainPage"
import {HashRouter as BrowserRouter} from 'react-router-dom';
import ScrollToTop from "./assets/Components/ScrollToTop";



function App() {
 

  return (
    <>
 <BrowserRouter>
    <ScrollToTop />
     <MainPage /> 
</BrowserRouter>
      
    </>
  )
}

export default App
