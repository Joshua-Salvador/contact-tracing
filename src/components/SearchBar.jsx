import React from 'react'
import "./SearchBar.css"

//Bootstrap Components
import {Form, Container} from 'react-bootstrap';

function SearchBar() {
  return (
    <div className="search-bar-main">
      <Container>
        <Form>
          <Form.Label>Search</Form.Label>
          <Form.Control className="green-outline" type="text" placeholder="Search Location"/>
        </Form>
      </Container>
      
    </div>
  )
}

export default SearchBar
