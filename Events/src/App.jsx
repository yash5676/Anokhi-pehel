 import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import './App.css'

export default function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
   <Route
   path="/"
   element={
  <Homepage/>
    
   }
   />
   </Routes>
   </BrowserRouter>
   </>
  )
}