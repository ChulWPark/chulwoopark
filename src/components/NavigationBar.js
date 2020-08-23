import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        background-color: #222;
    }
    a, .navbar-nav, .navbar-light .nav-link {
        color: white;
        &:hover { color: gray; }
    }
    .navbar-brand {
        font-family: Bangers;
        font-size: 24px;
        color: white;
        &:hover { color: gray; }
    }
    p {
        font-size: 12px;
        font-weight: bold;
        font-style: italic;
        font-family: Sonsie One;
    }
`;

class NavBar extends React.Component {
    render() {
        return (
            <Styles>
                <Navbar expand="lg">
                    <Navbar.Brand href="/">Chul Woo Park</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Item><Nav.Link href="/"><p>Profile</p></Nav.Link></Nav.Item> 
                            <Nav.Item><Nav.Link href="/career"><p>Career</p></Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link href="/education"><p>Education</p></Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link href="/project"><p>Project</p></Nav.Link></Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Styles>
        );
    }
}

export default class NavigationBar extends React.Component {
    render() {
        return (
            <NavBar></NavBar>
        );
    }
}