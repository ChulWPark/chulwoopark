import React from 'react';
import './Page.css';
import { Image, Form, FormText } from 'react-bootstrap';
import styled from 'styled-components';

import ProfileImage from './images/ProfileImage.jpg'

// Text
import ChulWooPark from './images/Text/ChulWooPark.png'
import Software from './images/Text/Software.png'
import ComputingService from './images/Text/ComputingService.png'
import Database from './images/Text/Database.png'
import Hardware from './images/Text/Hardware.png'
import Languages from './images/Text/Languages.png'
import Career from './images/Text/Career.png'
import Education from './images/Text/Education.png'
import Project from './images/Text/Project.png'


// Software
import JavaIcon from './images/JavaIcon.png'
import GoIcon from './images/GoIcon.png'
import PythonIcon from './images/PythonIcon.png'
import CIcon from './images/CIcon.png'
import CppIcon from './images/CppIcon.png'
import CSharpIcon from './images/CSharpIcon.png'
import JSIcon from './images/JSIcon.jpg'
import HTMLIcon from './images/HTMLIcon.png'
import CSSIcon from './images/CSSIcon.png'
import VBIcon from './images/VBIcon.png'

// Computing Service
import GCPIcon from './images/GCPIcon.png'
import AWSIcon from './images/AWSIcon.jpg'
import FirebaseIcon from './images/FirebaseIcon.png'

// Database
import SQLIcon from './images/SQLIcon.png'
import NoSQLIcon from './images/NoSQLIcon.png'

// Hardware
import VerilogIcon from './images/VerilogIcon.PNG'
import STM32Icon from './images/STM32Icon.png'
import ABELIcon from './images/ABELIcon.png'
import LTSpiceIcon from './images/LTSpiceIcon.jpg'

// Language
import EnglishIcon from './images/EnglishIcon.png'
import KoreanIcon from './images/KoreanIcon.png'
import SpanishIcon from './images/SpanishIcon.png'

import GoogleLogo from './images/GoogleLogo.png';
import EpicLogo from './images/EpicLogo.png';
import PurdueLogo from './images/PurdueLogo.jpg';
import FantomLogo from './images/FantomLogo.jpg';
import PwCLogo from './images/PwCLogo.png';
import BioLeadersLogo from './images/BioLeadersLogo.png';

import BlueRidgeLogo from './images/BlueRidgeLogo.jpg';
import HyundaiLogo from './images/HyundaiLogo.jpg';

import MorphVideoLeft from "./videos/MorphVideoLeft.mp4"
import MorphAppGUI from "./videos/MorphAppGUI.mp4"
import SpaceInvaders from "./videos/SpaceInvaders.mp4"

