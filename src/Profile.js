import React from 'react';
import './Page.css';
import { Image, FormText } from 'react-bootstrap';
import styled from 'styled-components';

import ProfileImage from './images/ProfileImage.jpg'

const GridWrapper = styled.div`
    margin-top: 4em;
    margin-left: 60px;
    margin-right: 30px;
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
            <h2>Chul Woo Park</h2>
            <hr width="40%"></hr>
            <p>Software Engineer at Google</p>
            <p>BS Computer Engineering '19 at Purdue University</p>
            <hr width="80%"></hr>
            <p>Software: <u>Java</u>, <u>Go</u>, Python, C, C++, C#, JavaScript, HTML, CSS, VB</p>
            <p>Database: SQL, M (MUMPS - NoSQL for healthcare industry)</p>
            <p>Hardware: Verilog, Assembly (STM32), ABEL, LT Spice</p>
            <p>Languages: <u>English</u>, <u>Korean</u>, Spanish</p>
            <br/><br/><br/>
        </FormText>
    </GridWrapper>
)
