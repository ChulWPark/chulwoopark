import React from 'react';
import './Page.css';
import { FormText } from 'react-bootstrap';
import styled from 'styled-components';

import MorphVideoLeft from "./videos/MorphVideoLeft.mp4"
import MorphAppGUI from "./videos/MorphAppGUI.mp4"
import SpaceInvaders from "./videos/SpaceInvaders.mp4"

const Wrapper = styled.div`
    margin-top: 4em;
    margin-left: 60px;
    margin-right: 60px;
    text-align: center;

    .video-container {
        position: relative;
        padding-bottom: 56.25%;
        height: 0;
    }

    .video-size-adjusted {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .video-border {
        margin: 0 auto;
        border: 5px solid black;
    }
`;

export const Project = (props) => (
    <Wrapper>
        <h1>Project</h1>
        <hr/><br/><br/>
        {/* Weather.3D */}
        <a style={{fontSize: "min(6vw, 36px)", color: "yellow"}} className="fa fa-bolt"></a>
        <label style={{marginLeft: "2vw"}}><h2>Weather.3D</h2></label>
        <FormText>
            <h3>Senior Design</h3>
            <h3>Jan 2019 - May 2019</h3>
            <ul>
                <li><p>Designed a weather simulation box integrated with an iOS application where the user can populate location and time</p></li>
                <li><p>Built a wireless device displaying the weather information with the real-time data retrieved from the simulation box via Bluetooth module</p></li>
                <li><p>Attached various sensors on the wireless device to capture indoor measurements and transmit them to the main device</p></li>
                <li><p>Utilized ESP32 Microcontroller to control hardwares and Respberry Pi to show animation</p></li>
                <li><p>Designed PCBs for both the weather simulation box and the wireless device </p></li>
                <li><p>Used a hologram prism to show the animation in 3D</p></li>
                <li><p>Simulated Rain, Snow, Wind, and Ambient Sound</p></li>
            </ul>
        </FormText>
        <a style={{fontSize: "min(4vw, 24px)", color: "black"}} className="fa fa-arrow-down"></a>
        <label style={{marginLeft: "2vw", marginRight: "2vw"}}><h3>Demonstration</h3></label>
        <a style={{fontSize: "min(4vw, 24px)", color: "black"}} className="fa fa-arrow-down"></a>
        <div className="video-container">
            <iframe title="Senior Design" className="embed-responsive-item video-size-adjusted" src="https://www.youtube.com/embed/JuJDPVAREbs" allowfullscreen></iframe>
        </div>
        <br/><br/><br/>
        {/* Compiler Project */}
        <a style={{fontSize: "min(6vw, 36px)", color: "red"}} className="fa fa-terminal"></a>
        <label style={{marginLeft: "2vw"}}><h2>Compiler</h2></label>
        <FormText>
            <h3>Compiler Project</h3>
            <h3>Aug 2018 - Dec 2018</h3>
            <ul>
                <li><p>Designed and built a compiler for micro language</p></li>
                <li><p>Utilized Bison library in C++ and performed optimization in Python</p></li>
            </ul>
        </FormText>
        <a style={{fontSize: "min(6vw, 36px)", color: "black"}} target="_blank" href="https://github.com/ChulWPark/Compiler-Project" className="fa fa-github-square"></a>
        <br/><br/><br/>
        {/* RoboGlove */}
        <a style={{fontSize: "min(6vw, 36px)", color: "green"}} className="fa fa-hand-paper-o"></a>
        <label style={{marginLeft: "2vw"}}><h2>RoboGlove</h2></label>
        <FormText>
            <h3>Microcontroller Project</h3>
            <h3>Jan 2018 - May 2018</h3>
            <ul>
                <li><p>Designed a glove that transmits data to another device according to the hand gestures made by the user</p></li>
                <li><p>Built a mechanical hand that copies the gestures retrieved from the glove in real time with minimal delays</p></li>
                <li><p>Utilized ADC, PWM, TIM, UART peripherals from STM32F0DISCOVERY board and flex sensors to capture gestures</p></li>
            </ul>
        </FormText>
        <a style={{fontSize: "min(4vw, 24px)", color: "black"}} className="fa fa-arrow-down"></a>
        <label style={{marginLeft: "2vw", marginRight: "2vw"}}><h3>Demonstration</h3></label>        
        <a style={{fontSize: "min(4vw, 24px)", color: "black"}} className="fa fa-arrow-down"></a>
        <div className="video-container">
            <iframe title="Robo Gloves" className="embed-responsive-item video-size-adjusted" src="https://www.youtube.com/embed/EBOHUqADWpE" allowfullscreen></iframe>
        </div>
        <br/><br/><br/>
        {/* Image Morph */}
        <a style={{fontSize: "min(6vw, 36px)", color: "orange"}} className="fa fa-picture-o"></a>
        <label style={{marginLeft: "2vw"}}><h2>Image Morph</h2></label>
        <FormText>
            <h3>Python Project</h3>
            <h3>Jan 2018 - May 2018</h3>
            <ul>
                <li><p>Designed an application that morphs and blends two images according to correspondences</p></li>
                <li><p>Implemented Affine Transformation Algorithm using Delaunay Triangulation</p></li>
                <li><p>Utilized GUI with PySide module</p></li>
            </ul>
        </FormText>
        <a style={{fontSize: "min(4vw, 24px)", color: "black"}} className="fa fa-arrow-down"></a>
        <label style={{marginLeft: "2vw", marginRight: "2vw"}}><h3>Demonstration</h3></label>        
        <a style={{fontSize: "min(4vw, 24px)", color: "black"}} className="fa fa-arrow-down"></a>
        <div className="video-container">
            <video className="video-size-adjusted video-border" controls src={MorphVideoLeft} type="video/mp4" />
        </div>
        <h3>Morph</h3>
        <div className="video-container">
            <video className="video-size-adjusted video-border" controls src={MorphAppGUI} type="video/mp4" />
        </div>
        <h3>App GUI</h3>
        <br/><br/><br/>
        {/* ASIC Design Project */}
        <a style={{fontSize: "min(6vw, 36px)", color: "purple"}} className="fa fa-lock"></a>
        <label style={{marginLeft: "2vw"}}><h2>AES Encryptor</h2></label>
        <FormText>
            <h3>ASIC Design Project</h3>
            <h3>Aug 2017 - Dec 2017</h3>
            <ul>
                <li><p>Designed and tested an AES encryptor using I2C Data Bus Transmission and ATD converter in Verilog</p></li>
                <li><p>Implemented encryption algorithms controlled by the Logic Control Unit</p></li>
                <li><p>Made an exhaustive test bench to verify the design</p></li>
            </ul>
        </FormText>
        <a style={{fontSize: "min(6vw, 36px)", color: "black"}} target="_blank" href="https://github.com/ChulWPark/Project-ASIC-Design" className="fa fa-github-square"></a>
        <br/><br/><br/>
        {/* Space Invaders */}
        <a style={{fontSize: "min(6vw, 36px)", color: "blue"}} className="fa fa-gamepad"></a>
        <label style={{marginLeft: "2vw"}}><h2>Space Invaders</h2></label>
        <FormText>
            <h3>Java Project</h3>
            <h3>Aug 2017 - Dec 2017</h3>
            <ul>
                <li><p>Designed and tested an AES encryptor using I2C Data Bus Transmission and ATD converter in Verilog</p></li>
                <li><p>Implemented encryption algorithms controlled by the Logic Control Unit</p></li>
                <li><p>Made an exhaustive test bench to verify the design</p></li>
            </ul>
        </FormText>
        <a style={{fontSize: "min(4vw, 24px)", color: "black"}} className="fa fa-arrow-down"></a>
        <label style={{marginLeft: "2vw", marginRight: "2vw"}}><h3>Demonstration</h3></label>        
        <a style={{fontSize: "min(4vw, 24px)", color: "black"}} className="fa fa-arrow-down"></a>
        <div className="video-container">
            <video className="video-size-adjusted video-border" controls src={SpaceInvaders} type="video/mp4" />
        </div>
        <h3>Game Play</h3>
        <br/><br/><br/>
    </Wrapper>
)