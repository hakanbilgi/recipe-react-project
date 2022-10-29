import {Routes,Route} from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import Home from "../pages/home/Home";

const AppRouter = () => {
  return (

<>
<Routes>
  <Route path="/login" element={<PrivateRouter/>}>
    <Route path="/" element={<Home/>}/>
  </Route>
</Routes>
</>

  )
}

export default AppRouter