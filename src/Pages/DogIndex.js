import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"
import { NavLink } from "react-router-dom"

const DogIndex = ({ dogs }) => {
  return(
    <main className = "index-cards">
        {dogs?.map((dog, index) => {
            return (
                <Card
                    color="light"
                    style={{
                        width: '18rem'
                    }}
                    key={index}
                    >
                    <img className = 'profile-images'
                        alt="Dog" src={dog.image} />
                    <CardBody>
                        <CardTitle tag="h5">{dog.name}</CardTitle>
                        <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                        >
                        Age: {dog.age}
                        </CardSubtitle>
                        <NavLink to={`/dogshow/${dog.id}`} className="nav-link">See More Details</NavLink>
                    </CardBody>
                    </Card>
            )
        })}
    </main>
  )
}



export default DogIndex;

