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
            
            <h3>Name: Joshua</h3>
            <h3>Age: 18</h3>
            <h3 hidden>Address: Bl5 Lot3 XY Subdivision, Rodavlas St., Tisa, Cebu City</h3>
        </div>
    )
}

export default Profile
