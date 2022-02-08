import React from 'react';
import { Navbar } from '../components';
import styled from 'styled-components';
const SiteHeader = styled.header`
    margin-left:50px;
    

`

const Header = () => {
    return (
        <SiteHeader>
            <Navbar />
        </SiteHeader>
    )
}

export { Header }