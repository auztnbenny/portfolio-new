import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import Login from "./components/sections/Login";
import Gallery from './components/sections/Gallery';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path='*' element={<NotFound />} />
        
      </Routes>
    </>
  )
}

export default App
