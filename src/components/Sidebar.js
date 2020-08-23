import React from 'react';

import styled from "styled-components";

import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";

/* This defines the actual bar going down the screen */
const StyledSideNav = styled.div`
    position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
    width: 60px;     /* Set the width of the sidebar */
    z-index: 1;      /* Stay on top of everything */
    top: 300px;      /* Stay at the top (3.7em)*/
    background-color: white; /* White */
    overflow-x: hidden;     /* Disable horizontal scroll */
    padding-top: 10px;
`;

const NavIcon = styled.div`
`;

const StyledNavItem = styled.div`
    height: 60px;
    width: 60px; /* width must be same size as NavBar to center */
    text-align: center; /* Aligns <a> inside of NavIcon div */
    margin-bottom: 0;   /* Puts space between NavItems */
    a {
        font-size: 2.5em;
        color: ${(props) => props.active ? "gray" : "black"};
        :hover {
            opacity: 0.7;
            text-decoration: none; /* Gets rid of underlining of icons */
        }  
    }
`;

class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePath: props.location.pathname,
            items: [
                {
                    path: '/', /* path is used as id to check which NavItem is active basically */
                    name: 'Profile',
                    css: 'fa fa-user',
                    key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
                },
                {
                    path: '/career',
                    name: 'Career',
                    css: 'fa fa-briefcase',
                    key: 2
                },
                {
                    path: '/education',
                    name: 'Education',
                    css: 'fa fa-graduation-cap',
                    key: 3
                },
                {
                    path: '/project',
                    name: 'Project',
                    css: 'fa fa-code',
                    key: 4
                },
            ]
        }
    }
    onItemClick = (path) => {
        this.setState({ activePath: path }); /* Sets activePath which causes rerender which causes CSS to change */
    }
    render() {
        const { items, activePath } = this.state;
        return (
            <StyledSideNav>
                {
                    /* items = just array AND map() loops thru that array AND item is param of that loop */
                    items.map((item) => {
                        /* Return however many NavItems in array to be rendered */
                        return (
                            <NavItem path={item.path} name={item.name} css={item.css} onItemClick={this.onItemClick} /* Simply passed an entire function to onClick prop */ active={item.path === activePath} key={item.key} />
                        )
                    })
                }
            </StyledSideNav>
        );
    }
}

const RouterSideNav = withRouter(SideNav);

class NavItem extends React.Component {
    handleClick = () => {
        const { path, onItemClick } = this.props;
        onItemClick(path);
    }
    render() {
        const { active } = this.props;
        return (
            <StyledNavItem active={active}>
                <Link to={this.props.path} className={this.props.css} onClick={this.handleClick}>
                    <NavIcon></NavIcon>
                </Link>
            </StyledNavItem>
        );
    }
}

export default class Sidebar extends React.Component {
    render() {
        return (
            <RouterSideNav></RouterSideNav>
        );
    }
}