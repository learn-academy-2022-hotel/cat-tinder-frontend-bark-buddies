import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, Button, Row, Col } from "reactstrap"
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

        <Form className="createForm">
          <Row>
            <Col md={2}>
          <FormGroup>
            <Label for="name">
              Name:
            </Label>
            <Input
              name="name"
              type="text"
              placeholder="Name"
              onChange={handleChange} 
              value={newDog.name}
              />
          </FormGroup>
              </Col>
          </Row>
          <Row>
          <FormGroup>
          <Label for="age">
              Age:
            </Label>
            <Input
              name="age"
              type="text"
              placeholder="How old are you?"
              onChange={handleChange} 
              value={newDog.age}
            />
          </FormGroup>
          </Row>
          <Row>
          <FormGroup>
          <Label for="enjoys">
              Enjoys:
            </Label>
            <Input
              name="enjoys"
              type="text"
              placeholder="What do you enjoy?"
              onChange={handleChange} 
              value={newDog.enjoys}
            />
          </FormGroup>
          </Row>
          <Row>
          <FormGroup>
          <Label for="image">
              Image URL:
            </Label>
            <Input
              name="image"
              type="text"
              placeholder="Image URL"
              onChange={handleChange} 
              value={newDog.image}
            />
          </FormGroup>
          </Row>
        </Form>
      <div>
        <Button className="submitBtn" onClick={handleSubmit} name="submit">
          Submit Dog
        </Button>
      </div>
    </>
    )
}




export default DogNew;