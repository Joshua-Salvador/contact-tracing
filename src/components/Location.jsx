import React, {useState} from 'react'
import './Location.css'
//Bootstrap components
import {Card, Button, Modal} from 'react-bootstrap'

function Location(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div>     
      <Card className="card">
        <Card.Img variant="top" src="https://picsum.photos/200/50" />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.address}</Card.Text>
          <Button variant="primary" onClick={handleShow}>Request Enter</Button>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Confirm request? Your information will be used for contact tracing.</Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save the World
          </Button>
        </Modal.Footer>
      </Modal>
    
    </div>
  )
}

export default Location

