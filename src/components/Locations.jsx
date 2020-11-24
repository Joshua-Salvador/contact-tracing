import React from 'react'
import "./Locations.css"
import Location from "./Location"

//Bootstrap Components
import {Container, Row, Col} from 'react-bootstrap';

function Locations() {
  const locations = [
    {
    name: "McDonalds",
    address: "IT Park, Lahug, Cebu City", 
    capacity: 30,
    count: 15,
    id: 0
    },
    {
    name: "Jollibee",
    address: "Ayala, Cebu City", 
    capacity: 30,
    count: 15,
    id: 1
    },
    {
    name: "Pizza Hut",
    address: "Sm Seaside, SRP, Cebu City", 
    capacity: 30,
    count: 15,
    id: 2
    },
    {
    name: "138 Mall",
    address: "Colon, Cebu City", 
    capacity: 30,
    count: 15,
    id: 3
    },
  ]

  return (
    <div className="container">
      <Container fluid="true">
        <Row>
            {locations.map((location) => 
              <Col key={location.id}>
                <Location key={location.id} name={location.name} address={location.address} />
              </Col>
            )}
        </Row>
       
      </Container>
    </div>
  )
}

export default Locations
