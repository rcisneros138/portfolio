import React from 'react';
import styled from 'styled-components';
import { injectGlobal } from 'styled-components';



const AppLayout = styled.div`
    display: grid;
    grid-template-areas:
    
        "header  header    header"
        "hero    hero      hero  "
        "side    content   content"
        "side    content   content"
        "footer  footer    footer";

    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 50px auto 1fr 1fr 100px;

    `;

export default AppLayout;