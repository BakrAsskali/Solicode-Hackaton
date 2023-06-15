import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasicTable  from "./pages/dashbord" ;



export const App = ()=>(
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<BasicTable/>}>
    </Route>
   </Routes>
   </BrowserRouter>
   
)


