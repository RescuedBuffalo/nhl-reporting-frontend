import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    background-color: #000;
    color: #fff;
    text-align: center;
    padding: 10px;
    width: 100%;
`;

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <p>Contact Info | Social Media | Data Sources</p>
        </FooterContainer>
    );
}

export default Footer;
