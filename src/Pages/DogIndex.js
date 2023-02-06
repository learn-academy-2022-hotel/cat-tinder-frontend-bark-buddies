import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink } from "reactstrap"
import { NavLink } from "react-router-dom"
// Row from reactstrap set height and widths or give it auto, but with auto the container (card-div) has to have restrictions
const DogIndex = ({ dogs }) => {
  return(
    <main className = "index-cards">
        {dogs?.map((dog, index) => {
            return (
                    <Card
                    className="indCard"
                    body
                    color="dark"
                    outline
                    style={{
                        width: '18rem'
                    }}
                    key={index}
                    >
                    <CardBody className="cardBody">
                        <CardTitle tag="h5">
                        {dog.name}
                        </CardTitle>
                        <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                        >
                        Age: {dog.age}
                        </CardSubtitle>
                    </CardBody>
                    <img
                        className = 'profile-images'
                        alt="Dog" src={dog.image} 
                    />
                    <CardBody>
                        <NavLink to={`/dogshow/${dog.id}`} className="nav-link">See More Details</NavLink>
                    </CardBody>
                    </Card>
            //     <Card  className="cardBody"
            //         color="light"
            //         style={{
            //             width: '5rem'
            //         }}
            //         key={index}
            //         >
            //         <img className = 'profile-images'
            //             alt="Dog" src={dog.image} />
            //         <CardBody>
            //             <CardTitle tag="h5">{dog.name}</CardTitle>
            //             <CardSubtitle
            //             className="mb-2 text-muted"
            //             tag="h6"
            //             >
            //             Age: {dog.age}
            //             </CardSubtitle>
            //             <NavLink to={`/dogshow/${dog.id}`} className="nav-link">See More Details</NavLink>
            //         </CardBody>
            //         </Card>
            // )
       )})}
    </main>
  )
}




export default DogIndex;

