import { React,  useEffect,  useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import DogEdit from "./Pages/DogEdit"
import DogIndex from "./Pages/DogIndex"
import DogNew from "./Pages/DogNew"
import DogShow from "./Pages/DogShow"
import Home from "./Pages/Home"
import NotFound from "./Pages/NotFound"
import './App.css';

const App = () => {
  const [dogs, setDogs] = useState([])

  useEffect(() => { readDog() }, [])

  const readDog = () => {
    fetch("http://localhost:3000/dogs")
    .then(response => response.json())
    .then(payload => {
      setDogs(payload)
    })
    .catch((error) => console.log(error))
  }
  const createDog = (dog) => {
    fetch("http://localhost:3000/dogs", {
      body: JSON.stringify(dog),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => response.json())
    .then((payload) => readDog())
    .catch((errors) => console.log("Dog create errors:", errors))
  }

  const updateDog = (dog, id) => {
    fetch(`http://localhost:3000/dogs/${id}`, {
      // converting an object to a string
      body: JSON.stringify(dog),
      // specify the info being sent in JSON and the info returning should be JSON
      headers: {
        "Content-Type": "application/json"
      },
      // HTTP verb so the correct endpoint is invoked on the server
      method: "PATCH"
    })
      .then(response => response.json())
      .then((payload) => readDog())
      .catch((errors) => console.log("Dog update errors:", errors))
  }

   const deleteDog = (id) => {
    fetch(`http://localhost:3000/dogs/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
      .then((response) => response.json())
      .then((payload) => readDog())
      .catch((errors) => console.log("delete errors:", errors))
  }
 
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dogindex" element={<DogIndex dogs={dogs} />} />
        <Route path="/dogshow/:id" element={<DogShow dogs={dogs} deleteDog={deleteDog} />} />
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
