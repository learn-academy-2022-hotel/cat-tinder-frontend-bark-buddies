import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { useNavigate, useParams } from "react-router-dom"

const DogEdit = ({ dogs, updateDog }) => {
  const { id } = useParams()
  let currentDog = dogs?.find((dog) => dog.id === +id)

  const [editDog, setEditDog] = useState({
    name: currentDog.name,
    age: currentDog.age,
    enjoys: currentDog.enjoys,
    image: currentDog.image
  })
  const handleChange = (e) => {
    setEditDog({ ...editDog, [e.target.name]: e.target.value })
  }
  const navigate = useNavigate()
  const handleSubmit = () => {
    updateDog(editDog, currentDog.id)
    navigate("/dogindex")
  }
  return(
    <> 
    <h2>Edit Dog Profile</h2>
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" onChange={handleChange} value={editDog.name} />
        </FormGroup>
      </Form>
      <Form>
        <FormGroup>
          <Label for="age">Age</Label>
          <Input type="text" name="age" onChange={handleChange} value={editDog.age}  />
        </FormGroup>
      </Form>
      <Form>
        <FormGroup>
          <Label for="enjoys">Enjoys</Label>
          <Input type="text" name="enjoys" onChange={handleChange} value={editDog.enjoys}  />
        </FormGroup>
      </Form>
      <Form>
        <FormGroup>
          <Label for="image">Image</Label>
          <Input type="text" name="image" onChange={handleChange} value={editDog.image}  />
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

export default DogEdit;