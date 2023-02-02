import React from 'react'
import { useParams } from "react-router-dom"
import { Card, CardBody, CardTitle, CardSubtitle, Button, CardText } from "reactstrap"
import { NavLink } from "react-router-dom"

const DogShow = ({ dogs }) => {
    const { id } = useParams()
    let currentDog = dogs.find((dog) => dog.id === +id)
  return(
    <main className="dog-show-cards">
        {currentDog && (
            <>
                <Card
                    body
                    color="primary"
                    inverse
                    outline
                    style={{
                        width: '18rem'
                    }}
                    >
                  <img
                    alt={`profile of a dog named ${currentDog.name}`}
                    src={currentDog.image}
                />
                <CardBody>
                <CardTitle tag="h5">
                   {currentDog.name}
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    >
                    {currentDog.enjoys}
                </CardSubtitle>
                <CardText>
                   Age: {currentDog.age}    
                </CardText>
                <Button>
                    Button
                </Button>
                </CardBody>
                </Card>
            </>
        )}
    </main>
  ) 
}

export default DogShow;




    