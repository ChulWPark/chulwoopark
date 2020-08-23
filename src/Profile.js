import React from 'react';
import './Page.css';
import { Image, FormText } from 'react-bootstrap';
import styled from 'styled-components';

import ProfileImage from './images/ProfileImage.jpg'

const GridWrapper = styled.div`
    margin-top: 4em;
    margin-left: 60px;
    margin-right: 60px;
    text-align: center;
    
    .image-size-adjusted {
        width: 50%;
        max-width: 400px;
    }
`;

export const Profile = (props) => (
    <GridWrapper>
        <h1>Profile</h1>
        <hr/>
        <Image src={ProfileImage} className="image-size-adjusted" roundedCircle />
        <br/><br/>
        <FormText>
            <h2>Chul Woo Park</h2><br/>
            <p>Software Developer at Epic</p>
            <p>BS Computer Engineering '19 at Purdue University</p>
            <p>Software: C, C++, Java, Python, C#, JavaScript, HTML, CSS, VB</p>
            <p>Database: SQL, M</p>
            <p>Hardware: Verilog, Assembly (stm32), ABEL, LT Spice</p>
            <p>Languages: English, Korean, Spanish</p>
        </FormText>
    </GridWrapper>
)