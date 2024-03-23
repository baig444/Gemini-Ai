import Sidebar from "./components/Sidebar/Sidebar"
import "./App.css"
import Main from "./components/Main"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Signin from "./components/Signin"
const App = () => {
  return (
    <div className="flex h-screen relative pb-[15vh]">
      <Sidebar />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
