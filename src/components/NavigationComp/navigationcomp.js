import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import TodoItem from "../TodoItem/Todoitem";
import Footer from "../Footer/Footer";


export default function NavComp(props) {
    return (
        <>

            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        {props.pricing? <Nav.Link href="#pricing">Pricing</Nav.Link>:" "}
                    </Nav>
                </Container>
            </Navbar>
            <br/>



        </>


    )
}