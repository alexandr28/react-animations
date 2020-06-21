import React from 'react'
import { Container, Row } from 'react-bootstrap'
import {fadeInDown} from 'react-animations'
import Radium, {StyleRoot} from 'radium'

const styles ={
    bounce:{
        animation: 'x ls',
        animationName: Radium.keyframes(fadeInDown,'bounce'),
        animationDuration:'3s'
    }
}

const Banner = () => {
    return (

        <StyleRoot>
            <div className="titledev-full">
        <Container className="title-container">
          <Row>
            <div className="col" style={styles.bounce}>
                <h2>Soluciones </h2>
                <h4>Tenemos diversas soluciones para cada empresa</h4>
            </div>
          </Row>
        </Container>
      </div>
        </StyleRoot>
    )
}

export default Banner
