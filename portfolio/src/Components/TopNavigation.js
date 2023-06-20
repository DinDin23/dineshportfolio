import './TopNavigation.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import linkedinIcon from '../Assets/Images/Linkedin.svg';
import githubIcon from '../Assets/Images/Github.svg';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function TopNavigation() {
    return (
        <Router>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">@Dinesh</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#experience">Experience</Nav.Link>
                            <Nav.Link href="#projects">Projects</Nav.Link>
                            <Nav.Link href="#skills">Skills</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                        <span>
                            <div className="social-icon">
                                <a href="https://www.linkedin.com/in/dineshpolisetty/"
                                target='_blank'>
                                    <img src={linkedinIcon} alt="" />
                                </a>
                                <a href="https://github.com/DinDin23"
                                target='_blank'>
                                    <img src={githubIcon} alt="" />
                                </a>
                            </div>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
        
    );
}