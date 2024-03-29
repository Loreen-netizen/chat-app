import React, {useRef, useState} from 'react'
import {Container, Form, Button} from "react-bootstrap"



export const Login = ({setId: onIdSubmit}) => {

    const idRef= useRef()
const handleSubmit = (e) =>{
e.preventDefault()
onIdSubmit(idRef.current.value)
}

    return (
        <Container className= "align-items-center d-flex" style={{height: "100vh"}} >
        <Form onSubmit={handleSubmit} className="w-100">
            <Form.Group>
                <Form.Label>
                    Enter Your ID
                </Form.Label>
                <Form.Control type="text" ref={idRef} required>
                      </Form.Control>  
                      </Form.Group>
            <Button type="submit" className="mr-2">
             Login
            </Button>
            <Button variant="secondary">
            Create A New ID
            </Button>
            </Form> 
        </Container>
    )
}

export default Login
