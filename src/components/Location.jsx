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
      openWarningModalHandler();
      console.log(`Cannot enter, ${props.name} has reached maximum number of people.`);
      return
    } else {
      setShow(true)
    }
    
  };

  // Count
  const [count, setCount] = useState(28)

  const addCountHandler = () => {
    if(count === 30) {
      console.log(`Cannot enter, ${props.name} has reached maximum number of people.`);
      openWarningModalHandler();
      return
    } else {
      handleClose();
      setCount(count + 1);
    }
  }

    //Warning Modal
    const [showWarningModal, setShowWarningModal] = useState(false);

    const openWarningModalHandler = () => {
      if(count === 30) {
        setShowWarningModal(true);
      }
    }

    const closeWarningModalHandler = () => {
      setShowWarningModal(false);
    }

  return (
    <div>     
      <Card className="card">
        <Card.Img variant="top" src="https://picsum.photos/200/100" />
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
      <Modal show={showWarningModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Full Capacity Reached.</Modal.Title>
          <Modal.Body>Sorry, but {props.name} has reached full capacity.</Modal.Body>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="warning" onClick={closeWarningModalHandler}>
            Close
          </Button>
          <Button variant="primary" onClick={closeWarningModalHandler}>
            Save the World
          </Button>
        </Modal.Footer>
      </Modal>
    
    </div>
  )
}

export default Location

