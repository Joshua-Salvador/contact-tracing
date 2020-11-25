import React, {useState} from 'react'
import './Location.css'
//Bootstrap components
import {Card, Button, Modal} from 'react-bootstrap'

function Location(props) {
  // Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    if(count === 30) {
      console.log(`Cannot enter, ${props.name} has reached maximum number of people.`);
      return
    } else {
      setShow(true)
    }
    
  };

  // Count
  const [count, setCount] = useState(29)

  const addCountHandler = () => {
    if(count === 30) {
      console.log(`Cannot enter, ${props.name} has reached maximum number of people.`);
      return
    } else {
      handleClose();
      setCount(count + 1);
    }
  }


  return (
    <div>     
      <Card className="card">
        <Card.Img variant="top" src="https://picsum.photos/200/50" />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.address}</Card.Text>
          <Card.Text>Capacity: {props.capacity}</Card.Text>
          <Card.Text>Count: {count}</Card.Text>
          <Button variant="primary" onClick={handleShow}>Request Enter</Button>
        </Card.Body>
      </Card>

      {/* Confirm Request Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Confirm request? Your information will be used for contact tracing.</Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addCountHandler}>
            Save the World
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Full Capacity Reached Modal */}
      {/* <Modal>
        <Modal.Header closeButton>
          <Modal.Title>Full Capacity Reached.</Modal.Title>
          <Modal.Body>Sorry, but {props.name} has reached full capacity.</Modal.Body>
        </Modal.Header>
      </Modal>
     */}
    </div>
  )
}

export default Location

