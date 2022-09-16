import React from 'react';
import { Image, Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import WebsiteLogo from '../images/WebsiteLogo.png';

const Styles = styled.div`
    .navbar {
        background-color: gray;
    }
    a, .navbar-nav, .navbar-light .nav-link {
        color: white;
        &:hover { color: black; }
    }
    .navbar-brand {
        font-family: 'Brush Script MT', cursive;
        font-size: 42px;
        color: white;
        &:hover { color: black; }
    }
    p {
        font-size: 32px;
        font-weight: bold;
        font-style: italic;
        font-family: 'Times New Roman', serif;
        &:hover { color: orange; }
    }
`;

class NavBar extends React.Component {
    render() {
        return (
            <Styles>
                <Navbar expand="lg">
                    <a href="/">
                        <Image href="/" src={WebsiteLogo} width="100" height="100" />
                    </a>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Item><Nav.Link href="/"><p>Home</p></Nav.Link></Nav.Item> 
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