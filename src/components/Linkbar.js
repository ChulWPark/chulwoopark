import React from 'react';

import styled from "styled-components";

import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";

/* This defines the actual bar going down the screen */
const StyledSideNav = styled.div`
    position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
    /* right: 0; */
    width: 60px;     /* Set the width of the sidebar */
    z-index: 1;      /* Stay on top of everything */
    top: 600px;      /* Stay at the top (3.7em)*/
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
        color: ${(props) => "lightblue"};
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
            items: [
                {
                    path: 'https://www.linkedin.com/in/chul-woo-park-85721215b/', /* path is used as id to check which NavItem is active basically */
                    name: 'LinkedIn',
                    css: 'fa fa-linkedin-square',
                    key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
                },
                {
                    path: 'https://github.com/ChulWPark',
                    name: 'Github',
                    css: 'fa fa-github-square',
                    key: 2
                }
            ]
        }
    }
    render() {
        const { items } = this.state;
        return (
            <StyledSideNav>
                {
                    /* items = just array AND map() loops thru that array AND item is param of that loop */
                    items.map((item) => {
                        /* Return however many NavItems in array to be rendered */
                        return (
                            <NavItem path={item.path} name={item.name} css={item.css} key={item.key} />
                        )
                    })
                }
            </StyledSideNav>
        );
    }
}

const RouterSideNav = withRouter(SideNav);

class NavItem extends React.Component {
    render() {
        return (
            <StyledNavItem>
                <a target="_blank" href={this.props.path} className={this.props.css}></a>
            </StyledNavItem>
        );
    }
}

export default class Linkbar extends React.Component {
    render() {
        return (
            <RouterSideNav></RouterSideNav>
        );
    }
}
