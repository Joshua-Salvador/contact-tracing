import React from 'react'
import "./Profile.css"
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';
function Profile() {
    return (
        <div className="profile-header">
            <IconButton>
                <PersonIcon fontSize="large" className="profile-icon" />
            </IconButton>
            
            <h3>Name: Barney the Dinosaur</h3>
            <h3>Age: 54</h3>
            <h3>Address: Stampy's Lovely World</h3>
        </div>
    )
}

export default Profile
