import React from 'react'
import "./Profile.css"
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';

//Bootstrap Components
import {Container, Row, Col} from 'react-bootstrap';
function Profile() {
    return (
        <div className="profile-header">
            <Container>
                <Row>
                    <Col className="profile-info" md>
                        <IconButton>
                            <PersonIcon fontSize="large" className="profile-icon" />
                        </IconButton>   
                    </Col>
                    <Col className="profile-info" md>
                        <h3>Name: Joshua</h3>
                    </Col>
                    <Col className="profile-info" md>
                        <h3>Age: 18</h3>
                    </Col>
                </Row>
                <Row>
                    <Col className="profile-info" md>
                        <h3>Address: Bl5 Lot3 XY Subdivision, Rodavlas St., Sati, Cebu City</h3>
                    </Col>
                   
                </Row>
            </Container>
            
           
        </div>
    )
}

export default Profile
