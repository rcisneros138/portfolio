import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: center; 
  border-radius: 5px;
  /* box-shadow: 5px 55px 50px -20px #b6b6b6;  */
  background-color: transparent;
  position:sticky;
  top:0;
  z-index:999;
  

`;

const NormalNav = styled.nav `
display: flex;
align-items: center;
`;

const ListContainer = styled.ul `
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin: 0 0 0 0;
`;

const Header = () => (
    <HeaderContainer>
      <NormalNav>
        <ListContainer>
          <li><a href="">link1</a></li>
          <li><a href="">link2</a></li>
        </ListContainer>
      </NormalNav>
    </HeaderContainer>
)

export default Header
