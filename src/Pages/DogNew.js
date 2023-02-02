import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { useNavigate } from "react-router-dom"


const DogNew = ({ createDog }) => {
  const navigate = useNavigate()
  const [newDog, setNewDog] = useState({
    name: "",
    age: "",
    enjoys: "",
    image: ""
  })
  const handleChange = (e) => {
    setNewDog({ ...newDog, [e.target.name]: e.target.value })
  }
  const handleSubmit = () => {
    createDog(newDog)
    navigate("/dogindex")
  }

  return(
    <> <h1>Add a New Dog!</h1>
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" onChange={handleChange} value={newDog.name} />
        </FormGroup>
      </Form>
      <Form>
        <FormGroup>
          <Label for="age">Age</Label>
          <Input type="text" name="age" onChange={handleChange} value={newDog.age}  />
        </FormGroup>
      </Form>
      <Form>
        <FormGroup>
          <Label for="enjoys">Enjoys</Label>
          <Input type="text" name="enjoys" onChange={handleChange} value={newDog.enjoys}  />
        </FormGroup>
      </Form>
      <Form>
        <FormGroup>
          <Label for="image">Image</Label>
          <Input type="text" name="image" onChange={handleChange} value={newDog.image}  />
        </FormGroup>
      </Form>
      <div>
        <Button onClick={handleSubmit} name="submit">
          Submit Dog
        </Button>
      </div>
    </>
    )
}

export default DogNew;