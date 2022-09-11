import React from 'react';
import './Page.css';
import { Form, FormText } from 'react-bootstrap';
import styled from 'styled-components';

import MorphVideoLeft from "./videos/MorphVideoLeft.mp4"
import MorphAppGUI from "./videos/MorphAppGUI.mp4"
import SpaceInvaders from "./videos/SpaceInvaders.mp4"

const Wrapper = styled.div`
    margin-top: 4em;
    margin-left: 60px;
    margin-right: 30px;
    text-align: center;

    color: lightblue;

    .video-container {
        position: relative;
        padding-bottom: 56.25%;
        height: 0;
        margin-left: 23%;
    }

    .video-size-adjusted {
        position: absolute;
        top: 0;
        left: 0;
        width: 70%;
        height: 70%;
    }

    .video-border {
        margin: 0 auto;
        border: 5px solid black;
    }

    .form-margin-tb {
        margin-top: 20vw;
        margin-bottom: 20vw;
    }
`;

export const Project = (props) => (
    <Wrapper>
        <h1>Project</h1>
        <hr/>
        {/* Weather.3D */}
        <Form style={{marginTop: "8vw"}}>  
            <a style={{fontSize: "min(6vw, 36px)", color: "yellow"}} className="fa fa-bolt"></a>
            <label style={{marginLeft: "2vw"}}><h2>Weather.3D</h2></label>
            <FormText>
                <h3>Senior Design</h3>
                <h3>Jan 2019 - May 2019</h3>
                <p>Designed a weather simulation box integrated with an iOS application where the user can populate location and time</p>
                <p>Built a wireless device displaying the weather information with the real-time data retrieved from the simulation box via Bluetooth module</p>
                <p>Attached various sensors on the wireless device to capture indoor measurements and transmit them to the main device</p>
                <p>Utilized ESP32 Microcontroller to control hardwares and Respberry Pi to show animation</p>
                <p>Designed PCBs for both the weather simulation box and the wireless device </p>
                <p>Used a hologram prism to show the animation in 3D</p>
                <p>Simulated Rain, Snow, Wind, and Ambient Sound</p>
            </FormText>
            <a style={{fontSize: "min(4vw, 24px)", color: "black"}} className="fa fa-arrow-down"></a>
            <label style={{marginLeft: "2vw", marginRight: "2vw"}}><h3>Demonstration</h3></label>
            <a style={{fontSize: "min(4vw, 24px)", color: "black"}} className="fa fa-arrow-down"></a>
            <div className="video-container">
                <iframe title="Senior Design" className="embed-responsive-item video-size-adjusted" src="https://www.youtube.com/embed/JuJDPVAREbs" allowfullscreen="true"></iframe>
            </div>
        </Form>
        <hr width="40%"></hr>
        {/* Compiler Project */}
        <Form className="form-margin-tb">
            <a style={{fontSize: "min(6vw, 36px)", color: "red"}} className="fa fa-terminal"></a>
            <label style={{marginLeft: "2vw"}}><h2>Compiler</h2></label>
            <FormText>
                <h3>Compiler Project</h3>
                <h3>Aug 2018 - Dec 2018</h3>
                <p>Designed and built a compiler for micro language</p>
                <p>Utilized Bison library in C++ and performed optimization in Python</p>
            </FormText>
            <a style={{fontSize: "min(6vw, 36px)", color: "black"}} target="_blank" href="https://github.com/ChulWPark/Compiler-Project" className="fa fa-github-square"></a>
        </Form>
        <hr width="40%"></hr>
        {/* RoboGlove */}
        <Form className="form-margin-tb">
            <a style={{fontSize: "min(6vw, 36px)", color: "green"}} className="fa fa-hand-paper-o"></a>
            <label style={{marginLeft: "2vw"}}><h2>RoboGlove</h2></label>
            <FormText>
                <h3>Microcontroller Project</h3>
                <h3>Jan 2018 - May 2018</h3>
                <p>Designed a glove that transmits data to another device according to the hand gestures made by the user</p>
                <p>Built a mechanical hand that copies the gestures retrieved from the glove in real time with minimal delays</p>
                <p>Utilized ADC, PWM, TIM, UART peripherals from STM32F0DISCOVERY board and flex sensors to capture gestures</p>
            </FormText>
            <a style={{fontSize: "min(6vw, 36px)", color: "black"}} target="_blank" href="https://github.com/ChulWPark/Project-Microcontroller" className="fa fa-github-square"></a><br/>
            <a style={{fontSize: "min(4vw, 24px)", color: "black"}} className="fa fa-arrow-down"></a>
            <label style={{marginLeft: "2vw", marginRight: "2vw"}}><h3>Demonstration</h3></label>        
            <a style={{fontSize: "min(4vw, 24px)", color: "black"}} className="fa fa-arrow-down"></a>
            <div className="video-container">
                <iframe title="Robo Gloves" className="embed-responsive-item video-size-adjusted" src="https://www.youtube.com/embed/EBOHUqADWpE" allowfullscreen="true"></iframe>
            </div>
        </Form>
        <hr width="40%"></hr>
        {/* Image Morph */}
        <Form className="form-margin-tb">
            <a style={{fontSize: "min(6vw, 36px)", color: "orange"}} className="fa fa-picture-o"></a>
            <label style={{marginLeft: "2vw"}}><h2>Image Morph</h2></label>
            <FormText>
                <h3>Python Project</h3>
                <h3>Jan 2018 - May 2018</h3>
                <p>Designed an application that morphs and blends two images according to correspondences</p>
                <p>Implemented Affine Transformation Algorithm using Delaunay Triangulation</p>
                <p>Utilized GUI with PySide module</p>
            </FormText>
            <a style={{fontSize: "min(6vw, 36px)", color: "black"}} target="_blank" href="https://github.com/ChulWPark/Project-Image-Morphing" className="fa fa-github-square"></a><br/>
            <a style={{fontSize: "min(4vw, 24px)", color: "black"}} className="fa fa-arrow-down"></a>
            <label style={{marginLeft: "2vw", marginRight: "2vw"}}><h3>Demonstration</h3></label>        
            <a style={{fontSize: "min(4vw, 24px)", color: "black"}} className="fa fa-arrow-down"></a>
            <div className="video-container">
                <video className="video-size-adjusted video-border" controls src={MorphVideoLeft} type="video/mp4" />
            </div>
            <div className="video-container">
                <video className="video-size-adjusted video-border" controls src={MorphAppGUI} type="video/mp4" />
            </div>
        </Form>
        <hr width="40%"></hr>
        {/* ASIC Design Project */}
        <Form className="form-margin-tb">
            <a style={{fontSize: "min(6vw, 36px)", color: "purple"}} className="fa fa-lock"></a>
            <label style={{marginLeft: "2vw"}}><h2>AES Encryptor</h2></label>
            <FormText>
                <h3>ASIC Design Project</h3>
                <h3>Aug 2017 - Dec 2017</h3>
                <p>Designed and tested an AES encryptor using I2C Data Bus Transmission and ATD converter in Verilog</p>
                <p>Implemented encryption algorithms controlled by the Logic Control Unit</p>
                <p>Made an exhaustive test bench to verify the design</p>        
            </FormText>
            <a style={{fontSize: "min(6vw, 36px)", color: "black"}} target="_blank" href="https://github.com/ChulWPark/Project-ASIC-Design" className="fa fa-github-square"></a>
        </Form>
        <hr width="40%"></hr>
        {/* Space Invaders */}
        <Form style={{marginTop: "20vw"}}>
            <a style={{fontSize: "min(6vw, 36px)", color: "blue"}} className="fa fa-gamepad"></a>
            <label style={{marginLeft: "2vw"}}><h2>Space Invaders</h2></label>
            <FormText>
                <h3>Java Project</h3>
                <h3>Aug 2017 - Oct 2017</h3>
                <p>Space Invaders game</p>
                <p>Used graphics module (swing, awt)</p>
                <p>Made a user defined configuration setup to control the features of the game</p>
            </FormText>
            <a style={{fontSize: "min(6vw, 36px)", color: "black"}} target="_blank" href="https://github.com/ChulWPark/Project-Space-Invaders" className="fa fa-github-square"></a><br/>
            <a style={{fontSize: "min(4vw, 24px)", color: "black"}} className="fa fa-arrow-down"></a>
            <label style={{marginLeft: "2vw", marginRight: "2vw"}}><h3>Demonstration</h3></label>        
            <a style={{fontSize: "min(4vw, 24px)", color: "black"}} className="fa fa-arrow-down"></a>
            <div className="video-container">
                <video className="video-size-adjusted video-border" controls src={SpaceInvaders} type="video/mp4" />
            </div>
        </Form>
        <hr width="40%"></hr>
        {/* Zork */}
        <Form style={{marginTop: "20vw"}}>
            <a style={{fontSize: "min(6vw, 36px)", color: "navy"}} className="fa fa-gamepad"></a>
            <label style={{marginLeft: "2vw"}}><h2>Zork</h2></label>
            <FormText>
                <h3>C++ Project</h3>
                <h3>Oct 2017 - Dec 2017</h3>
                <p>Text-based adventure game</p>
            </FormText>
            <a style={{fontSize: "min(6vw, 36px)", color: "black"}} target="_blank" href="https://github.com/ChulWPark/Project-Zork" className="fa fa-github-square"></a><br/>
        </Form>
        <br/><br/><br/>
    </Wrapper>
)
