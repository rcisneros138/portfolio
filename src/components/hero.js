import React from 'react';
import styled from 'styled-components';
import heroImage from '../images/color.jpg'


const HeroWrapper = styled.div `
    height: 100vh;
    width: 100vw;
    grid-area: hero;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    /* background-image: url(${heroImage});
    background-size: cover; */
    /* padding-top: 70px; */
`;



const HeroInner = styled.div `

`;

const Hero1  = styled.h1`
    font-size: 5em;

    margin-top:0;
    margin-bottom: 0.5em;
`;

const Hero = () => ( 
    <HeroWrapper>
        <HeroInner>
            <Hero1>My awesome website</Hero1>
            <h2>Look at this website and bask in its amazing glory!</h2>
            <a href="https://example.com/">Go ahead...</a>
        </HeroInner>
    </HeroWrapper>
)


export default Hero;