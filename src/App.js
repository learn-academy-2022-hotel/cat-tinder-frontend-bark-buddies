import { React,  useState } from "react"
import { Routes, Route } from "react-router-dom"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import DogEdit from "./Pages/DogEdit"
import DogIndex from "./Pages/DogIndex"
import DogNew from "./Pages/DogNew"
import DogShow from "./Pages/DogShow"
import Home from "./Pages/Home"
import NotFound from "./Pages/NotFound"
import mockDogs from "./mockDogs"
import './App.css';

const App = () => {
  const [dogs, setDogs] = useState(mockDogs)
  const createDog = (dog) => {
  }
  const updateDog = (dog, id) => {
    console.log("dog:", dog)
    console.log("id:", id)
  }
 
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dogindex" element={<DogIndex dogs={dogs} />} />
        <Route path="/dogshow/:id" element={<DogShow dogs={dogs}/>} />
        <Route path="/dognew" element={<DogNew createDog={createDog} />} />
        <Route 
        path="/dogedit/:id"
        element={<DogEdit dogs={dogs} updateDog={updateDog} />} 
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
