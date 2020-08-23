import React from 'react';
import './Page.css';
import { Image, FormText } from 'react-bootstrap';
import styled from 'styled-components';

import EpicLogo from './images/EpicLogo.png';
import PurdueLogo from './images/PurdueLogo.jpg';
import FantomLogo from './images/FantomLogo.jpg';
import PwCLogo from './images/PwCLogo.png';
import BioLeadersLogo from './images/BioLeadersLogo.png';

const Wrapper = styled.div`
    margin-top: 4em;
    margin-left: 60px;
    margin-right: 60px;
    text-align: center;

    .image-size-adjusted {
        width: 20%;
        max-width: 100px;
    }
`;

export const Career = (props) => (
    <Wrapper>
        <h1>Career</h1>
        <hr/><br/><br/>
        <Image src={EpicLogo} className="image-size-adjusted img-thumbnail" roundedCircle />
        <label style={{marginLeft: "1vw"}}><h2>Epic</h2></label>
        <FormText>
            <h3>Verona, Wisconsin, USA</h3>
            <h3>Software Developer | Sept 2019 - Present</h3>
            <ul>
                <li><p>EpicCare Ambulatory (Outpatient) Department</p></li>
                <li><p>Encounter & Infrastructure Workgroup</p></li>
                <li><p>Healthcare Software Development</p></li>
                <li><p>Working on various projects to help physicians to provide a better medical care for their patients</p></li>
                <li><p>Mostly develop in C#, JS, HTML, CSS using M for the Database</p></li>
            </ul>
        </FormText>
        <br/><br/><br/>
        <Image src={PurdueLogo} className="image-size-adjusted img-thumbnail" roundedCircle />
        <label style={{marginLeft: "1vw"}}><h2>Purdue University</h2></label>
        <FormText>
            <h3>West Lafayette, Indiana, USA</h3>
            <h3>Undergraduate Teaching Assistant / Aug 2018 - Dec 2018</h3>
            <ul>
                <li><p>Worked under ECE Department for Microprocessor Systems and Interfacing course (ECE 362) as a teaching assistant and helped students during the assigned office hour.</p></li>
            </ul>
        </FormText>
        <br/><br/><br/>
        <Image src={FantomLogo} className="image-size-adjusted img-thumbnail" roundedCircle />
        <label style={{marginLeft: "1vw"}}><h2>Fantom Foundation</h2></label>
        <FormText>
            <h3>Gangnam-gu, Seoul, South Korea</h3>
            <h3>Software Engineering Intern / Jul 2018 - Aug 2018</h3>
            <ul>
                <li><p>Worked on designing the prediction model of the ecosystem within the block chain platform.</p></li>
                <li><p>Participated in various researches on possible decentralized applications (DApps).</p></li>
                <li><p>Learned how to implement coin mining algorithm.</p></li>
            </ul>
        </FormText>
        <br/><br/><br/>
        <Image src={PwCLogo} className="image-size-adjusted img-thumbnail" roundedCircle />
        <label style={{marginLeft: "1vw"}}><h2>PwC</h2></label>
        <FormText>
            <h3>Yongsan-gu, Seoul, South Korea</h3>
            <h3>Software Engineering Intern / Jun 2017 - Aug 2017</h3>
            <ul>
                <li><p>Worked with Data Analysis in Python for several companies in the Assurance Department.</p></li>
                <li><p>Implemented a Python tool that parses and organizes the data according to the specifications for comparison.</p></li>
                <li><p>Received an award for the best intern for excellent performance as a lead.</p></li>
            </ul>
        </FormText>
        <br/><br/><br/>
        <Image src={BioLeadersLogo} className="image-size-adjusted img-thumbnail" roundedCircle />
        <label style={{marginLeft: "1vw"}}><h2>BioLeaders Corp.</h2></label>
        <FormText>
            <h3>Bundang-gu, Seongnam-si, Gyeonggi-do, South Korea</h3>
            <h3>Software Engineering Intern / Jun 2016 - Aug 2016</h3>
            <ul>
                <li><p>Worked in developing the program within Cell Square machine, which is a biomedical equipment that diagnoses cancer in a collected cell on slide.</p></li>
                <li><p>Implemented the algorithm for alignment of the slide during the diagnosis.</p></li>
            </ul>
        </FormText>
        <br/><br/><br/>
    </Wrapper>
)