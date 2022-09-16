import React from 'react';
import './Page.css';
import { Image, FormText } from 'react-bootstrap';
import styled from 'styled-components';

import EducationHeader from './images/Text/Education.png'

import PurdueLogo from './images/PurdueLogo.jpg';
import BlueRidgeLogo from './images/BlueRidgeLogo.jpg';
import HyundaiLogo from './images/HyundaiLogo.jpg';

const Wrapper = styled.div`
    margin-top: 4em;
    margin-left: 60px;
    margin-right: 30px;
    text-align: center;

    color: black;

    .image-size-adjusted {
        width: 20%;
        max-width: 100px;
    }
`;

export const Education = (props) => (
    <Wrapper>
        <Image src={EducationHeader} />
        <hr/><br/><br/>
        <Image src={PurdueLogo} className="image-size-adjusted img-thumbnail" roundedCircle />
        <label style={{marginLeft: "1vw"}}><h2>Purdue University</h2></label>
        <FormText>
            <h3>West Lafayette, Indiana, USA</h3>
            <h3>Aug 2015 - May 2019</h3>
            <p>BS Computer Engineering '19</p>
            <p>Dean's List & Semester Honors</p>
        </FormText>
        <br/><br/><hr width="40%"></hr><br/><br/>
        <Image src={BlueRidgeLogo} className="image-size-adjusted img-thumbnail" roundedCircle />
        <label style={{marginLeft: "1vw"}}><h2>Blue Ridge School</h2></label>
        <FormText>
            <h3>Dyke, Virginia, USA</h3>
            <h3>Aug 2012 - May 2015</h3>
            <p>Graduated as a valedictorian with the highest GPA</p>
            <p>Varisty Golf Team Captain</p>
        </FormText>
        <br/><br/><hr width="40%"></hr><br/><br/>
        <Image src={HyundaiLogo} className="image-size-adjusted img-thumbnail" roundedCircle />
        <label style={{marginLeft: "1vw"}}><h2>Hyundai Senior High School</h2></label>
        <FormText>
            <h3>Gangnam-gu, Seoul, South Korea</h3>
            <h3>Mar 2011 - Jun 2012</h3>
            <p>Attended 3 semesters</p>
        </FormText>
        <br/><br/><br/>
    </Wrapper>
)