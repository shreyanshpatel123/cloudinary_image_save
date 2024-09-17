import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./Home";
import Layout from "./Layout";
import Insert from "./Insert";
import Display from "./Display";


const App=()=>{
  return(<>
       <BrowserRouter>
        <Routes>
        <Route path="/" element={< Layout/>}>
        <Route path="Home" element={< Home/>}/>
         <Route path="Insert" element={<Insert/>}  />
         <Route path="Display" element={<Display/>}  />
          </Route>
        </Routes>
       </BrowserRouter>

  </>)
}

export  default App;