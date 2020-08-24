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
    margin-right: 30px;
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
            <p>EpicCare Ambulatory (Outpatient) Department</p>
            <p>Encounter & Infrastructure Workgroup</p>
            <p>Healthcare Software Development</p>
            <p>Working on various projects to help physicians to provide a better medical care for their patients</p>
            <p>Development in C#, JS, HTML, CSS and M for Database</p>
        </FormText>
        <br/><br/><hr width="40%"></hr><br/><br/>
        <Image src={PurdueLogo} className="image-size-adjusted img-thumbnail" roundedCircle />
        <label style={{marginLeft: "1vw"}}><h2>Purdue University</h2></label>
        <FormText>
            <h3>West Lafayette, Indiana, USA</h3>
            <h3>Undergraduate Teaching Assistant / Aug 2018 - Dec 2018</h3>
            <p>Worked under ECE Department for Microprocessor Systems and Interfacing course (ECE 362) as a teaching assistant.</p>
            <p>Helped students during the assigned office hours.</p>
        </FormText>
        <br/><br/><hr width="40%"></hr><br/><br/>
        <Image src={FantomLogo} className="image-size-adjusted img-thumbnail" roundedCircle />
        <label style={{marginLeft: "1vw"}}><h2>Fantom Foundation</h2></label>
        <FormText>
            <h3>Gangnam-gu, Seoul, South Korea</h3>
            <h3>Software Engineering Intern / Jul 2018 - Aug 2018</h3>
            <p>Worked on designing the prediction model of the ecosystem within the block chain platform.</p>
            <p>Participated in various researches on possible decentralized applications (DApps).</p>
            <p>Learned how to implement coin mining algorithm.</p>
        </FormText>
        <br/><br/><hr width="40%"></hr><br/><br/>
        <Image src={PwCLogo} className="image-size-adjusted img-thumbnail" roundedCircle />
        <label style={{marginLeft: "1vw"}}><h2>PwC</h2></label>
        <FormText>
            <h3>Yongsan-gu, Seoul, South Korea</h3>
            <h3>Software Engineering Intern / Jun 2017 - Aug 2017</h3>
            <p>Worked with Data Analysis in Python for several companies in the Assurance Department.</p>
            <p>Implemented a Python tool that parses and organizes the data according to the specifications for comparison.</p>
            <p>Received an award for the best intern for excellent performance as a lead.</p>
        </FormText>
        <br/><br/><hr width="40%"></hr><br/><br/>
        <Image src={BioLeadersLogo} className="image-size-adjusted img-thumbnail" roundedCircle />
        <label style={{marginLeft: "1vw"}}><h2>BioLeaders Corp.</h2></label>
        <FormText>
            <h3>Bundang-gu, Seongnam-si, Gyeonggi-do, South Korea</h3>
            <h3>Software Engineering Intern / Jun 2016 - Aug 2016</h3>
            <p>Worked in developing the program within Cell Square machine, which is a biomedical equipment that diagnoses cancer in a collected cell on slide.</p>
            <p>Implemented the algorithm for alignment of the slide during the diagnosis.</p>
        </FormText>
        <br/><br/><br/>
    </Wrapper>
)