import React from 'react'
import { useParams } from "react-router-dom"
import { Card, CardBody, CardTitle, CardSubtitle, Button, CardText } from "reactstrap"
import { NavLink } from "react-router-dom"
import '../App.css';

const DogShow = ({ dogs }) => {
    const { id } = useParams()
    let currentDog = dogs?.find((dog) => dog.id === +id)
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
                    className='profilePic'
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
                <div className="btn">
                    <NavLink to={`/dogedit/${currentDog.id}`} className="nav-link">
                        Edit Dog Profile
                    </NavLink>
                    <NavLink to="/dogindex/" className="nav-link">
                        Delete Dog Profile
                    </NavLink>
                </div>
                </CardBody>
                </Card>
            </>
        )}
    </main>
  ) 
}

export default DogShow;




    