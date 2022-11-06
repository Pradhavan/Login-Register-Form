import './App.css';
import HP from "../src/Componet/HP"
import Log from "../src/Componet/Log"
import Register from "../src/Componet/Register"
import { BrowserRouter ,Routes, Route } from 'react-router-dom';

function App() {
return (
<div className="App">


<BrowserRouter>

<Routes>
  
    <Route exact path="/"  element={ <HP/>} >    </Route>
    <Route path="/login"   element={ <Log/>}  >  </Route>
    <Route path="/Register"   element={ <Register/>}  >  </Route>


</Routes>


</BrowserRouter>

</div>
);
}

export default App;
