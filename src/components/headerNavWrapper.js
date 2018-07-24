import React from 'react';
import styled from 'styled-components';
import heroImage from '../images/color.jpg'
import Hero from './hero' 
import Header from './header'


const LandingSection = styled.section`
    background-image: url(${heroImage});
    background-size: cover;
    /* grid-area: [header-start] / [hero-start] / [header-end] / [hero-end]; */
    grid-area: 1 / 1 / 3 / 4;
    height: 100vh;
    width: 100vw;
`;

const UnifiedLanding = () => (

    <LandingSection>
        <Header/>
        <Hero/>
    </LandingSection>
)

export default UnifiedLanding;