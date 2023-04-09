import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Cards = (props) => {
  const handleName =(fullname) => alert(`the product mark is ${props.fullname}`) 
  return (
    <div>
   
      <div>
      <card className="card" style={{width: "5rem 3rem"}} >
       <Card.Img style={{Width:"5rem 3rem"}} variant="top" src={props.img}/>
        <Card.Body>
        <Card.Title>{props.fullname}</Card.Title>
        <Card.Text>{props.bio}</Card.Text>
        <Card.Text>{props.profession}</Card.Text>
        <Button variant="primary" onClick={handleName}>Go somewhere</Button>
      </Card.Body>
    </card>
    </div></div>
  )
}

export default Cards






