import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import {Container,Row} from 'react-bootstrap'
import Banner from '../Components/Banner'


const Example01 = () => {
    return (
      <div>
        <Banner/>
      <div className="titledev-full">
        <Container className="title-container">
            <Row>
                <div className="col">
                    <ScrollAnimation animateIn='zoomIn' animateOnce={true}>
                    <h2>Soluciones </h2>
                <h4>Tenemos diversas soluciones para cada empresa</h4>
                    </ScrollAnimation>
                </div>
            </Row>
        </Container>
        </div>
        
        <div className="titledev-full"> 
         <Container className="title-container">
             <Row>
                 <div className="col">
                 <ScrollAnimation animateIn="fadeInRight">
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eius natus et dolorum nam numquam magni minima corrupti vero quam, eos corporis, impedit molestias a necessitatibus odit qui iure. Ut.</p>
             </ScrollAnimation>
                 </div>
             </Row>
         </Container>
        </div>
        
        <div className="titledev-full">
            <Container className="title-container">
            <ScrollAnimation animateIn="zoomInLeft" animateOnce={true}>
                <h1> hello</h1>
            </ScrollAnimation>
            </Container>
        </div>
        <div style={{
            width:"100%", 
            height:"300px", 
            marginTop:"20px", 
            justifyContent:"center",
            alignItems:"center",
            textAlign:"center"
        }}>
            <ScrollAnimation animateIn="fadeInLeft">
                <h2>Start Hello</h2>
            </ScrollAnimation>
        </div>
        <div style={{
            width:"100%", 
            height:"400px", 
            marginTop:"20px", 
            justifyContent:"center",
            alignItems:"center",
            textAlign:"center"
        }}>
            <ScrollAnimation animateIn="fadeInRight" duration="3s">
                <h2>fall Down </h2>
            </ScrollAnimation>
        </div>
      </div>
    )
}

export default Example01