const GridWrapper = styled.div`
    margin-top: 4em;
    margin-left: 60px;
    margin-right: 30px;
    text-align: center;

    color: black;

    .text-box {
        background-color: lightblue;
    }
    
    .image-size-adjusted {
        width: 50%;
        max-width: 400px;
    }

    .career-image-size-adjusted {
        width: 20%;
        max-width: 100px;
    }

    .skill-image-size-adjusted {
        width: 20%;
        max-width: 100px;
    }

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

    .content-section1 {
        display: grid;
        width: 50vw;
        margin-left: auto;
        margin-right: auto;
        grid-template-columns: repeat(1, 1fr);
    }

    .content-section2 {
        display: grid;
        width: 50vw;
        margin-left: auto;
        margin-right: auto;
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const Profile = (props) => (
    <GridWrapper>
        <Image src={ChulWooPark} width="735px" height="90px"/>
        <hr width="20%"></hr>
        <Image src={ProfileImage} className="image-size-adjusted" roundedCircle />
        <FormText>
            <hr width="25%"></hr>
            <h1>Software Engineer at Google</h1>
            <h1>BS Computer Engineering '19 at Purdue University</h1>
            <hr width="60%"></hr>
            <br/><br/>

            <Image src={Software} />
            <hr width="20%"></hr>
            <section class="content-section2">
                <figure>
                    <Image src={JavaIcon} className="skill-image-size-adjusted" roundedCircle />
                    <figcaption>Java</figcaption>
                </figure>
                <figure>
                    <Image src={GoIcon} className="skill-image-size-adjusted" roundedCircle />
                    <figcaption>Go</figcaption>
                </figure>
                <figure>
                    <Image src={PythonIcon} className="skill-image-size-adjusted" roundedCircle />
                    <figcaption>Python</figcaption>
                </figure>
                <figure>
                    <Image src={CIcon} className="skill-image-size-adjusted" roundedCircle />
                    <figcaption>C</figcaption>
                </figure>
                <figure>
                    <Image src={CppIcon} className="skill-image-size-adjusted" roundedCircle />
                    <figcaption>C++</figcaption>
                </figure>
                <figure>
                    <Image src={CSharpIcon} className="skill-image-size-adjusted" roundedCircle />
                    <figcaption>C#</figcaption>
                </figure>
                <figure>
                    <Image src={JSIcon} className="skill-image-size-adjusted" roundedCircle />
                    <figcaption>JavaScript</figcaption>
                </figure>
                <figure>
                    <Image src={HTMLIcon} className="skill-image-size-adjusted" roundedCircle />
                    <figcaption>HTML</figcaption>
                </figure>
                <figure>
                    <Image src={CSSIcon} className="skill-image-size-adjusted" roundedCircle />
                    <figcaption>CSS</figcaption>
                </figure>
                <figure>
                    <Image src={VBIcon} className="skill-image-size-adjusted" roundedCircle />
                    <figcaption>Visual Basic</figcaption>
                </figure>
            </section>
            <br/><br/><br/>

            <Image src={ComputingService} />
            <hr width="20%"></hr>
            <section class="content-section2">
                <figure>
                    <Image src={GCPIcon} className="skill-image-size-adjusted" roundedCircle />
                    <figcaption>GCP</figcaption>
                </figure>
                <figure>
                    <Image src={AWSIcon} className="skill-image-size-adjusted" roundedCircle />
                    <figcaption>AWS</figcaption>
                </figure>
            </section>
            <section class="content-section1">
                <figure>
                    <Image src={FirebaseIcon} className="skill-image-size-adjusted" roundedCircle />
                    <figcaption>Firebase</figcaption>
                </figure>
            </section>
            <br/><br/><br/>

            <Image src={Database} />
            <hr width="20%"></hr>
            <section class="content-section2">
                <figure>
                    <Image src={SQLIcon} className="skill-image-size-adjusted" roundedCircle />
                    <figcaption>SQL</figcaption>
                </figure>
                <figure>
                    <Image src={NoSQLIcon} className="skill-image-size-adjusted" roundedCircle />
                    <figcaption>M (MUMPS - NoSQL for healthcare industry)</figcaption>
                </figure>
            </section>
            <br/><br/><br/>

            <Image src={Hardware} />
            <hr width="20%"></hr>
            <section class="content-section2">
                <figure>
                    <Image src={VerilogIcon} className="skill-image-size-adjusted" roundedCircle />
                    <figcaption>Verilog</figcaption>
                </figure>
                <figure>
                    <Image src={STM32Icon} className="skill-image-size-adjusted" roundedCircle />
                    <figcaption>Assembly (STM32)</figcaption>
                </figure>
                <figure>
                    <Image src={ABELIcon} className="skill-image-size-adjusted" roundedCircle />
                    <figcaption>ABEL</figcaption>
                </figure>
                <figure>
                    <Image src={LTSpiceIcon} className="skill-image-size-adjusted" roundedCircle />
                    <figcaption>LTSpice</figcaption>
                </figure>
            </section>
            <br/><br/><br/>

            <Image src={Languages} />
            <hr width="20%"></hr>
            <section class="content-section2">
                <figure>
                    <Image src={EnglishIcon} className="skill-image-size-adjusted" roundedCircle />
                    <figcaption>English</figcaption>
                </figure>
                <figure>
                    <Image src={KoreanIcon} className="skill-image-size-adjusted" roundedCircle />
                    <figcaption>Korean</figcaption>
                </figure>
            </section>
            <section class="content-section1">
                <figure>
                    <Image src={SpanishIcon} className="skill-image-size-adjusted" roundedCircle />
                    <figcaption>Spanish</figcaption>
                </figure>
            </section>
            <br/><br/><br/>
        </FormText>

        <Image src={Career} width="464px" height="120px" className="text-box" />
        <hr/><br/><br/>
        <Image src={GoogleLogo} className="career-image-size-adjusted img-thumbnail" roundedCircle />
        <label style={{marginLeft: "1vw"}}><h2>Google</h2></label>
        <FormText>
            <h3>Seattle, Washington, USA</h3>
            <h3>Software Engineer | Jan 2022 - Present</h3>
            <p>Google Cloud</p>
            <p>Product Lifecycle - Control Team</p>
            <p>Working on various projects to help Google Cloud customers to onboard and manage billing</p>
            <p>Development in Java and Go</p>
        </FormText>
        <br/><br/><hr width="40%"></hr><br/><br/>
        <Image src={EpicLogo} className="career-image-size-adjusted img-thumbnail" roundedCircle />
        <label style={{marginLeft: "1vw"}}><h2>Epic</h2></label>
        <FormText>
            <h3>Verona, Wisconsin, USA</h3>
            <h3>Software Developer | Sept 2019 - Dec 2021</h3>
            <p>EpicCare Ambulatory (Outpatient) Department</p>
            <p>Encounter & Infrastructure Workgroup</p>
            <p>Healthcare Software Development</p>
            <p>Worked on various projects to help physicians to provide a better medical care for their patients</p>
            <p>Development in C#, JavaScript, HTML, CSS and M for Database</p>
        </FormText>
        <br/><br/><hr width="40%"></hr><br/><br/>
        <Image src={PurdueLogo} className="career-image-size-adjusted img-thumbnail" roundedCircle />
        <label style={{marginLeft: "1vw"}}><h2>Purdue University</h2></label>
        <FormText>
            <h3>West Lafayette, Indiana, USA</h3>
            <h3>Undergraduate Teaching Assistant / Aug 2018 - Dec 2018</h3>
            <p>Worked under ECE Department for Microprocessor Systems and Interfacing course (ECE 362) as a teaching assistant.</p>
            <p>Helped students during the assigned office hours.</p>
        </FormText>
        <br/><br/><hr width="40%"></hr><br/><br/>
        <Image src={FantomLogo} className="career-image-size-adjusted img-thumbnail" roundedCircle />
        <label style={{marginLeft: "1vw"}}><h2>Fantom Foundation</h2></label>
        <FormText>
            <h3>Gangnam-gu, Seoul, South Korea</h3>
            <h3>Software Engineering Intern / Jul 2018 - Aug 2018</h3>
            <p>Worked on designing the prediction model of the ecosystem within the block chain platform.</p>
            <p>Participated in various researches on possible decentralized applications (DApps).</p>
            <p>Learned how to implement coin mining algorithm.</p>
        </FormText>
        <br/><br/><hr width="40%"></hr><br/><br/>
        <Image src={PwCLogo} className="career-image-size-adjusted img-thumbnail" roundedCircle />
        <label style={{marginLeft: "1vw"}}><h2>PwC</h2></label>
        <FormText>
            <h3>Yongsan-gu, Seoul, South Korea</h3>
            <h3>Software Engineering Intern / Jun 2017 - Aug 2017</h3>
            <p>Worked with Data Analysis in Python for several companies in the Assurance Department.</p>
            <p>Implemented a Python tool that parses and organizes the data according to the specifications for comparison.</p>
            <p>Received an award for the best intern for excellent performance as a lead.</p>
        </FormText>
        <br/><br/><hr width="40%"></hr><br/><br/>
        <Image src={BioLeadersLogo} className="career-image-size-adjusted img-thumbnail" roundedCircle />
        <label style={{marginLeft: "1vw"}}><h2>BioLeaders Corp</h2></label>
        <FormText>
            <h3>Bundang-gu, Seongnam-si, Gyeonggi-do, South Korea</h3>
            <h3>Software Engineering Intern / Jun 2016 - Aug 2016</h3>
            <p>Worked in developing the program within Cell Square machine, which is a biomedical equipment that diagnoses cancer in a collected cell on slide.</p>
            <p>Implemented the algorithm for alignment of the slide during the diagnosis.</p>
        </FormText>
        <br/><br/><br/>

        <Image src={Education} width="656px" height="118px" className="text-box" />
        <hr/><br/><br/>
        <Image src={PurdueLogo} className="career-image-size-adjusted img-thumbnail" roundedCircle />
        <label style={{marginLeft: "1vw"}}><h2>Purdue University</h2></label>
        <FormText>
            <h3>West Lafayette, Indiana, USA</h3>
            <h3>Aug 2015 - May 2019</h3>
            <p>BS Computer Engineering '19</p>
            <p>Dean's List & Semester Honors</p>
        </FormText>
        <br/><br/><hr width="40%"></hr><br/><br/>
        <Image src={BlueRidgeLogo} className="career-image-size-adjusted img-thumbnail" roundedCircle />
        <label style={{marginLeft: "1vw"}}><h2>Blue Ridge School</h2></label>
        <FormText>
            <h3>Dyke, Virginia, USA</h3>
            <h3>Aug 2012 - May 2015</h3>
            <p>Graduated as a valedictorian with the highest GPA</p>
            <p>Varisty Golf Team Captain</p>
        </FormText>
        <br/><br/><hr width="40%"></hr><br/><br/>
        <Image src={HyundaiLogo} className="career-image-size-adjusted img-thumbnail" roundedCircle />
        <label style={{marginLeft: "1vw"}}><h2>Hyundai Senior High School</h2></label>
        <FormText>
            <h3>Gangnam-gu, Seoul, South Korea</h3>
            <h3>Mar 2011 - Jun 2012</h3>
            <p>Attended 3 semesters</p>
        </FormText>
        <br/><br/><br/>

        <Image src={Project} width="470px" height="152px" className="text-box" />
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
    </GridWrapper>
)